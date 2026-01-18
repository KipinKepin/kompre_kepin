import Personas from "../models/PersonaModel.js";

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
      }
    );

    res.json({ message: "Persona updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
