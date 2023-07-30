import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLogin }) => {
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
