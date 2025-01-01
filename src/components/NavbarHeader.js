import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faEnvelope,
  faBell,
  faLayerGroup,
  faUserPlus,
  faComment,
  faAngleRight,
  faMap,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import LoginModal from './LoginModal'; // Import the LoginModal component

const NavbarHeader = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-header navbar-header-transparent border-bottom">
      <div className="container-fluid">
        {/* Navbar Left Search */}
        <div className="d-flex w-100">
          <div className="input-group flex-grow-1 d-none d-lg-flex">
            <button type="submit" className="btn btn-search pe-1">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </button>
            <input
              type="text"
              placeholder="Search ..."
              className="form-control form-control-sm"
              style={{ maxWidth: '200px' }}
            />
          </div>
        </div>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Right Icons */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-md-auto align-items-center">
            {/* Other Navbar Content */}
            <li className="nav-item topbar-user dropdown" onClick={handleLoginClick} style={{ cursor: 'pointer' }}>
              <div className="profile-pic">
                <div className="avatar-sm">
                  <img src="../assets/img/profile.jpg" alt="..." className="avatar-img rounded-circle" />
                </div>
                <span className="profile-username">
                  <span className="op-7">Login</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Login Modal */}
      {/* {showLogin && <LoginModal onClose={handleCloseLogin} />} */}
      {showLogin && <LoginModal show={showLogin} onClose={handleCloseLogin} />}

    </nav>
  );
};

export default NavbarHeader;
