import React, { useState } from "react";
import { Link } from "react-router-dom";

const TeacherSignUp = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    youtubeId: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, youtubeId } = formData;

    // Validation
    if (!email || !password || !confirmPassword || !youtubeId) {
      setError("All fields are required!");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    console.log("Teacher Signed Up:", formData);
    onClose(); // Close the modal after successful signup
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded-md"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 border rounded-md"
        required
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm your password"
        value={formData.confirmPassword}
        onChange={handleChange}
        className="w-full p-2 border rounded-md"
        required
      />
      <input
        type="text"
        name="youtubeId"
        placeholder="Enter your YouTube ID"
        value={formData.youtubeId}
        onChange={handleChange}
        className="w-full p-2 border rounded-md"
        required
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
        Sign Up
      </button>
      <p className="text-center">
        Already have an account? <button onClick={onClose} className="text-blue-500">Log In</button>
      </p>
    </form>
  );
};

export default TeacherSignUp;