import React from "react";
import "./App.css";
import { useEffect, useState } from 'react'
import Layout from "./components/Layout";


function App() {
  const [theme,setTheme] = useState(false)
  return (
    <div className={`${theme?'dark':''}`}>
      <div className="text-[20px] text-black">Hello world</div>
      <Layout />
    </div>
  );
}

export default App;
