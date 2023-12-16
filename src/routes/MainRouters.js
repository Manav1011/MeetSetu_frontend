// MainRouter.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import Homepage from "../pages/Homepage";
import PrivateRoute from "./PrivateRoute";
import CameraPage from "../pages/CameraPage";

const MainRouters = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        exact
        path="/"
        element={
          <PrivateRoute flag="home">
            <Homepage />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/camera/:id" element={<CameraPage />} />
    </Routes>
  );
};

export default MainRouters;
