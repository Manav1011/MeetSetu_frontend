// AuthProvider.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(-1);
  const [activeMeeting, setActiveMeeting] = useState(null);
  const login = () => {
    // Perform login logic, set isAuthenticated to true on success
    setAuthenticated(1);
  };

  const logout = () => {
    // Perform logout logic, set isAuthenticated to false
    setAuthenticated(0);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        setActiveMeeting,
        activeMeeting,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
