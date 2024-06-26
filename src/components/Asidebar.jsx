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
  console.log(click);
  return (
    <div className="w-full h-full flex flex-col xsm:absolute lg:relative justify-between lg:w-full">
      <div className="w-full flex-col ">
        <div className="flex w-[21rem] h-[10rem] justify-between px-6 py-10 xsm:items-center">
          <h1 className="text-blue-700 dark:text-blue-500 font-bold text-3xl">
            Sales.
          </h1>
          <button
            onClick={click}
            className=" justify-center items-center  rounded-md dark:bg-gray-600 bg-white h-10 w-10 hover:bg-blue-100 xsm:ml-3.5  xsm:block lg:hidden shadow-md"
          >
            <LuArrowLeftToLine className="size-10 dark:text-gray-300 hover:text-blue-600" />
          </button>
        </div>

        <div className="w-full flex lg:block flex-col items-left h-full">
          <div className="w-full flex items-center h-[4.5rem]">
            <NavLink
              to="dashboard"
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
                <MdDashboard className=" size-7" />
              </div>
              <span className="lg:block ">Dashboard</span>
            </NavLink>
          </div>

          <div className="w-full flex items-center h-[4.5rem]">
            <NavLink
              to="labtest"
              className={({ isActive }) =>
                `flex
                        ${
                          isActive
                            ? `text-blue-600 border-l-4 dark:text-blue-500 lg:border-l-blue-600`
                            : "text-gray-500 dark:text-gray-300"
                        }
                        items-center
                        w-full
                        h-full
                        px-5
                        text-lg
                        font-medium
                        `
              }
            >
              <div className="w-10 ml-6">
                <MdOutlineEventAvailable className=" size-7" />
              </div>
              <span className="lg:block">Lab Test</span>
            </NavLink>
          </div>

          <div className="w-full flex items-center h-[4.5rem]">
            <NavLink
              to="appointment"
              className={({ isActive }) =>
                `flex
                        ${
                          isActive
                            ? `text-blue-600 border-l-4 dark:text-blue-500 lg:border-l-blue-600`
                            : "text-gray-500 dark:text-gray-300"
                        }
                        items-center
                        w-full
                        h-full
                        px-5
                        text-lg
                        font-medium
                        `
              }
            >
              <div className="w-10 ml-6">
                <AiFillCarryOut className=" size-7" />
              </div>
              <span className="lg:block ">Appointment</span>
            </NavLink>
          </div>

          <div className="w-full flex items-center h-[4.5rem]">
            <NavLink
              to="medicineorder"
              className={({ isActive }) =>
                `flex
                        ${
                          isActive
                            ? `text-blue-600 border-l-4 dark:text-blue-500 lg:border-l-blue-600`
                            : "text-gray-500 dark:text-gray-300"
                        }
                        items-center
                        w-full
                        h-full
                        px-5
                        text-lg
                        font-medium
                        `
              }
            >
              <div className="w-10 ml-6">
                <AiFillMedicineBox className="size-7" />
              </div>
              <span className="lg:block ">Medicine Order</span>
            </NavLink>
          </div>

          <div className="w-full flex items-center h-[4.5rem]">
            <NavLink
              to="message"
              className={({ isActive }) =>
                `flex
                        ${
                          isActive
                            ? `text-blue-600 border-l-4 dark:text-blue-500 lg:border-l-blue-600`
                            : "text-gray-500 dark:text-gray-300"
                        }
                        items-center
                        w-full
                        h-full
                        px-5
                        text-lg
                        font-medium
                        `
              }
            >
              <div className="w-10 ml-6">
                <MdOutlineMessage className="size-6 " />
              </div>
              <span className="lg:block ">Message</span>
            </NavLink>
          </div>

          <div className="w-full flex items-center h-[4.5rem]">
            <NavLink
              to="payment"
              className={({ isActive }) =>
                `flex
                        ${
                          isActive
                            ? `text-blue-600 border-l-4 dark:text-blue-500 lg:border-l-blue-600`
                            : "text-gray-500 dark:text-gray-300"
                        }
                        items-center
                        w-full
                        h-full
                        px-5
                        text-lg
                        font-medium
                        `
              }
            >
              <div className="w-10 ml-6">
                <FaWallet className="size-6 " />
              </div>
              <span className="lg:block ">Payment</span>
            </NavLink>
          </div>

          <div className="w-full flex items-center h-[4.5rem]">
            <NavLink
              to="settings"
              className={({ isActive }) =>
                `flex
                        ${
                          isActive
                            ? `text-blue-600 border-l-4 dark:text-blue-500 lg:border-l-blue-600`
                            : "text-gray-500 dark:text-gray-300"
                        }
                        items-center
                        w-full
                        h-full
                        px-5
                        text-lg
                        font-medium
                        `
              }
            >
              <div className="w-10 ml-6">
                <CiSettings className="size-7 " />
              </div>
              <span className="lg:block ">Settings</span>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="w-full flex md:block">
        <div className="w-full flex items-center mb-3 h-[4.5rem]">
          <NavLink
            to="help"
            className={({ isActive }) =>
              `
                        ${
                          isActive
                            ? `text-blue-600 border-l-4 dark:text-blue-500 lg:border-l-blue-600`
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
