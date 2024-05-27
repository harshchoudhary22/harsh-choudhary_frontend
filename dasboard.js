import React from 'react';
import './Dashboard.css';
import Card from '../Card';
import Chart from '../Chart';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
      </div>
      <div className="dashboard-content">
        <div className="row">
          <Card title="Total Sales" value="$10,000" icon={<i className="fas fa-dollar-sign" />} />
          <Card title="Total Orders" value="100" icon={<i className="fas fa-shopping-cart" />} />
          <Card title="Total Customers" value="500" icon={<i className="fas fa-users" />} />
        </div>
        <div className="row">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;