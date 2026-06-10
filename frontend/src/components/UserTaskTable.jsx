import { useEffect, useState } from "react";
import API from "../services/api";

function UserTaskTable() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await API.get("/api/task/userTasks"); // CHECK ROUTE
        console.log(res.data);

        setTasks(res.data.tasks);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Task List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Task</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.task}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTaskTable;
