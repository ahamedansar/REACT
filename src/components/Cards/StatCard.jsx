import React from "react";
import "./card.css";

export default function StatCard({ title, value, percent, color }) {
  return (
    <div className="stat-card">
      <div className={`percent-badge ${color}`}>{percent}</div>

      <p className="stat-title">{title}</p>
      <h2 className="stat-value">{value}</h2>
    </div>
  );
}
