import User from "../models/userModel.js";

export const adminMiddleware = (req, res, next) => {
  console.log("Admin middleware running");
  console.log("User from auth middleware:", req.user);
  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Access denied",
    });
  }

  next();
};
