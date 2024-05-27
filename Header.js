import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <i className="fas fa-chart-bar" />
      </div>
      <div className="header-nav">
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;