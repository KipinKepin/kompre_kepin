import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import Customers from "./CustomerModel.js";

const Transactions = db.define("transactions", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  cif: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  transaction_date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  transaction_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  merchant: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(),
    allowNull: false,
  },
  channel: {
    type: DataTypes.STRING(),
  },
});

Customers.hasMany(Transactions, { foreignKey: "cif" });
Transactions.belongsTo(Customers, { foreignKey: "cif" });

export default Transactions;
