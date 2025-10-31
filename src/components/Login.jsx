import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../context/features/authApi";
import { setCredentials } from "../context/features/AuthSlice";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login] = useLoginMutation();
    const [form, setForm] = useState({ email: "", password: "" })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await login(form).unwrap();
            dispatch(setCredentials(res.token))
            navigate("/dashboard");
        } catch (err) {
            alert("Login is failed")
        }
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
                    name="email"
                    value={form.email}
                    placeholder="Enter Email"
                    className="w-full border border-gray-400 text-gray-700 outline-none p-2 rounded mb-4"
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    value={form.password}
                    placeholder="Enter Password"
                    className="w-full border border-gray-400 text-gray-700 outline-none p-2 rounded mb-4"
                    onChange={handleChange}
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
