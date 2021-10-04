import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import "./Header.css"

const Header = () => {
  return (
    <div className="header-container ">
      <div className="">
        <div className="row d-flex header align-items-center justify-content-center">
          <MenuBar></MenuBar>
          <div className="text-lg-center">
            <div className=" container p-5 ms-5 col-md-12 text-lg-center header-text ">
              <h1 className="title">
                Learning a Language <br />
                Makes you Perfect
              </h1>
              <p className="text-white mt-3">
                Language and Motivation is a platform for people who want to lift themselves and their skills to a higher level.
              </p>
              <button className="btn btn-primary button">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;