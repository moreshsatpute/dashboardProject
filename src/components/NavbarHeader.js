import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEnvelope, faBell, faLayerGroup, faUserPlus, faComment, faAngleRight, faMap, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import LoginModal from './LoginModal'; // Import the login modal component

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
            <input type="text" placeholder="Search ..." className="form-control form-control-sm " style={{ maxWidth: '200px' }} />
          </div>
        </div>

        {/* Navbar Toggler for Mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Right Icons */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-md-auto align-items-center">
            {/* Search Icon Dropdown (Mobile) */}
            <li className="nav-item topbar-icon dropdown d-flex d-lg-none">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" aria-haspopup="true">
                <FontAwesomeIcon icon={faSearch} />
              </a>
              <ul className="dropdown-menu dropdown-search animated fadeIn">
                <form className="navbar-left navbar-form nav-search">
                  <div className="input-group">
                    <input type="text" placeholder="Search ..." className="form-control" />
                  </div>
                </form>
              </ul>
            </li>

            {/* Messages Icon Dropdown */}
            <li className="nav-item topbar-icon dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="messageDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <ul className="dropdown-menu messages-notif-box animated fadeIn" aria-labelledby="messageDropdown">
                <li>
                  <div className="dropdown-title d-flex justify-content-between align-items-center">
                    Messages
                    <a href="#" className="small">Mark all as read</a>
                  </div>
                </li>
                <li>
                  <div className="message-notif-scroll scrollbar-outer">
                    <div className="notif-center">
                      {/* Message Example */}
                      <a href="#">
                        <div className="notif-img">
                          <img src="../assets/img/jm_denis.jpg" alt="Img Profile" />
                        </div>
                        <div className="notif-content">
                          <span className="subject">Jimmy Denis</span>
                          <span className="block">How are you ?</span>
                          <span className="time">5 minutes ago</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <a className="see-all" href="javascript:void(0);">
                    See all messages <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                </li>
              </ul>
            </li>

            {/* Notification Icon Dropdown */}
            <li className="nav-item topbar-icon dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="notifDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon={faBell} />
                <span className="notification">4</span>
              </a>
              <ul className="dropdown-menu notif-box animated fadeIn" aria-labelledby="notifDropdown">
                <li>
                  <div className="dropdown-title">You have 4 new notifications</div>
                </li>
                <li>
                  <div className="notif-scroll scrollbar-outer">
                    <div className="notif-center">
                      <a href="#">
                        <div className="notif-icon notif-primary"><FontAwesomeIcon icon={faUserPlus} /></div>
                        <div className="notif-content">
                          <span className="block">New user registered</span>
                          <span className="time">5 minutes ago</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <a className="see-all" href="javascript:void(0);">
                    See all notifications <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                </li>
              </ul>
            </li>

            {/* Quick Actions Icon Dropdown */}
            <li className="nav-item topbar-icon dropdown">
              <a className="nav-link" data-bs-toggle="dropdown" href="#" aria-expanded="false">
                <FontAwesomeIcon icon={faLayerGroup} />
              </a>
              <div className="dropdown-menu quick-actions animated fadeIn">
                <div className="quick-actions-header">
                  <span className="title mb-1">Quick Actions</span>
                  <span className="subtitle op-7">Shortcuts</span>
                </div>
                <div className="quick-actions-items">
                  <a className="col-6 p-0" href="#">
                    <div className="quick-actions-item">
                      <div className="avatar-item bg-danger rounded-circle">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                      </div>
                      <span className="text">Calendar</span>
                    </div>
                  </a>
                  <a className="col-6 p-0" href="#">
                    <div className="quick-actions-item">
                      <div className="avatar-item bg-warning rounded-circle">
                        <FontAwesomeIcon icon={faMap} />
                      </div>
                      <span className="text">Maps</span>
                    </div>
                  </a>
                </div>
              </div>
            </li>

            {/* User Avatar for Login */}
            <li className="nav-item topbar-user dropdown" onClick={handleLoginClick} style={{ cursor: 'pointer' }}>
              <a className="dropdown-toggle profile-pic" data-bs-toggle="dropdown" href="#" aria-expanded="false">
                <div className="avatar-sm">
                  <img src="../assets/img/profile.jpg" alt="..." className="avatar-img rounded-circle" />
                </div>
                <span className="profile-username">
                  <span className="op-7">Login</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && <LoginModal onClose={handleCloseLogin} />}
    </nav>
  );
};

export default NavbarHeader;
