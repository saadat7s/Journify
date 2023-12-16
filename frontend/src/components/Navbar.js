import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <section className='container-fluid p-0'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <span style={{ fontFamily: 'Roboto', fontSize: '40px', fontWeight: 'bold', letterSpacing: '2px' }}>Journify</span>
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
                <NavLink className="nav-link" to="/Add">
                  Add
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
