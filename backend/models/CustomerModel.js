import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Customers = db.define("customers", {
  cif: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  birth_date: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  birth_place: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  job: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  monthly_income: {
    type: DataTypes.DECIMAL(18.2),
  },
});

export default Customers;
