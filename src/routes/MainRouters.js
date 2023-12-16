// MainRouter.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import Homepage from "../pages/Homepage";
import PrivateRoute from "./PrivateRoute";
import MeetView from "../pages/MeetView";

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
      <Route path="/meet/:id" element={<MeetView />} />
    </Routes>
  );
};

export default MainRouters;
