import PersonaCategories from "../models/PersonaCategory.js";

export const getAllPersonaCategories = async (req, res) => {
  try {
    const { cif } = req.params;
    const categories = await PersonaCategories.findAll({
      where: { cif },
    });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};
