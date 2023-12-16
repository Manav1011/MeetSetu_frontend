// PrivateRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRouteWrapper = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Outlet />;
  }
  return <Navigate replace to="/login" />;
};

export default PrivateRouteWrapper;
