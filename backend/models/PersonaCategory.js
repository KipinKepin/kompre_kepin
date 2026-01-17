import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import Personas from "./PersonaModel.js";

const PersonaCategories = db.define("persona_categories", {
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
  category_group: {
    type: DataTypes.STRING,
  },
  category_name: {
    type: DataTypes.STRING,
  },
  score: {
    type: DataTypes.DECIMAL(5, 2),
  },
  resultJSON: {
    type: DataTypes.JSON,
  },
});

Personas.hasMany(PersonaCategories, { foreignKey: "cif" });
PersonaCategories.belongsTo(Personas, { foreignKey: "cif" });

export default PersonaCategories;
