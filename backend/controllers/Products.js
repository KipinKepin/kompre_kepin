import Products from "../models/ProductModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Products.findAll({
      order: [["product_type", "ASC"]],
    });

    res.json({
      status: "success",
      data: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch products",
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { product_code, product_name, product_type } = req.body;

    if (!product_code || !product_name || !product_type) {
      return res.status(400).json({
        message: "product_code, product_name, and product_type are required",
      });
    }

    const product = await Products.create({
      product_code,
      product_name,
      product_type,
    });

    res.status(201).json({
      status: "success",
      data: product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Failed to create product",
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Products.destroy({
      where: { id },
    });

    if (!deleted) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json({
      status: "success",
      message: "Product deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Failed to delete product",
    });
  }
};
