import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const data = [
  { name: "Support", value: 40 },
  { name: "Sales", value: 25 },
  { name: "Technical", value: 20 },
  { name: "Billing", value: 10 },
  { name: "Other", value: 5 },
];

const COLORS = ["#4cd964", "#4c8df5", "#d07cf2", "#ffd93d", "#ff3cac"];

export default function PieChartBox() {
  return (
    <div className="chart-card">
      <h3>Ticket Type Split</h3>
      <PieChart width={350} height={260}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((entry, idx) => (
            <Cell key={idx} fill={COLORS[idx]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
