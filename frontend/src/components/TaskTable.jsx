import { useEffect, useState } from "react";
import API from "../services/api";

function TaskTable() {
  const [tasks, setTasks] = useState([]);

  const [name, setName] = useState("");
  const [task, setTask] = useState("");

  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editTask, setEditTask] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/api/task/task");

      console.log(res.data);

      setTasks(res.data.tasks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      await API.post("/api/task/task", {
        name,
        task,
      });

      setName("");
      setTask("");

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (item) => {
    setEditId(item._id);
    setEditName(item.name);
    setEditTask(item.task);
  };

  const handleUpdate = async () => {
    try {
      await API.put(`/api/task/task/${editId}`, {
        name: editName,
        task: editTask,
      });

      setEditId(null);
      setEditName("");
      setEditTask("");

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/api/task/task/${id}`);

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* <h1>Admin Dashboard</h1> */}

      <form onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />

        <button type="submit">Create Task</button>
      </form>

      <h2>Task List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((item) => (
            <tr key={item._id}>
              <td>
                {editId === item._id ? (
                  <input
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                ) : (
                  item.name
                )}
              </td>

              <td>
                {editId === item._id ? (
                  <input
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                  />
                ) : (
                  item.task
                )}
              </td>

              <td>
                {editId === item._id ? (
                  <button onClick={handleUpdate}>Save</button>
                ) : (
                  <button onClick={() => handleEditClick(item)}>Edit</button>
                )}

                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
