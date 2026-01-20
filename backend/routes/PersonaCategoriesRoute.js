import express from "express";
import { getAllPersonaCategories } from "../controllers/PersonaCategories.js";

const router = express.Router();

router.get("/all-categories/:cif", getAllPersonaCategories);

export default router;
