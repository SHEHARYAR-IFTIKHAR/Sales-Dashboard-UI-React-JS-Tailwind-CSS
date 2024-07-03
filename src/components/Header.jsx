import React, { useState } from "react";

import { CiBellOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import ThemeSwitcher from "./ThemeSwitcher";
import { LogIn, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = ({ click, showSidebar, userData, onLogout }) => {
  const history = useNavigate();

  // const [isLoggedIn, setIsLoggedIn] = useState();

  // const handleSignUp = () => {
  //   setIsLoggedIn(true);
  // };

  const handleLogOut = () => {
    //  const user = setIsLoggedIn = localStorage.getItem("user_login");
    //  console.log(user);

    localStorage.removeItem("user_login_data");
    localStorage.setItem("user_login_status", "false");
    history("/login");
  };

  return (
    <div className="w-full justify-center items-center xsm:mt-5 md:mt-16">
      <div className="flex justify-between relative xsm:gap-2">
        {/* Left side */}

        <div className="flex xsm:w-[35%] items-center xsm:gap-2 w-auto">
          {/* Menu btn */}

          <div
            className="flex justify-center items-center cursor-pointer rounded-md dark:bg-gray-600 md:h-[3.5rem] md:w-[3.5rem] bg-white xsm:h-[2.5rem] xsm:w-[2.5rem] lg:hidden xsm:block shadow-md"
            onClick={click}
          >
            <div className="flex justify-center items-center xsm:h-[2.5rem] md:h-[3.5rem]">
              <GiHamburgerMenu className="xsm:size-8 md:size-10 dark:text-gray-300 text-gray-400" />
            </div>
          </div>

          {/* Search bar */}

          <div className="flex w-auto">
            <div className="flex justify-center items-center dark:bg-gray-700 rounded-md bg-white xsm:w-[2.5rem] md:w-[3rem] md:h-[3.5rem] xsm:h-[2.5rem]">
              <CiSearch className="z-10 dark:text-gray-300 text-gray-400 xsm:size-7 md:size-8 rounded-md" />
            </div>
            <input
              className="z-0 shadow-md dark:border-none text-gray-400 dark:text-gray-300 dark:bg-gray-700 px-3 absolute xsm:pl-[2rem] md:pl-[3.3rem] xsm:w-[6rem] md:w-[18rem] rounded-md lg:w-[29%]  2lg:w-[35%] md:h-[3.5rem] xsm:h-[2.5rem]"
              type="text"
              name=""
              id=""
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right side */}

        <div className="inline-flex xsm:gap-2 md:gap-4">
          {/* Notification */}

          <div className="cursor-pointer flex justify-center dark:border-none dark:bg-gray-700 bg-white items-center shadow-md rounded-md xsm:w-[2.5rem] xsm:h-[2.5rem] md:w-[3.5rem] md:h-[3.5rem] border">
            <CiBellOn className="rounded-md dark:bg-gray-700 dark:text-gray-300 text-gray-400  size-10" />
            <div className="absolute rounded-full xsm:mb-10 xsm:ml-9 md:mb-9 md:ml-12 w-3 h-3 bg-yellow-400"></div>
          </div>

          {/* Profile Image */}

          <div className="flex justify-center rounded-full items-center shadow-md xsm:w-[2.5rem] xsm:h-[2.5rem] md:w-[3.5rem] md:h-[3.5rem] border">
            <img
              className="xsm:w-[2.5rem] xsm:h-[2.5rem]  md:w-[3.5rem] md:h-[3.5rem] rounded-full shadow cursor-pointer"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>

          {/* Theme Switcher */}

          <div className="flex justify-center items-center shadow rounded-full xsm:w-[2.5rem] xsm:h-[2.5rem] md:w-[3.5rem] md:h-[3.5rem]">
            <ThemeSwitcher className="" />
          </div>

          {/* LogOut */}

          <button
            onClick={handleLogOut}
            className="flex justify-center items-center dark:bg-gray-700 hover:text-white cursor-pointer text-red-500 transition bg-white rounded-full hover:bg-red-500 shadow xsm:w-[2.5rem] xsm:h-[2.5rem] md:h-[3.5rem] md:w-[3.5rem]"
          >
            <LogOut />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
