// src/components/PieChart.js
import React from "react";
import Chart from "react-apexcharts";

const PieChart = () => {
  const options = {
    chart: {
      type: "pie",
    },
    labels: ["Product A", "Product B", "Product C", "Product D"],
    title: {
      text: "Product Sales Distribution",
      align: "left",
      style: {
        fontSize: "16px",
        color: "#666",
        marginTop: "10px",
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = [44, 55, 13, 33]; // Values for each slice of the pie

  return (
    <div className="w-full h-full p-6 bg-white rounded-lg shadow-lg">
      <Chart options={options} series={series} type="pie" height={250} />
    </div>
  );
};

export default PieChart;
