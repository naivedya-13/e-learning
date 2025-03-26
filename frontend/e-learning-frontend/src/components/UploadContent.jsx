import { useState } from "react";
import Sidebar from "./Sidebar";

const UploadContent = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");

  const handleUpload = () => {
    if (!title || !link || !description || !subject) {
      alert("Please fill in all fields.");
      return;
    }
    console.log({ title, link, description, subject });
    alert("Content uploaded successfully!");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-50 to-purple-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Upload Form */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-xl border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Upload New Content
          </h2>

          <div className="space-y-4">
            {/* Video Title */}
            <div>
              <label className="block text-gray-700 font-medium">Video Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter video title"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>

            {/* YouTube Link */}
            <div>
              <label className="block text-gray-700 font-medium">YouTube Link</label>
              <input
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Paste YouTube link here"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-medium">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter video description"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                rows="4"
              ></textarea>
            </div>

            {/* Subject Selection */}
            <div>
              <label className="block text-gray-700 font-medium">Topic</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter topic name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Upload Button */}
            <button
              onClick={handleUpload}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Upload Content
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadContent;
