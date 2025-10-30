import React from "react";

const Home = () => {
  return (
    <div className="bg-blue-600 h-screen text-white py-28 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to My Website 🌟
      </h1>
      
      <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
        This is your protected homepage. You can only see this banner 
        when you are logged in.
      </p>

      <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-md hover:bg-gray-200 transition">
        Get Started
      </button>
    </div>
  );
};

export default Home;
