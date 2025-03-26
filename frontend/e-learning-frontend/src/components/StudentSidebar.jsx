import { Link } from "react-router-dom";

const StudentSidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-lg p-4">
      <h2 className="text-xl font-bold mb-6">Student Dashboard</h2>
      <nav>
        <ul>
          <li className="mb-3">
            <Link to="/student/videos" className="block p-2 rounded hover:bg-gray-200">
              📚 All Videos
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/student/profile" className="block p-2 rounded hover:bg-gray-200">
              🙍‍♂ Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default StudentSidebar;
