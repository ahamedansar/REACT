import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="logo">CRM Analytics</h1>

      <ul className="menu">
        <li className="active"><span className="icon">📊</span> Dashboard</li>
        <li><span className="icon">📁</span> Reports</li>
        <li><span className="icon">📈</span> Analytics</li>
        <li><span className="icon">🎫</span> Tickets</li>
        <li><span className="icon">⚙️</span> Settings</li>
      </ul>
    </aside>
  );
}
