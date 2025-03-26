import { useState } from "react";
import Sidebar from "./Sidebar";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";

const MyVideos = () => {
  // Sample video data (You can replace this with API data)
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "React Hooks Explained",
      link: "https://www.youtube.com/watch?v=xyz123",
      description: "A beginner-friendly tutorial on React Hooks.",
      subject: "ReactJS",
    },
    {
      id: 2,
      title: "JavaScript Closures",
      link: "https://www.youtube.com/watch?v=abc456",
      description: "Deep dive into closures in JavaScript.",
      subject: "JavaScript",
    },
  ]);

  // Function to handle video deletion
  const handleDelete = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
    alert("Video deleted successfully!");
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">🎥 My Uploaded Videos</h2>

          {videos.length === 0 ? (
            <p className="text-gray-500">No videos uploaded yet.</p>
          ) : (
            <ul className="space-y-4">
              {videos.map((video) => (
                <li
                  key={video.id}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg shadow-md bg-gray-50 hover:shadow-xl transition"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700">{video.title}</h3>
                    <p className="text-gray-500">{video.description}</p>
                    <p className="text-sm text-gray-400">📚 Subject: {video.subject}</p>
                    <a
                      href={video.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Watch Video
                    </a>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <button className="text-green-600 hover:text-green-700">
                      <FaEdit size={20} />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-700"
                      onClick={() => handleDelete(video.id)}
                    >
                      <FaTrash size={20} />
                    </button>
                    <button className="text-blue-600 hover:text-blue-700">
                      <FaEye size={20} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyVideos;
