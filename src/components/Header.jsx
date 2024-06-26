import React, { useState  } from "react";

import { CiBellOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import ThemeSwitcher from './ThemeSwitcher';
import { LogIn, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";


  

const Header = ({click, showSidebar, userData, onLogout}) => {

  const history = useNavigate();

  
  // const [isLoggedIn, setIsLoggedIn] = useState();

  // const handleSignUp = () => {
  //   setIsLoggedIn(true);
  // };

  const handleLogOut = () => {
  //  const user = setIsLoggedIn = localStorage.getItem("user_login");
  //  console.log(user);

  localStorage.removeItem('user_login')
  history("/login");
  };




  return (
    <div className="w-full justify-center items-center mt-16">
      <div className="flex justify-between relative xsm:gap-2">
      <button
          onClick={click}
          className=" justify-center items-center rounded-md dark:bg-gray-600 bg-white h-10 w-10 hover:bg-blue-100 xsm:ml-3.5 lg:hidden xsm:block shadow-md"
        >
          
             <GiHamburgerMenu className="size-10 dark:text-gray-300 hover:text-blue-600" />
         
        </button>
        <div className="inline-flex items-center w-auto xsm:mr-[5rem]">
      
          <div className="flex justify-center items-center dark:bg-gray-700 rounded-md bg-white w-[3rem] h-[3.5rem]">
            <CiSearch className="z-10 dark:text-gray-300 text-gray-400 size-8 rounded-md" />
          </div>
          <input
            className="z-0 border shadow dark:border-none dark:text-gray-300 dark:bg-gray-700 border-gray-300 px-3 absolute pl-[3.3rem] xsm:w-[8rem] md:w-[20rem] rounded-md lg:w-[30rem]  2lg:w-[40rem] h-[3.5rem]"
            type="text"
            name=""
            id=""
            placeholder="Search"
          />
        </div>

        <div className=" flex gap-4 ">
          <div className="cursor-pointer flex justify-center dark:border-none dark:bg-gray-700 bg-white items-center shadow-md rounded-md w-[3.5rem] h-[3.5rem] border">
            <CiBellOn className="rounded-md dark:bg-gray-700 dark:text-gray-300 text-gray-400  size-10" />
            <div className="absolute rounded-full mb-12 ml-12 w-3 h-3 bg-yellow-400"></div>
          </div>
          <div className="flex justify-center rounded-full items-center shadow-md w-[3.5rem] h-[3.5rem] border">
            <img
              className="w-[3.5rem] h-[3.5rem] rounded-full shadow cursor-pointer"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex shadow rounded-full h-[3.5rem] w-[3.5rem]">
            <ThemeSwitcher/>
          </div>
          <button
           onClick={handleLogOut}
           className="flex justify-center dark:bg-gray-700 hover:text-white cursor-pointer text-red-500 transition bg-white rounded-full hover:bg-red-500 shadow items-center h-[3.5rem] w-[3.5rem]">
            <LogOut/>
            
          </button> 
          
          
        </div>
      </div>
    </div>
  );
};

export default Header;
