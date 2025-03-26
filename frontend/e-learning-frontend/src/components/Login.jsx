import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = ({ isOpen, onClose }) => {
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✖
          </button>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <div className="bg-blue-600 p-3 rounded-full">
            <FaGraduationCap className="text-white text-2xl" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl font-bold mt-4">Welcome Back</h2>
        <p className="text-center text-gray-600 text-sm">
          Choose your role to continue
        </p>

        {/* Role Selection */}
        <div className="flex justify-center mt-4">
          <button
            className={`px-4 py-2 w-1/2 text-sm font-semibold rounded-l-lg ${
              role === "teacher"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setRole("teacher")}
          >
            Teacher
          </button>
          <button
            className={`px-4 py-2 w-1/2 text-sm font-semibold rounded-r-lg ${
              role === "student"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setRole("student")}
          >
            Student
          </button>
        </div>

        {/* Conditionally Render Fields */}
        <div className="mt-6">
          {role === "teacher" && (
            <>
              {/* Username Field for Teacher */}
              <label className="text-sm font-semibold text-gray-700 block mb-1">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full p-3 mt-1 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </>
          )}

          {/* Email Field for Student */}
          {role === "student" && (
            <>
              <label className="text-sm font-semibold text-gray-700 block mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full p-3 mt-1 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </>
          )}
        </div>

        {/* Password Input */}
        <div className="mt-4 relative">
          <label className="text-sm font-semibold text-gray-700 block mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full p-3 mt-1 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="text-right mt-2">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-600 text-white font-semibold py-3 mt-4 rounded-lg hover:bg-blue-700 transition">
          Login
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-sm mt-4">
          You're new here?{" "}
          <button onClick={onClose} className="text-blue-600 font-semibold hover:underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;