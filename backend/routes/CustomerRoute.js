import express from "express";
import { getAllCustomers, getCustomerByCif } from "../controllers/Customers.js";

const router = express.Router();

router.get("/customers", getAllCustomers);
router.get("/customers/:cif", getCustomerByCif);

export default router;
