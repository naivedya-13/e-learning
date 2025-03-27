import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

const HomePage = () => {
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);
  const [adminModalType, setAdminModalType] = useState(null); // "register" | "login" | null

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  const openSignUpModal = () => setIsSignUpOpen(true);
  const closeSignUpModal = () => setIsSignUpOpen(false);

  const openAdminModal = (type) => {
    setAdminModalType(type);
    setIsAdminDropdownOpen(false);
  };
  
  const closeAdminModal = () => setAdminModalType(null);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">EduFree</h1>
        <div className="flex items-center space-x-4">
          <button
            className="px-4 py-2 text-blue-600 font-semibold border border-blue-600 rounded-lg transition hover:bg-blue-600 hover:text-white"
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

          {/* Admin Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsAdminDropdownOpen(!isAdminDropdownOpen)}
              className="px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg transition hover:bg-gray-800"
            >
              Admin
            </button>
            {isAdminDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-40">
                <button
                  onClick={() => openAdminModal("register")}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Sign Up
                </button>
                <button
                  onClick={() => openAdminModal("login")}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Login
                </button>
              </div>
            )}
          </div>
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

      {/* Modals */}
      {isLoginOpen && <Login isOpen={isLoginOpen} onClose={closeLoginModal} />}
      {isSignUpOpen && <SignUp isOpen={isSignUpOpen} onClose={closeSignUpModal} />}
      
      {adminModalType === "register" && (
        <React.Suspense fallback={<div>Loading...</div>}>
          <AdminRegister isOpen={true} onClose={closeAdminModal} />
        </React.Suspense>
      )}
      
      {adminModalType === "login" && (
        <React.Suspense fallback={<div>Loading...</div>}>
          <AdminLogin isOpen={true} onClose={closeAdminModal} />
        </React.Suspense>
      )}
    </div>
  );
};

export default HomePage;
