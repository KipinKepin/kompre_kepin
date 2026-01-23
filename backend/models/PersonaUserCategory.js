import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const PersonaUserCategory = db.define(
  "persona_user_categories",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    category_group: {
      type: DataTypes.ENUM("fraud", "risk", "marketing", "wealth"),
      allowNull: false,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["category_group", "category_name"],
      },
    ],
  },
);

export default PersonaUserCategory;
