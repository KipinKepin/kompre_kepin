import { Sequelize } from "sequelize";

const db = new Sequelize("persona_intelligence", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default db;
