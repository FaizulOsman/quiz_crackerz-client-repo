import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const quizData = useLoaderData().data;

  const data = [
    { name: quizData[0].name, total: quizData[0].total },
    { name: quizData[1].name, total: quizData[1].total },
    { name: quizData[2].name, total: quizData[2].total },
    { name: quizData[3].name, total: quizData[3].total },
  ];

  return (
    <div className="my-20">
      <h2 className="text-lg sm:text-3xl font-semibold text-center mb-8">
        Rechart of Total Questions
      </h2>
      <ResponsiveContainer width="80%" className="mx-auto" height={300}>
        <LineChart data={data}>
          <Line dataKey="total" type="monotone" stroke="red" />
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="lightgray" strokeDasharray="5 5" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
