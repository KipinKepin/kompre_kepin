import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/Database.js";
// import "./models/PersonaModel.js";
// import "./models/CustomerModel.js";
// import "./models/TransactionModel.js";
// import "./models/PersonaCategory.js";
// import "./models/PersonaUserCategory.js";
import CustomerRoute from "./routes/CustomerRoute.js";
import TransactionRoute from "./routes/TransactionRoute.js";
import PersonaRoute from "./routes/PersonaRoute.js";
import PersonaCategoriesRoute from "./routes/PersonaCategoriesRoute.js";

const app = express();

// (async () => {
//   await db.sync();
// })();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  }),
);

app.use(express.json());

app.use(CustomerRoute);
app.use(TransactionRoute);
app.use(PersonaRoute);
app.use(PersonaCategoriesRoute);

app.listen(5000, () => {
  console.log("server up and running on port 5000");
});
