import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold">MyWebsite</h1>

            <ul className="flex gap-6">

                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "text-yellow-300" : ""}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/login"
                    className={({ isActive }) => isActive ? "text-yellow-300" : ""}
                >
                    Login
                </NavLink>

                <NavLink
                    to="/register"
                    className={({ isActive }) => isActive ? "text-yellow-300" : ""}
                >
                    Register
                </NavLink>

                <NavLink
                    to="/dashboard"
                    className={({ isActive }) => isActive ? "text-yellow-300" : ""}
                >
                    Dashboard
                </NavLink>

            </ul>
        </nav>
    );
};

export default Navbar;
