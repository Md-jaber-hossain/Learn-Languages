import React from 'react';
import { Link } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';
import "./Header.css"

const Header = () => {
  return (
    // Header section implementation
    <div className="header-container ">
      <div className="">
        <div className="row d-flex header align-items-center justify-content-center">
          {/* call MenuBar to show navbar */}
          <MenuBar></MenuBar>
          {/* Description of header */}
          <div className=" container text-center p-5 header-text">
            <h1 className="title">
              Learning a Language <br />
              Makes you Perfect
            </h1>
            <p className="text-white mt-3">
              Language and Motivation is a platform for people who want to lift themselves and their skills to a higher level.
            </p>
            {/* button with router link. when click on button, then go to about section */}
            <Link to={'/about'}>
              <button className="btn btn-info button fw-bold fs-5"><i className="fas fa-info-circle"></i> Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;