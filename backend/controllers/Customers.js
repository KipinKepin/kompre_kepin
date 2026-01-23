// no need create, update, and delete cust
import Customers from "../models/CustomerModel.js";
import Personas from "../models/PersonaModel.js";
// import Personas from "../models/PersonaModel.js";

export const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customers.findAll({
      attributes: ["cif", "name", "occupation", "monthly_income"],
      order: [["cif", "DESC"]],
    });
    res.status(200).json({
      status: "success",
      data: customers,
    });
  } catch (error) {
    console.error("Error getting customers:\n", error);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch all customers",
    });
  }
};

export const getCustomerByCif = async (req, res) => {
  try {
    const { cif } = req.params;

    const customer = await Customers.findOne({
      where: { cif },
      attributes: ["cif", "name", "occupation", "monthly_income"],
      include: [
        {
          model: Personas,
          attributes: ["cif", "last_transaction"],
          required: false,
        },
      ],
    });

    if (!customer) {
      return res
        .status(404)
        .json({ status: "error", message: "Customer not found" });
    }

    res.status(200).json({
      status: "success",
      data: customer,
    });
  } catch (error) {
    console.error("Error getbycif", error);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch detail",
    });
  }
};
