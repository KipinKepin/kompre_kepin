import Customers from "../models/CustomerModel.js";
import Transactions from "../models/TransactionModel.js";

export const getAllTransactions = async (req, res) => {
  try {
    const customers = await Transactions.findAll({
      attributes: [
        "id",
        "cif",
        "transaction_date",
        "transaction_type",
        "merchant",
        "amount",
        "channel",
      ],
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Customers,
          attributes: ["cif", "name"],
          required: false,
        },
      ],
    });
    res.status(200).json({
      status: "success",
      data: customers,
    });
  } catch (error) {
    console.error("Error getting transactions:\n", error);
    res.status(500).json({
      status: "error",
      message: "failed to fetch all trx",
    });
  }
};

export const getTransactionByCif = async (req, res) => {
  try {
    const { cif } = req.params;

    const transaction = await Transactions.findOne({
      where: { cif },
      attributes: [
        "id",
        "cif",
        "transaction_date",
        "transaction_type",
        "merchant",
        "amount",
        "channel",
      ],
      include: [
        {
          model: Customers,
          attributes: ["name"],
          required: false,
        },
      ],
    });

    if (!transaction) {
      return res.status(404).json({
        status: "error",
        message: "Transaction of that user not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: transaction,
    });
  } catch (error) {
    console.error("Error gettransactionbycif", error);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch detail",
    });
  }
};
