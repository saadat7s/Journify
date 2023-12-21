import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar-container">
      <ul className="list-unstyled">
        <li>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/add" className={`nav-link ${location.pathname === '/add' ? 'active' : ''}`}>
            <i className="fas fa-plus"></i> Add Entry
          </Link>
        </li>
        <li>
          <Link
            to="/settings"
            className={`nav-link ${location.pathname === '/settings' ? 'active' : ''}`}
          >
            <i className="fas fa-cog"></i> Settings
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}
          >
            <i className="fas fa-user"></i> Profile
          </Link>
        </li>
        <li>
          <Link
            to="/logout"
            className={`nav-link ${location.pathname === '/logout' ? 'active' : ''}`}
          >
            <i className="fas fa-sign-out-alt"></i> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
