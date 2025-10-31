import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"; // ✅ Import this

const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);

  // ❗ user check দরকার নেই, শুধু token থাকলেই user লগইন করা ধরা হয়
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
