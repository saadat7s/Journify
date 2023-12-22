import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
import WeatherDisplay from './WeatherDisplay';
import AddEntryModal from './AddEntryModal';

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className='container-fluid p-0'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* Font Awesome icon for the logo */}
          <NavLink className="navbar-brand" to="/">
            <FontAwesomeIcon icon={faBook} className="logo-icon" style={{ fontSize: '25px', fontWeight: 'bold' }} />
            <span className="logo-text" style={{ fontSize: '35px', fontWeight: 'bold' }}>Journify</span>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" onClick={handleOpenModal}>
                  Add
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-weather" style={{ fontSize: '18px', fontWeight: 'bold' }}>
            {/* WeatherDisplay component is rendered directly */}
            <WeatherDisplay />
          </div>
      </nav>

      {/* Modal */}
      <AddEntryModal showModal={showModal} handleClose={handleCloseModal} />
    </section>
  );
}
