import express from "express";
import { adminMiddleware } from "../middleware/adminMiddleware.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  createTask,
  getAllTask,
  updateTask,
  deleteTask,
} from "../controllers/adminController.js";
import { getTasks } from "../controllers/userController.js";

const router = express.Router();
// admin
router.post("/task", authMiddleware, adminMiddleware, createTask);
router.get("/task", authMiddleware, adminMiddleware, getAllTask);
router.put("/task/:id", authMiddleware, adminMiddleware, updateTask);
router.delete("/task/:id", authMiddleware, adminMiddleware, deleteTask);

// user
router.get("/userTasks", authMiddleware, getTasks);
export default router;
