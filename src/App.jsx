import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUp from "./components/Home/SignUp";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard/Dashboard";


const isUser = localStorage.getItem("user_login");
console.log(isUser);

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          {/* <Route
            path="/"
            element={
              isUser !== isUser ? (
                <LogIn/>
              ) : (
                <Navigate to="/layout" />
              )
            }
          />
          <Route element={<Layout />}>
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
          </Route> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
