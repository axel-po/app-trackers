"use client";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
   { name: "Good", value: 100 },
   { name: "Ok", value: 70 },
   { name: "Bad", value: 30 },
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
   data,
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
         ok
      </text>
   );
};
export default function PieChartComponent() {
   return (
      <PieChart width={363} height={300}>
         <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
         >
            {data.map((entry, index) => (
               <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
               />
            ))}
         </Pie>
      </PieChart>
   );
}
