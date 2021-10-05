import React from 'react';
import "./MenuBar.css";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <>
    {/* Navbar for all pages */}
      <nav className="navbar navbar-expand-lg navbar-light menuBar-bg">
        <div className="container-fluid">
          <div className="title">
            <h1 className="fw-bold">Learn <span className="text-info">Languages</span></h1>
          </div>

          <button className="navbar-toggler bg-white ms-auto my-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-md-5">
              <Link to="/home" className="list">
                <li>Home</li>
              </Link>
              <Link to="/about" className="list">
                <li>About</li>
              </Link>
              <Link to="/services" className="list">
                <li>Services</li>
              </Link>
              <Link to="/contact" className="list">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MenuBar;
