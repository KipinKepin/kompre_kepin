import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import Personas from "./PersonaModel.js";

const PersonaUserCategory = db.define("persona_user_cat", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  cif: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category_name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

Personas.hasMany(PersonaUserCategory, { foreignKey: "cif" });
PersonaUserCategory.belongsTo(Personas, { foreignKey: "cif" });

export default PersonaUserCategory;
