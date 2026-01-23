import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import Customers from "./CustomerModel.js";
import Products from "./ProductModel.js";

const CustomerProducts = db.define("customer_products", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },

  cif: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  product_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },

  balance: {
    type: DataTypes.DECIMAL(18, 2),
    defaultValue: 0,
  },

  outstanding: {
    type: DataTypes.DECIMAL(18, 2),
    defaultValue: 0,
  },
});

Customers.hasMany(CustomerProducts, { foreignKey: "cif" });
CustomerProducts.belongsTo(Customers, { foreignKey: "cif" });

Products.hasMany(CustomerProducts, { foreignKey: "product_id" });
CustomerProducts.belongsTo(Products, { foreignKey: "product_id" });

export default CustomerProducts;
