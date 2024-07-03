import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// // Function to get the access token from cookies
// const getAccessToken = () => {
//   return localStorage.getItem("user_login");
// };

// // Function to check if the user is authenticated
// const isAuthenticated = () => {
//   // console.log("is authenticated", !!getAccessToken());
//   return !!getAccessToken();
// };

// const handleLogin = () => {
//   console.log("login");
// };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
