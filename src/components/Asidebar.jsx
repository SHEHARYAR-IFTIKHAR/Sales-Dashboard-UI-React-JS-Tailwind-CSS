import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";

import { MdDashboard } from "react-icons/md";
import { MdOutlineEventAvailable } from "react-icons/md";
import { AiFillCarryOut } from "react-icons/ai";
import { AiFillMedicineBox } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { LuArrowLeftToLine } from "react-icons/lu";

const Asidebar = ({ click, showSidebar }) => {
  const menuTabs = [
    {
      id: 1,
      name: "Dashboard",
      icon: <MdDashboard />,
      path: "/",
    },
    {
      id: 2,
      name: "Lab Test",
      icon: <MdOutlineEventAvailable />,
      path: "/labtest",
    },
    {
      id: 3,
      name: "Appointment",
      icon: <AiFillCarryOut />,
      path: "/appointment",
    },
    {
      id: 4,
      name: "Medicine Order",
      icon: <AiFillMedicineBox />,
      path: "/medicineorder",
    },
    {
      id: 5,
      name: "Message",
      icon: <MdOutlineMessage />,
      path: "/message",
    },
    {
      id: 6,
      name: "Payment",
      icon: <FaWallet />,
      path: "/payment",
    },
    {
      id: 7,
      name: "Settings",
      icon: <CiSettings />,
      path: "/settings",
    },
  ];

  console.log(click);
  return (
    <div className="w-full h-full flex flex-col xsm:absolute lg:relative xsm:justify-between -border">
      <div className="w-full flex-col ">
        <div className="flex w-[21rem] h-[10rem] justify-between px-6 xsm:py-10 xsm:items-center">
          <h1 className="text-blue-700 dark:text-blue-500 font-bold text-3xl">
            Sales.
          </h1>
          <button
            onClick={click}
            className=" justify-center items-center  rounded-md dark:bg-gray-600 bg-white h-10 w-10 xsm:ml-3.5  xsm:block lg:hidden shadow"
          >
            <LuArrowLeftToLine className="size-10 dark:text-gray-300 text-gray-400" />
          </button>
        </div>

        <div className="w-full flex lg:block flex-col items-left h-full -border">
          {menuTabs.map((tab) => (
            <div
              key={tab.id}
              className="w-full flex items-center h-[3rem] -border"
            >
              <NavLink
                to={tab.path}
                className={({ isActive }) =>
                  `
                        ${
                          isActive
                            ? `text-blue-600 border-l-4 dark:text-blue-500 border-l-blue-600`
                            : "text-gray-500 dark:text-gray-300"
                        }
                        items-center
                        flex
                        w-full
                        h-full
                        px-5
                        
                        text-lg
                        font-medium
                        
                        `
                }
              >
                <div className="w-10 ml-6">
                  {/* <MdDashboard className=" size-7" /> */}
                  <i className="size-7">{tab.icon}</i>
                </div>
                <span className="lg:block ">{tab.name}</span>
              </NavLink>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex md:block">
        <div className="w-full flex items-center mb-0 h-[3rem]">
          <NavLink
            to="help"
            className={({ isActive }) =>
              `
                        ${
                          isActive
                            ? `text-blue-600 border-l-4 dark:text-blue-500 xsm:border-l-blue-600`
                            : `text-gray-500 dark:text-gray-300`
                        }
                        items-center
                        flex
                        w-full
                        h-full
                        px-5
                        text-lg
                        font-medium
                        `
            }
          >
            <div className="w-10 ml-6">
              <IoMdHelpCircleOutline className="size-7 " />
            </div>
            <span className="lg:block ">Help</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Asidebar;
