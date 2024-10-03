import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";

const ProtectedRoute = ({ children }) => {
  const { token } = useUser();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
