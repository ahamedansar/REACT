import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", tickets: 60 },
  { day: "Tue", tickets: 55 },
  { day: "Wed", tickets: 82 },
  { day: "Thu", tickets: 78 },
  { day: "Fri", tickets: 52 },
  { day: "Sat", tickets: 45 },
  { day: "Sun", tickets: 35 },
];

export default function BarChartBox() {
  return (
    <div className="chart-card">
      <h3>Weekly Tickets</h3>
      <BarChart width={480} height={260} data={data}>
        <CartesianGrid stroke="#2c3247" />
        <XAxis dataKey="day" stroke="#9aa0b8" />
        <YAxis stroke="#9aa0b8" />
        <Tooltip />
        <Bar dataKey="tickets" fill="#4c8df5" radius={[6, 6, 0, 0]} />
      </BarChart>
    </div>
  );
}
