import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./DashBoard.css";

const DashBoard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("chartData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className='container'>
      <h1>DashBoard</h1>
      <div className='flex items-end gap-5 justify-around'>
        <div className='border-b-4'>
          <LineChart data={data} width={530} height={500}>
            <Line type='monotone' dataKey='revenue' stroke='#8884d8'></Line>
            <CartesianGrid stroke='#ccc' />
            <XAxis dataKey='investment' />
            <YAxis />
            <Tooltip></Tooltip>
          </LineChart>
        </div>
        <div className='border-b-4'>
          <BarChart width={530} height={250} data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='month' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='investment' fill='#8884d8' />
            <Bar dataKey='revenue' fill='#82ca9d' />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
