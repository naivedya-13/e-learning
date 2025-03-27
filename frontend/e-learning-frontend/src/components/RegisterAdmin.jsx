import { useState } from "react";

const RegisterModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    password: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Password validation
    if (e.target.name === "password") {
      const password = e.target.value;
      const isValid =
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /\d/.test(password) &&
        /[\W_]/.test(password);

      setErrors({ ...errors, password: !isValid });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.password) {
      alert("Account Created!");
      onClose();
    } else {
      alert("Password does not meet requirements.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-2">Admin Registration</h2>
        <p className="text-gray-600 text-center mb-4">Create your admin account</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Create password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <div className="text-sm text-gray-500">
            <p className={`flex items-center ${errors.password ? "text-red-500" : "text-green-500"}`}>
              ✅ At least 8 characters
            </p>
            <p className={`flex items-center ${errors.password ? "text-red-500" : "text-green-500"}`}>
              ✅ Include uppercase & lowercase
            </p>
            <p className={`flex items-center ${errors.password ? "text-red-500" : "text-green-500"}`}>
              ✅ Include number
            </p>
            <p className={`flex items-center ${errors.password ? "text-red-500" : "text-green-500"}`}>
              ✅ Include special character
            </p>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account? <span className="text-blue-600 cursor-pointer">Sign In</span>
        </p>

        <button onClick={onClose} className="mt-3 w-full text-gray-500">Close</button>
      </div>
    </div>
  );
};

export default RegisterModal;
