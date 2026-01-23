import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Products = db.define("products", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },

  product_code: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },

  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  product_type: {
    type: DataTypes.ENUM("deposit", "loan", "credit_card", "investment"),
    allowNull: false,
  },
});

export default Products;
