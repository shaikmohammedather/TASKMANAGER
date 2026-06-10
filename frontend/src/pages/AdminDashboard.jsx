import Navbar from "../components/Navbar.jsx";
import TaskForm from "../components/TaskForm.jsx";
import TaskTable from "../components/TaskTable.jsx";

function AdminDashboard() {
  return (
    <div>
      <Navbar />
      <h1>Admin Dashboard</h1>
      {/* <TaskForm /> */}
      <TaskTable />
    </div>
  );
}

export default AdminDashboard;
