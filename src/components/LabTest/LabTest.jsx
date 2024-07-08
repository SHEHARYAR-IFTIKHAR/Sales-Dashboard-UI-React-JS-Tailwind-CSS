import React from "react";
import LineChart from "../LineChart";
import BarChart from "../BarChart";
import PieChart from "../PieChart";
const LabTest = () => {
  return (
    <div className="w-full h-full lg:overflow-hidden">
      <div className="top-sec flex gap-5 w-full xsm:flex-wrap lg:flex-nowrap">
        <div className="left-sec h-[300px] xsm:w-full lg:w-[48%] border">
          <BarChart />
        </div>
        <div className="right-sec h-[300px] xsm:w-full lg:w-[48%] border">
          <PieChart />
        </div>
      </div>
      <div className="w-full mt-5 bottom-sec">
        <LineChart />
      </div>
    </div>
  );
};

export default LabTest;
