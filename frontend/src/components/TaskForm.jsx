import { useState } from "react";
import API from "../services/api.js";

function TaskForm() {
  const [name, setName] = useState("");
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const taskData = {
        name,
        task,
      };

      console.log("Sending:", taskData);

      const token = localStorage.getItem("token");

      const res = await API.post("/task/task", taskData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Created:", res.data);

      setName("");
      setTask("");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h2>Create Task</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            required
          />
        </div>

        <div>
          <label>Task</label>
          <textarea
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter Task"
            required
          />
        </div>

        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
