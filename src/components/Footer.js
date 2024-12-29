import React from "react";

function Footer() {
  return (
    <footer className="footer bg-light py-3">
      <div className="container-fluid d-flex justify-content-between">
        {/* Navigation Links */}
        <nav className="pull-left">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="http://www.themekita.com">
                ThemeKita
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Help
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Licenses
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright Section */}
        <div className="copyright">
          2024, made with <i className="fa fa-heart heart text-danger"></i> by{" "}
          <a href="http://www.themekita.com">ThemeKita</a>
        </div>

        {/* Distribution Link */}
        <div>
          Distributed by{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://themewagon.com/">
            ThemeWagon
          </a>
          .
        </div>
      </div>
    </footer>
  );
}

export default Footer;
