import React from 'react';
import "./MenuBar.css";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/* Project name in the top left side */}
            <div className="title">
              <h1>Learn <span className="text-info">Languages</span></h1>
            </div>
          </div>
          {/* Navbar and route link */}
          <div className="col-md-8">
            <div>
              <ul className="d-flex align-items-end justify-content-center">
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
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
