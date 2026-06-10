import Task from "../models/taskModel.js";

// taskCreation
export const createTask = async (req, res, next) => {
  try {
    const { name, task } = req.body;

    const newTask = await Task.create({
      name,
      task,
    });

    return res.status(201).json({
      message: "Task created successfully",
      newTask,
    });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

// acessingalltask
export const getAllTask = async (req, res, next) => {
  try {
    const tasks = await Task.find();

    return res.status(200).json({
      count: tasks.length,
      tasks,
    });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

// updatingTasks
export const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      message: "Task updated successfully",
      task,
    });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

// deletingTask
export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }
    return res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};
