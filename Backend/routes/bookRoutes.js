import express from "express";
import { createBook, getAllBooks } from "../controllers/bookController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();


router.get("/", getAllBooks);
router.post("/create", authMiddleware, createBook);



export default router;