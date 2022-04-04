import React from "react";
import { LineChart } from "recharts";
import "./DashBoard.css";

const DashBoard = () => {
  return (
    <div>
      <h1>DashBoard</h1>
      <div>
        <LineChart></LineChart>
      </div>
    </div>
  );
};

export default DashBoard;
