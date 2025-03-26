import { useState } from "react";

const videos = [
  { id: 1, title: "React Basics", link: "https://youtu.be/react" },
  { id: 2, title: "Node.js Introduction", link: "https://youtu.be/nodejs" },
  { id: 3, title: "MongoDB Tutorial", link: "https://youtu.be/mongodb" },
];

const AllVideos = () => {
  const [search, setSearch] = useState("");

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">📚 All Videos</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search videos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-4 focus:ring focus:ring-blue-300"
      />

      {/* Video List */}
      <ul className="space-y-3">
        {filteredVideos.map((video) => (
          <li key={video.id} className="p-3 bg-gray-50 rounded shadow-sm">
            <a href={video.link} target="_blank" rel="noopener noreferrer" className="text-blue-600">
              {video.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllVideos;
