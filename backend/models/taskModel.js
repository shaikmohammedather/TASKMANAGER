import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  task: {
    type: String,
    required: [true, "Task is required"],
  },
});

const Task = mongoose.model("Task", taskSchema);
export default Task;
