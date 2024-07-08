// import React from "react";
// import useTheme from "./contexts/Theme";

// export default function ThemeSwitcher() {
//   const { themeMode, lightTheme, darkTheme } = useTheme();
//   const onChangeBtn = (e) => {
//     const darkModeStatus = e.currentTarget.checked;
//     if (darkModeStatus) {
//       darkTheme();
//     } else {
//       lightTheme();
//     }
//   };
//   return (
//     <div className=" w-14 h-14 dark:bg-slate-800  flex items-center border border-gray-700">

//       <input
//                 type="checkbox"
//                 value=""
//                 className="w-8 h-8"
//                 onChange={onChangeBtn}
//                 checked={themeMode === "dark"}
//             />

//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";

const DarkModeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // console.log("theme 1", isDarkMode);

  useEffect(() => {
    let theme = localStorage.getItem("theme");
    if (theme == "light") {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode === true) {
      document.documentElement.classList.add("dark");
      // const jsonData = JSON.stringify("dark");
    } else {
      document.documentElement.classList.remove("dark");
      // const jsonData = JSON.stringify("light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    if (isDarkMode === false) {
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 flex justify-center items-center shadow xsm:w-[2.5rem] xsm:h-[2.5rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full transition ${
        isDarkMode === true ? "bg-gray-700" : "bg-white"
      } text-white`}
    >
      {isDarkMode === true ? (
        <FaMoon className="xsm:size-8 md:size-9 rounde-full" />
      ) : (
        <FaSun className="xsm:size-8 md:size-9 rounde-full text-yellow-300" />
      )}
    </button>
  );
};

export default DarkModeSwitcher;
