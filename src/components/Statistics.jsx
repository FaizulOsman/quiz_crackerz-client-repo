import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const data = [
    { name: "Ass 1", marks: 60, quiz: 2400, amt: 2400 },
    { name: "Ass 2", marks: 58, quiz: 1398, amt: 2210 },
    { name: "Ass 3", marks: 60, quiz: 9800, amt: 2290 },
    { name: "Ass 4", marks: 60, quiz: 3908, amt: 2000 },
    { name: "Ass 5", marks: 60, quiz: 4800, amt: 2181 },
    { name: "Ass 6", marks: 60, quiz: 3800, amt: 2500 },
    { name: "Ass 7", marks: 60, quiz: 4300, amt: 2100 },
  ];

  return (
    <div className="w-1/2 mx-auto my-20">
      <h2 className="text-3xl font-semibold text-center mb-5">
        Total marks Rechart
      </h2>
      <LineChart width={700} height={400} data={data}>
        <Line dataKey="marks" type="monotone" stroke="red" />
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="lightgray" strokeDasharray="5 5" />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Statistics;
