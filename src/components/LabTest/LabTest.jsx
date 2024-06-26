import React from "react";
import LineChart from "../LineChart";
import BarChart from "../BarChart";
import PieChart from "../PieChart";
const LabTest = () => {
  return (
    <div className="w-full">
      <div className="top-sec flex gap-5 w-full">
        <div className="left-sec w-[50%]">
          <BarChart/>
        </div>
        <div className="right-sec w-[50%]">
          <PieChart/>
        </div>
      </div>
      <div className="w-full mt-5 bottom-sec">
        <LineChart/>
      </div>
    </div>
  );
};

export default LabTest;
