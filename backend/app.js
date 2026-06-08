import dotenv from "dotenv";
dotenv.config();

import express from "express";
// import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";
connectDB();
const app = express();
app.use(express.json());
// route
// app.use("/api/auth", authRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

export default app;
