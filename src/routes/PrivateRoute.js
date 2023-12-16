// PrivateRoute.js
import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, login, logout } = useAuth();

  useEffect(() => {
    const access = localStorage.getItem("accessToken");
    if (access) {
      login();
    }
    if (!access) {
      logout();
    }
  }, []);

  if (isAuthenticated === 1) {
    return children;
  }
  if (isAuthenticated === 0) {
    return <Navigate replace to="/logout" />;
  }
  if (isAuthenticated === -1) {
    return <div>Loading</div>;
  }
};

export default PrivateRoute;
