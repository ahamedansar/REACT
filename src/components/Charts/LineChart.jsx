import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import "./chart.css";

const data = [
  { month: "Jan", value: 120 },
  { month: "Feb", value: 200 },
  { month: "Mar", value: 315 },
  { month: "Apr", value: 520 },
  { month: "May", value: 180 },
  { month: "Jun", value: 260 },
  { month: "Jul", value: 450 },
  { month: "Aug", value: 390 },
  { month: "Sep", value: 420 },
  { month: "Oct", value: 510 },
  { month: "Nov", value: 470 },
  { month: "Dec", value: 580 },
];

export default function LineChartBox() {
  return (
    <div className="chart-card">
      <h3>Monthly Tickets</h3>
      <LineChart width={480} height={260} data={data}>
        <CartesianGrid stroke="#2c3247" />
        <XAxis dataKey="month" stroke="#9aa0b8" />
        <YAxis stroke="#9aa0b8" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#ff3cac"
          dot={{ r: 5, fill: "#fff" }}
          strokeWidth={3}
        />
      </LineChart>
    </div>
  );
}
