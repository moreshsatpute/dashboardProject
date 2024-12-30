import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from "../assets/img/kaiadmin/logo_light.png";

const Sidebar = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isBaseOpen, setIsBaseOpen] = useState(true);
  const [isSidebarLayoutsOpen, setIsSidebarLayoutsOpen] = useState(false);
  const [isFormsOpen, setIsFormsOpen] = useState(false);
  const [isTablesOpen, setIsTablesOpen] = useState(false);
  const [isMapsOpen, setIsMapsOpen] = useState(false);
  const [isChartsOpen, setIsChartsOpen] = useState(false);
  const [isWidgetsOpen, setIsWidgetsOpen] = useState(false);
  const [isDocumentationOpen, setIsDocumentationOpen] = useState(false);
  const [isMenuLevelsOpen, setIsMenuLevelsOpen] = useState(false);
  const [isLevel1Open, setIsLevel1Open] = useState(false);

  const toggleCollapse = (setter) => {
    setter((prevState) => !prevState);
  };

  return (
    <div
      className="sidebar bg-dark text-white"
      style={{ width: "250px", height: "100vh" }}
    >
      <div className="sidebar-logo p-3">
        <Link to="/" className="logo">
          <img
            src={logo}
            alt="navbar brand56666"
            className="navbar-brand"
            height="20"
          />
        </Link>
        <button
          className="btn btn-link text-white"
          onClick={() => toggleCollapse(setIsDashboardOpen)}
        >
          <i className="gg-menu-right"></i>
        </button>
      </div>

      <div className="sidebar-wrapper scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav flex-column">
            {/* Dashboard */}
            <li className="nav-item">
              <a
                className={`nav-link text-white ${
                  isDashboardOpen ? "collapsed" : ""
                }`}
                data-bs-toggle="collapse"
                href="#dashboard"
                onClick={() => toggleCollapse(setIsDashboardOpen)}
              >
                <i className="fas fa-home"></i> Dashboard
                <span className="caret"></span>
              </a>
              <div
                id="dashboard"
                className={`collapse ${isDashboardOpen ? "show" : ""}`}
              >
                <ul className="nav flex-column ms-3">
                  <li>
                    <a
                      href="../../demo1/index.html"
                      className="nav-link text-white"
                    >
                      <span className="sub-item">Dashboard 1</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Components Section */}
            <li className="nav-section">
              <span className="sidebar-mini-icon">
                <i className="fa fa-ellipsis-h"></i>
              </span>
              <h4 className="text-section text-white">Components</h4>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text-white ${
                  isBaseOpen ? "collapsed" : ""
                }`}
                data-bs-toggle="collapse"
                href="#base"
                onClick={() => toggleCollapse(setIsBaseOpen)}
              >
                <i className="fas fa-layer-group"></i> Base
                <span className="caret"></span>
              </a>
              <div id="base" className={`collapse ${isBaseOpen ? "show" : ""}`}>
                <ul className="nav flex-column ms-3">
                  <li>
                    <a
                      href="../components/avatars.html"
                      className="nav-link text-white"
                    >
                      <span className="sub-item">Avatars</span>
                    </a>
                  </li>
                  {/* Add other items similarly */}
                </ul>
              </div>
            </li>

            {/* Sidebar Layouts */}
            <li className="nav-item">
              <a
                className={`nav-link text-white ${
                  isSidebarLayoutsOpen ? "collapsed" : ""
                }`}
                data-bs-toggle="collapse"
                href="#sidebarLayouts"
                onClick={() => toggleCollapse(setIsSidebarLayoutsOpen)}
              >
                <i className="fas fa-th-list"></i> Sidebar Layouts
                <span className="caret"></span>
              </a>
              <div
                id="sidebarLayouts"
                className={`collapse ${isSidebarLayoutsOpen ? "show" : ""}`}
              >
                <ul className="nav flex-column ms-3">
                  <li>
                    <a
                      href="../sidebar-style-2.html"
                      className="nav-link text-white"
                    >
                      <span className="sub-item">Sidebar Style 2</span>
                    </a>
                  </li>
                  {/* Add other items similarly */}
                </ul>
              </div>
            </li>

            {/* Forms */}
            <li className="nav-item">
              <a
                className={`nav-link text-white ${
                  isFormsOpen ? "collapsed" : ""
                }`}
                data-bs-toggle="collapse"
                href="#forms"
                onClick={() => toggleCollapse(setIsFormsOpen)}
              >
                <i className="fas fa-pen-square"></i> Forms
                <span className="caret"></span>
              </a>
              <div
                id="forms"
                className={`collapse ${isFormsOpen ? "show" : ""}`}
              >
                <ul className="nav flex-column ms-3">
                  <li>
                    <Link to="/basic-form" className="nav-link text-white">
                      <span className="sub-item">Basic Form</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                id="forms"
                className={`collapse ${isFormsOpen ? "show" : ""}`}
              >
                <ul className="nav flex-column ms-3">
                  <li>
                    <Link to="/client-form" className="nav-link text-white">
                      <span className="sub-item">Client Form</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Tables */}
            <li className="nav-item">
              <a
                className={`nav-link text-white ${
                  isTablesOpen ? "collapsed" : ""
                }`}
                data-bs-toggle="collapse"
                href="#tables"
                onClick={() => toggleCollapse(setIsTablesOpen)}
              >
                <i className="fas fa-table"></i> Tables
                <span className="caret"></span>
              </a>
              <div
                id="tables"
                className={`collapse ${isTablesOpen ? "show" : ""}`}
              >
                <ul className="nav flex-column ms-3">
                  <li>
                    <a
                      href="../tables/tables.html"
                      className="nav-link text-white"
                    >
                      <span className="sub-item">Basic Table</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Maps */}
            <li className="nav-item">
              <a
                className={`nav-link text-white ${
                  isMapsOpen ? "collapsed" : ""
                }`}
                data-bs-toggle="collapse"
                href="#maps"
                onClick={() => toggleCollapse(setIsMapsOpen)}
              >
                <i className="fas fa-map-marker-alt"></i> Maps
                <span className="caret"></span>
              </a>
              <div id="maps" className={`collapse ${isMapsOpen ? "show" : ""}`}>
                <ul className="nav flex-column ms-3">
                  <li>
                    <Link to="/google-maps" className="nav-link text-white">
                      <span className="sub-item">Google Maps</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Charts */}
            <li className="nav-item">
              <a
                className={`nav-link text-white ${
                  isChartsOpen ? "collapsed" : ""
                }`}
                data-bs-toggle="collapse"
                href="#charts"
                onClick={() => toggleCollapse(setIsChartsOpen)}
              >
                <i className="fas fa-chart-bar"></i> Charts
                <span className="caret"></span>
              </a>
              <div
                id="charts"
                className={`collapse ${isChartsOpen ? "show" : ""}`}
              >
                <ul className="nav flex-column ms-3">
                  <li>
                    <Link to="/line-charts" className="nav-link text-white">
                      <span className="sub-item">Line Charts</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Widgets */}
            <li className="nav-item">
              <a
                className={`nav-link text-white ${
                  isWidgetsOpen ? "collapsed" : ""
                }`}
                data-bs-toggle="collapse"
                href="#widgets"
                onClick={() => toggleCollapse(setIsWidgetsOpen)}
              >
                <i className="fas fa-th-large"></i> Widgets
                <span className="caret"></span>
              </a>
              <div
                id="widgets"
                className={`collapse ${isWidgetsOpen ? "show" : ""}`}
              >
                <ul className="nav flex-column ms-3">
                  <li>
                    <Link to="/widgets" className="nav-link text-white">
                      <span className="sub-item">Basic Widgets</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Documentation */}
            <li className="nav-item">
              <a
                className={`nav-link text-white ${
                  isDocumentationOpen ? "collapsed" : ""
                }`}
                data-bs-toggle="collapse"
                href="#documentation"
                onClick={() => toggleCollapse(setIsDocumentationOpen)}
              >
                <i className="fas fa-book"></i> Documentation
                <span className="caret"></span>
              </a>
              <div
                id="documentation"
                className={`collapse ${isDocumentationOpen ? "show" : ""}`}
              >
                <ul className="nav flex-column ms-3">
                  <li>
                    <Link to="/docs" className="nav-link text-white">
                      <span className="sub-item">API Documentation</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Menu Levels */}
            <li className="nav-item">
              <a
                className={`nav-link text-white ${
                  isMenuLevelsOpen ? "collapsed" : ""
                }`}
                data-bs-toggle="collapse"
                href="#menu-levels"
                onClick={() => toggleCollapse(setIsMenuLevelsOpen)}
              >
                <i className="fas fa-sitemap"></i> Menu Levels
                <span className="caret"></span>
              </a>
              <div
                id="menu-levels"
                className={`collapse ${isMenuLevelsOpen ? "show" : ""}`}
              >
                <ul className="nav flex-column ms-3">
                  {/* Level 1 */}
                  <li>
                    <a
                      className={`nav-link text-white ${
                        isLevel1Open ? "collapsed" : ""
                      }`}
                      data-bs-toggle="collapse"
                      href="#level-1"
                      onClick={() => toggleCollapse(setIsLevel1Open)}
                    >
                      <span className="sub-item">Level 1</span>
                      <span className="caret"></span>
                    </a>
                    <div
                      id="level-1"
                      className={`collapse ${isLevel1Open ? "show" : ""}`}
                    >
                      <ul className="nav flex-column ms-3">
                        <li>
                          <Link to="/level-2a" className="nav-link text-white">
                            <span className="sub-item">Level 2</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/level-2b" className="nav-link text-white">
                            <span className="sub-item">Level 2</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/level-2c" className="nav-link text-white">
                            <span className="sub-item">Level 2</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* Additional Level 1 items can go here */}
                </ul>
              </div>
            </li>

            {/* ********* */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
