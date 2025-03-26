import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const TeacherDashboard = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white shadow-lg">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
