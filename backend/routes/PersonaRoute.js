import express from "express";
import {
  getAllPersonas,
  getPersonaByCif,
  analyzePersonaByCIF,
  updatePersona,
} from "../controllers/Personas.js";

const router = express.Router();

router.get("/personas", getAllPersonas);
router.get("/personas/:cif", getPersonaByCif);
router.put("/personas/:cif", updatePersona);
router.post("/personas/:cif/analyze", analyzePersonaByCIF);

export default router;
