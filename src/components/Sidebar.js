import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isBaseOpen, setIsBaseOpen] = useState(true);
  const [isSidebarLayoutsOpen, setIsSidebarLayoutsOpen] = useState(false);
  const [isFormsOpen, setIsFormsOpen] = useState(false);
  const [isTablesOpen, setIsTablesOpen] = useState(false);
  const [isMapsOpen, setIsMapsOpen] = useState(false);
  const [isChartsOpen, setIsChartsOpen] = useState(false);
  

  const toggleCollapse = (setter) => {
    setter((prevState) => !prevState);
  };

  return (
    <div
      className="sidebar bg-dark text-white"
      style={{ width: "250px", height: "100vh" }}
    >
      <div className="sidebar-logo p-3">
        <a href="../index.html" className="logo">
          <img
            src="../assets/img/kaiadmin/logo_light.svg"
            alt="navbar brand"
            className="navbar-brand"
            height="20"
          />
        </a>
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
                    <Link
                      to="/basic-form"
                      className="nav-link text-white"
                    >
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
