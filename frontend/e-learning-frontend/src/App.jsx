import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import MyVideos from "./components/MyVideos";
import AllVideos from "./components/AllVideos";
import StudentDashboard from "./components/StudentDashboard";
import AdminRegister from "./components/RegisterAdmin"
import AdminLogin from "./components/AdminLogin"

const Home = lazy(() => import("./components/Home"));
const Login = lazy(() => import("./components/Login"));
const SignUp = lazy(() => import("./components/SignUp"));
const TeacherDashboard = lazy(() => import("./components/TeacherDashboard"));
const UploadContent = lazy(() => import("./components/UploadContent"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </Router>
  );
}

function AppRoutes() {
  const [modalType, setModalType] = useState(null); // "login" | "signup" | null
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);


  // Handle route changes for modals
  useEffect(() => {
    const path = location.pathname;
    if (path === "/login" || path === "/signup") {
      setModalType(path.substring(1)); // Extracts "login" or "signup"
    } else {
      setModalType(null);
    }
  }, [location.pathname]);

  // Close modal function
  const closeModal = () => {
    setModalType(null);
    navigate("/"); // Redirect to home when modal closes
  };

  // Function to render modals
  const renderModal = () => {
    if (!modalType) return null;

    const ModalComponent = modalType === "login" ? Login : SignUp;
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative animate-fadeIn">
          <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl">
            ✖
          </button>
          <Suspense fallback={<div>Loading {modalType}...</div>}>
            <ModalComponent onClose={closeModal} />
          </Suspense>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/teacher/upload" element={<UploadContent />} />
        <Route path="/teacher/videos" element={<MyVideos />} />
        <Route path="/student/videos" element={<AllVideos />} />
        <Route path="/student/profile" element={<StudentDashboard />} />
      </Routes>
      {renderModal()}
    </div>
  );
}

export default App;
