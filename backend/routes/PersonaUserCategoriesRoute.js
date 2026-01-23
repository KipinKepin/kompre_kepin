import express from "express";
import {
  createUserCategory,
  deleteUserCategory,
} from "../controllers/PersonaUserCategories.js";

const router = express.Router();

router.post("/:cif/categories", createUserCategory);

router.delete("/:cif/categories/:category_name", deleteUserCategory);

export default router;
