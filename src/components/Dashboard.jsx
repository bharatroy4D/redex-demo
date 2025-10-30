import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove login token
    navigate("/login");               // redirect to login
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-700">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-lg font-semibold mb-2">Users</h2>
            <p className="text-gray-500">Total Users: 50</p>
          </div>

          <div className="bg-white shadow rounded p-4">
            <h2 className="text-lg font-semibold mb-2">Sales</h2>
            <p className="text-gray-500">Monthly Sales: $12,000</p>
          </div>

          <div className="bg-white shadow rounded p-4">
            <h2 className="text-lg font-semibold mb-2">Tasks</h2>
            <p className="text-gray-500">Pending Tasks: 8</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
