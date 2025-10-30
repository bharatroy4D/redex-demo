import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // ✅ Demo Registration
    // Normally API call korte hobe. For now, just set token
    localStorage.setItem("token", "userRegistered");
    navigate("/"); // Registration success → Home page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm"
      >
        <h2 className="text-2xl text-gray-600 font-bold text-center mb-6">
          Register
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border border-gray-400 text-gray-700 outline-none p-2 rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border border-gray-400 text-gray-700 outline-none p-2 rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Register
        </button>

        <p className="text-center text-gray-500 mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;