import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));



app.use("/api/auth", authRoutes);

  const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));