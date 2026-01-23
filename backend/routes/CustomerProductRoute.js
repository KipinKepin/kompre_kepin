import express from "express";
import { getProductsByCIF } from "../controllers/CustomerProducts.js";

const router = express.Router();

router.get("/products/:cif/all-products", getProductsByCIF);

export default router;
