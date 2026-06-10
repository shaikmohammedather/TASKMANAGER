import Navbar from "../components/Navbar.jsx";
import UserTaskTable from "../components/UserTaskTable.jsx";

function UserDashboard() {
  return (
    <div>
      <Navbar />

      <h1>User Dashboard</h1>

      <UserTaskTable />
    </div>
  );
}

export default UserDashboard;
