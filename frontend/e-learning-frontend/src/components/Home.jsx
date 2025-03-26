import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

const HomePage = () => {
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  const openSignUpModal = () => setIsSignUpOpen(true);
  const closeSignUpModal = () => setIsSignUpOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">EduFree</h1>
        <div>
          <button
            className="px-4 py-2 mr-2 text-blue-600 font-semibold border border-blue-600 rounded-lg transition hover:bg-blue-600 hover:text-white"
            onClick={openLoginModal}
          >
            Log In
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg transition hover:bg-blue-700"
            onClick={openSignUpModal}
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-24 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white w-full min-h-screen">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold"
        >
          Learn for Free, Anytime, Anywhere
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg max-w-2xl"
        >
          Our platform provides high-quality educational content at no cost.
          Instructors upload videos, and learners gain knowledge without any
          barriers.
        </motion.p>
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-gray-200 transition"
          onClick={openSignUpModal}
        >
          Start Learning Now
        </motion.button>
      </header>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-auto">
        <p className="text-sm">
          © {new Date().getFullYear()} EduFree. All rights reserved.
        </p>
      </footer>

      {/* Login Modal */}
      <Login isOpen={isLoginOpen} onClose={closeLoginModal} />

      {/* Sign Up Modal */}
      <SignUp isOpen={isSignUpOpen} onClose={closeSignUpModal} />
    </div>
  );
};

export default HomePage;