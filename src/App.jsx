import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from ".//ProtectedRoute.jsx";
import LogIn from "./components/LogIn.jsx";
import SignUp from "./components/Home/SignUp.jsx";
import Layout from "./components/Layout.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import LabTest from "./components/LabTest/LabTest.jsx";
import Appointment from "./components/Appointment/Appointment.jsx";
import MedicineOrder from "./components/MedicineOrder/MedicineOrder.jsx";
import Message from "./components/Message/Message.jsx";
import Payment from "./components/Payment/Payment.jsx";
import Settings from "./components/Settings/Settings.jsx";
import Help from "./components/Help/Help.jsx";

import { useState, useEffect } from "react";

const App = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    let x = localStorage.getItem("user_login_status");
    if (x == "true") {
      setAuth(true);
    } else {
      setAuth(false);
    }
    // Check local storage for user login status
  }, []);

  const handleLogin = () => {
    setAuth(true);
    localStorage.setItem("user_login_status", "true");
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LogIn onLogin={handleLogin} />,
      index: true,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      element: <ProtectedRoute isAuthenticated={auth} />,

      children: [
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "/",
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
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
