import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import LabTest from "./components/LabTest/LabTest";
import Appointment from "./components/Appointment/Appointment";
import MedicineOrder from "./components/MedicineOrder/MedicineOrder";
import Message from "./components/Message/Message";
import Payment from "./components/Payment/Payment";
import Layout from "./components/Layout.jsx";
import Settings from "./components/Settings/Settings.jsx";
import Help from "./components/Help/Help.jsx";
import SignUp from "./components/Home/SignUp.jsx";
import LogIn from "./components/LogIn.jsx";

const isUser = localStorage.getItem('user_login')

console.log("is user",isUser)

const router = createBrowserRouter([
  {
    path: "login",
    element: <LogIn/>,
  },
  {
    path: "signup",
    element: <SignUp />,
    
  },

  {
    path: "layout",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "labtest",
        element: <LabTest />,
      },
      {
        path: "appointment",
        element: <Appointment />,
      },
      {
        path: "medicineorder",
        element: <MedicineOrder />,
      },
      {
        path: "message",
        element: <Message />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "help",
        element: <Help />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App router={router} />
  </React.StrictMode>
);
