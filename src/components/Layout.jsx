import React, {useEffect, useState } from "react";
import {  Navigate, Outlet } from "react-router-dom";
import Asidebar from "./Asidebar";
import Header from "./Header";
import { ThemeProvider } from './contexts/Theme';
import LogIn from './LogIn';

const Layout = () => {

 
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleSignUp = () => {
  //   setIsLoggedIn(true);
  // };

  // const handleLogOut = () => {
  //   setIsLoggedIn(false);
  // };


  // Sidebar
  const [showSidebar, setShowSidebar] = useState(false);
  const [theme, setTheme] = useState(false)

  const toggleSidebar = () => {
    
     setShowSidebar(!showSidebar);
    
  };


  // Theme Changer

  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);


  // Log In 

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Check login state and user data on component mount
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    console.log(loggedIn);
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    setIsLoggedIn(loggedIn, storedUserData);
    setUserData(storedUserData);
  }, []);

  

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
  };


  
  return (
 
    <div className={`${theme?'dark':''}`}>
    <div  className={`flex dark:bg-gray-800 dark:text-gray-300 bg-gray-200 w-full h-[100vh]`}>
        <div className={`${showSidebar ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed top-0 left-0 z-20 flex lg:relative flex-col justify-center xsm:block dark:text-gray-300 dark:!bg-gray-700 !bg-white h-full xsm:w-[21rem] lg:w-[21rem] transition-transform duration-300 transform`} >
          <Asidebar showSidebar={showSidebar} click={toggleSidebar}/>
        </div>
      

      <div className=" lg:w-10/12 xsm:w-full h-full">
        <div className="flex justify-center w-full h-[18vh]">
          <div className="w-[95%] h-full">
            <Header showSidebar={showSidebar} click={toggleSidebar}  isLoggedIn={isLoggedIn} userData={userData} Logout={handleLogout}/>

          </div>
          {/* <div className="hidden">
          <LogIn onLogin={handleLogin} />
          </div> */}
        </div>

        <div className="flex justify-center w-full h-[82vh]">
          <div className="w-[95%] h-full ">
          {/* {!isLoggedIn && <LogIn onSignUp={handleSignUp} />} */}
            <Outlet />
            
          </div>
        </div>
      </div>
    </div>
    </div>
  
  );
};

export default Layout;
