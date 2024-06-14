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

import React, { useState, useEffect } from 'react';


import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";



const DarkModeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load dark mode preference from local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-3 shadow rounded-full transition ${
        isDarkMode ? 'bg-gray-700' : 'bg-white'
      } text-white`}
    >
      {isDarkMode ? <FaMoon className='size-8 rounde-full'/> : <FaSun className='size-8 rounde-full text-yellow-300'/>}
    </button>
  );
};

export default DarkModeSwitcher;
