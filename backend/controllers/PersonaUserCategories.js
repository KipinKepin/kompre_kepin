import PersonaUserCategories from "../models/PersonaUserCategory.js";

export const createUserCategory = async (req, res) => {
  try {
    const { category_group, category_name, description } = req.body;

    if (!category_group || !category_name) {
      return res.status(400).json({
        status: "error",
        message: "category_group and category_name are required",
      });
    }

    const [category, created] = await PersonaUserCategories.findOrCreate({
      where: { category_group, category_name },
      defaults: { description },
    });

    if (!created) {
      return res.status(409).json({
        status: "error",
        message: "Category rule already exists",
      });
    }

    res.status(201).json({
      status: "success",
      message: "Category rule created",
      data: category,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Failed to create category rule",
    });
  }
};

export const deleteUserCategory = async (req, res) => {
  try {
    const { cif, category_name } = req.params;

    const deleted = await PersonaUserCategories.destroy({
      where: { cif, category_name },
    });

    if (!deleted) {
      return res.status(404).json({
        status: "error",
        message: "Category not found",
      });
    }

    res.json({
      status: "success",
      message: "User category deleted",
    });
  } catch (error) {
    console.error("Delete user category error:\n", error);
    res.status(500).json({
      status: "error",
      message: "Failed to delete user category",
    });
  }
};
