import { Link } from "react-router-dom";
import { FaUpload, FaVideo, FaInfoCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-xl p-6 flex flex-col border-r border-gray-200">
      {/* Dashboard Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">📚 Teacher Panel</h2>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-3">
          <li>
            <Link
              to="/teacher/upload"
              className="flex items-center gap-3 p-3 rounded-lg text-gray-700 font-medium hover:bg-blue-100 transition"
            >
              <FaUpload className="text-blue-600" />
              Upload Content
            </Link>
          </li>
          <li>
            <Link
              to="/teacher/videos"
              className="flex items-center gap-3 p-3 rounded-lg text-gray-700 font-medium hover:bg-blue-100 transition"
            >
              <FaVideo className="text-blue-600" />
              My Videos
            </Link>
          </li>
          <li>
            <Link
              to="/teacher"
              className="flex items-center gap-3 p-3 rounded-lg text-gray-700 font-medium hover:bg-blue-100 transition"
            >
              <FaInfoCircle className="text-blue-600" />
              Info
            </Link>
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <button className="mt-auto bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
