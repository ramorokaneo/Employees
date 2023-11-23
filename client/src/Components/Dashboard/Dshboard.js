import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Create a CSS file for styling

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Welcome to the Employee Database Dashboard</h2>
      <p>Here, you can manage employee information and perform various actions.</p>

      <div className="dashboard-options">
        <Link to="/add">Add Employee</Link>
        <Link to="/view">View Employees</Link>
      </div>

      <Link to="/">Logout</Link>
    </div>
  );
}

export default Dashboard;
