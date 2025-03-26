import React, { useState } from "react";
import StudentSignUp from "./StudentSignUp";
import TeacherSignUp from "./TeacherSignUp";

function SignUp({ isOpen, onClose }) {
  const [role, setRole] = useState("student");

  if (!isOpen) return null; // Hide when not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✖
          </button>
        </div>

        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

        {/* Role Selection */}
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => setRole("student")}
            className={`px-4 py-2 rounded-md ${
              role === "student" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setRole("teacher")}
            className={`px-4 py-2 rounded-md ${
              role === "teacher" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Teacher
          </button>
        </div>

        {/* Signup Form */}
        <div>{role === "student" ? <StudentSignUp onClose={onClose} /> : <TeacherSignUp onClose={onClose} />}</div>
      </div>
    </div>
  );
}

export default SignUp;