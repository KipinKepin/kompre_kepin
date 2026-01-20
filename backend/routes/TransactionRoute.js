import express from "express";
import {
  getAllTransactions,
  getTransactionByCif,
} from "../controllers/Transactions.js";

const router = express.Router();

router.get("/transactions", getAllTransactions);
router.get("/transactions/:cif", getTransactionByCif);

export default router;
