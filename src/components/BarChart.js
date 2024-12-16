import React from "react";
import { Chart } from "react-google-charts";

const reportData = (scores) => {
  const result = [["", ""]];
  const segments = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
  segments.forEach((num) => {
    let label = num + "%";
    let scoresInRange = scores.filter((score) => {
      return Number(score) >= num - 10 && Number(score) <= num;
    });
    result.push([label, scoresInRange.length]);
  });
  console.log(result);
  return result;
};

const options = {
  title: "",
  chartArea: {},
  hAxis: {
    title: "Number of Users",
    minValue: 0,
  },
  vAxis: {
    title: "",
  },
  colors: ["#9ACEEB"],
  legend: { position: "none" },
};

const BarChart = ({ data }) => {
  const totalUsers = data.length;
  return (
    <div data-testid="reportChart">
      <Chart
        chartType="BarChart"
        width="100%"
        height="100%"
        data={reportData(data)}
        options={options}
      />
    </div>
  );
};

export default BarChart;
