import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import Customers from "./CustomerModel.js";

const Personas = db.define("personas", {
  cif: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  uuid: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    validate: {
      notEmpty: true,
    },
  },
  last_transaction: {
    type: DataTypes.DATE,
  },
});

Customers.hasOne(Personas, { foreignKey: "cif" });
Personas.belongsTo(Customers, { foreignKey: "cif" });

export default Personas;
