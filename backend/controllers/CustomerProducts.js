import CustomerProducts from "../models/CustomerProduct.js";
import Products from "../models/ProductModel.js";

export const getProductsByCIF = async (req, res) => {
  try {
    const { cif } = req.params;

    const products = await CustomerProducts.findAll({
      where: { cif },
      include: [
        {
          model: Products,
          attributes: ["product_code", "product_name", "product_type"],
        },
      ],
    });

    res.json({
      status: "success",
      data: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch customer products",
    });
  }
};
