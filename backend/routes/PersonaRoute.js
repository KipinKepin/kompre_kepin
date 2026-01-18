import express from "express";
import { getAllPersonas, getPersonaByCif } from "../controllers/Personas.js";

const router = express.Router();

router.get("/personas", getAllPersonas);
router.get("/personas/:cif", getPersonaByCif);

export default router;
