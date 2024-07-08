// src/components/LineChart.js
import React from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  const options = {
    chart: {
      type: "line",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    title: {
      text: "Monthly Sales Data",
      align: "left",
      style: {
        fontSize: "16px",
        color: "#666",
      },
    },
  };

  const series = [
    {
      name: "Sales",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];

  return (
    <div className="w-full h-[100] bg-white rounded-lg shadow-lg">
      <Chart options={options} series={series} type="line" height={360} />
    </div>
  );
};

export default LineChart;
