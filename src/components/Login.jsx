import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        localStorage.setItem("token", "userLoggedIn");
        navigate("/");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">

            <form
                onSubmit={handleLogin}
                className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm"
            >
                <h2 className="text-2xl text-gray-600 font-bold text-center mb-6">Login</h2>

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
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Login
                </button>

                <p className="text-center text-gray-500 mt-4 text-sm">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-blue-600 font-medium">
                        Register
                    </Link>
                </p>
            </form>

        </div>
    );
};

export default Login;
