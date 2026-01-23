import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Customers = db.define("customers", {
  cif: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  occupation: {
    type: DataTypes.STRING,
  },

  monthly_income: {
    type: DataTypes.DECIMAL(18, 2),
  },
});

export default Customers;
