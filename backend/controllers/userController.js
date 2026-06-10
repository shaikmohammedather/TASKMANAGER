import Task from "../models/taskModel.js";

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();

    return res.status(200).json({
      tasks,
    });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};
