import React from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  const options = {
    chart: {
      type: "bar",
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
    <div className="w-full h-full p-6 bg-white rounded-lg shadow-lg">
      <Chart options={options} series={series} type="bar" height={250} />
    </div>
  );
};

export default LineChart;
