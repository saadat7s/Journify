import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import AddEntryModal from './AddEntryModal';

const Sidebar = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="sidebar-container">
      <ul className="list-unstyled">
        <li>
          <Link to="/" className={`side-link ${location.pathname === '/' ? 'active' : ''}`}>
            <i className="fas fa-home">
            </i>
            <p className='p-0 m-0'>Home</p>
          </Link>
        </li>
        <li>
          <Link
            
            className={`side-link`}
            onClick={handleOpenModal}
          >
            <i className="fas fa-plus"></i>
            <p className='p-0 m-0'>Add Entry</p>
          </Link>
        </li>
        <li>
          <Link
            to="/settings"
            className={`side-link ${location.pathname === '/settings' ? 'active' : ''}`}
          >
            <i className="fas fa-cog">
            </i>
            <p className='p-0 m-0'>Settings</p>
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className={`side-link ${location.pathname === '/profile' ? 'active' : ''}`}
          >
            <i className="fas fa-user">
            </i>
            <p className='p-0 m-0'>Profile</p>
          </Link>
        </li>
        <li>
          <Link
            to="/logout"
            className={`side-link ${location.pathname === '/logout' ? 'active' : ''}`}
          >
            <i className="fas fa-sign-out-alt">
            </i>
            <p className='p-0 m-0'>Logout</p>
          </Link>
        </li>
      </ul>
      <AddEntryModal showModal={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default Sidebar;