// src/ProtectedRoute.js
import Layout from "./components/Layout";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated }) => {
  console.log("User login status", isAuthenticated);
  console.log("isAuthenticated user", isAuthenticated);
  if (isAuthenticated === false) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
