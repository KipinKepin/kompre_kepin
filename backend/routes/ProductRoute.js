import express from "express";
import {
  getAllProducts,
  createProduct,
  deleteProduct,
} from "../controllers/Products.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.post("/products", createProduct);
router.delete("/products/:id", deleteProduct);

export default router;
