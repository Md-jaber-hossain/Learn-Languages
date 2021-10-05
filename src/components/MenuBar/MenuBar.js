import React from 'react';
import "./MenuBar.css";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <div className="row pt-3 mb-5">
      <div className="col-md-6">
        {/* Project name in the top left side */}
        <div className="title d-flex justify-content-center">
          <h1>Learn <span className="text-info">Languages</span></h1>
        </div>
      </div>
      {/* Navbar and route link */}
      <div className="col-md-6">
        <ul className="d-flex justify-content-center me-md-5">
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
  );
};

export default MenuBar;
