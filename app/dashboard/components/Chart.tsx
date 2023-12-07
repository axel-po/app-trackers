"use client";
import React, { useCallback, useState } from "react";
import {
   LineChart,
   Line,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend,
} from "recharts";

const data = [
   { name: "Group A", value: 400 },
   { name: "Group B", value: 300 },
   { name: "Group C", value: 300 },
   { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
   cx,
   cy,
   midAngle,
   innerRadius,
   outerRadius,
   percent,
   index,
}: any) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
   const x = cx + radius * Math.cos(-midAngle * RADIAN);
   const y = cy + radius * Math.sin(-midAngle * RADIAN);

   return (
      <text
         x={x}
         y={y}
         fill="white"
         textAnchor={x > cx ? "start" : "end"}
         dominantBaseline="central"
      >
         {`${(percent * 100).toFixed(0)}%`}
      </text>
   );
};
export default function Chart() {
   const data = [
      {
         name: "Jan",
         uv: 4000,
         pv: 2400,
         amt: 2400,
      },
      {
         name: "Fev",
         uv: 3000,
         pv: 1398,
         amt: 2210,
      },
      {
         name: "Mars",
         uv: 2000,
         pv: 9800,
         amt: 2290,
      },
      {
         name: "Avril",
         uv: 2780,
         pv: 3908,
         amt: 2000,
      },
      {
         name: "Mai",
         uv: 1890,
         pv: 4800,
         amt: 2181,
      },
      {
         name: "Page F",
         uv: 2390,
         pv: 3800,
         amt: 2500,
      },
      {
         name: "Page G",
         uv: 3490,
         pv: 4300,
         amt: 2100,
      },
   ];

   return (
      <LineChart
         width={662}
         height={313}
         data={data}
         margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
         }}
      >
         <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="name" />
         <YAxis />
         <Tooltip />
         <Legend />
         <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
         />
         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
   );
}
