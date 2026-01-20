import Personas from "../models/PersonaModel.js";
import Transactions from "../models/TransactionModel.js";
import PersonaCategories from "../models/PersonaCategory.js";
import PersonaUserCategories from "../models/PersonaUserCategory.js";
import { generateAI } from "../controllers/OllamaClient.js";

export const getAllPersonas = async (req, res) => {
  try {
    const personas = await Personas.findAll({
      attributes: ["uuid", "cif", "last_transaction"],
      order: [["last_transaction", "DESC"]],
    });

    res.status(200).json({
      status: "success",
      data: personas,
    });
  } catch (error) {
    console.error("Error getting personas:\n", error);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch all personas",
    });
  }
};

export const getPersonaByCif = async (req, res) => {
  try {
    const { cif } = req.params;

    const persona = await Personas.findByPk(cif);
    if (!persona) {
      return res.status(404).json({ message: "Persona not found" });
    }

    res.json(persona);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePersona = async (req, res) => {
  try {
    const { cif } = req.params;

    const persona = await Personas.findByPk(cif);
    if (!persona) {
      return res.status(404).json({ message: "Persona not found" });
    }

    await Personas.update(
      {
        last_transaction: new Date(),
      },
      {
        where: { cif },
      },
    );

    res.json({ message: "Persona updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const analyzePersonaByCIF = async (req, res) => {
  try {
    const { cif } = req.params;

    const persona = await Personas.findByPk(cif);
    if (!persona) {
      return res.status(404).json({ message: "Persona not found" });
    }

    const transactions = await Transactions.findAll({
      where: { cif },
      order: [["transaction_date", "DESC"]],
      limit: 200,
    });

    if (!transactions.length) {
      return res.status(400).json({ message: "No transactions found" });
    }

    const userCategories = await PersonaUserCategories.findAll({
      where: { cif },
    });

    const prompt = `
Analisa data transaksi nasabah dengan CIF ${cif}.

Divisi utama:
- fraud
- risk
- marketing
- wealth

Kategori tambahan dari user:
${JSON.stringify(userCategories)}

Data transaksi:
${JSON.stringify(transactions)}

Aturan WAJIB:
- Output HARUS raw JSON (tanpa markdown)
- Setiap divisi BISA memiliki LEBIH DARI SATU kategori
- Kategori dari AI dan user boleh muncul bersamaan
- Jika kategori berasal dari user, beri source = "user"
- Jika kategori dari AI, source = "ai"
- Score 0–100 (number, TANPA %)
- Sertakan transaction_ids relevan per kategori

Format JSON:
{
  "fraud": {
    "overall_score": 0,
    "categories": [
      {
        "category_name": "",
        "source": "ai | user",
        "score": 0,
        "summary": "",
        "transaction_ids": []
      }
    ]
  },
  "risk": { "overall_score": 0, "categories": [] },
  "marketing": { "overall_score": 0, "categories": [] },
  "wealth": { "overall_score": 0, "categories": [] }
}
`;

    const aiRaw = await generateAI(prompt);

    const rawText = aiRaw.data.response;

    function extractJSON(text) {
      return text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();
    }

    const cleanText = extractJSON(rawText);

    let aiResult;
    try {
      aiResult = JSON.parse(cleanText);
    } catch (err) {
      console.error("RAW AI OUTPUT:\n", rawText);
      console.error("CLEANED OUTPUT:\n", cleanText);
      throw new Error("AI returned invalid JSON");
    }

    await PersonaCategories.destroy({ where: { cif } });

    for (const division of Object.keys(aiResult)) {
      const divData = aiResult[division];

      for (const cat of divData.categories) {
        await PersonaCategories.create({
          cif,
          category_group: division,
          category_name: cat.category_name,
          score: cat.score,
          resultJSON: cat,
        });

        if (cat.source === "user") {
          await PersonaUserCategories.findOrCreate({
            where: { cif, category_name: cat.category_name },
            defaults: { description: cat.summary },
          });
        }
      }
    }

    persona.last_transaction = transactions[0].transaction_date;
    await persona.save();

    res.json({
      status: "success",
      message: "Persona analyzed successfully",
      data: aiResult,
    });
  } catch (error) {
    console.error("Analyze persona error:\n", error);
    res.status(500).json({
      status: "error",
      message: "Persona analysis failed",
    });
  }
};
