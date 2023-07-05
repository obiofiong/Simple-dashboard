import Main from "../components/main/Main";
import Sidebar from "../components/sidebar/Sidebar";
import "../App.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <Main />
    </div>
  );
}

export default Dashboard;
