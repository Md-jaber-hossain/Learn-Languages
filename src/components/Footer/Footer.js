import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          {/* Footer body */}
          <div className="row">
            <div className="col-md-4">
              <div>
                <h2 className="text-info">Learn Languages</h2>
                <p className="mt-4">
                  <small>
                    We all have those days creep in when learning a language may seem like more work than it’s worth.
                  </small>
                </p>
                <p className="mt-5">
                  <small>Jaber © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <h2>
                Terms and Conditions
              </h2>
              <ul className="mt-4">
                <li>Four months durations</li>
                <li>Must be attend each classes</li>
                <li>Certificate will be given after completion of course</li>
                <li>Do not back money after buying courses</li>
              </ul>
            </div>
            <div className="col-md-4 text-lg-center">
              <h2>
                Contact Info
              </h2>
              <p className="mt-4">Mobile: 01621390353</p>
              <p>Email: md.jaber8695@gmail.com</p>
              <p>Address: Mirpur, Dhaka</p>
            </div>
          </div>
          {/* Social media Icon for footer*/}
          <div className="d-flex justify-content-center mt-4">
            <div className="fs-3">
              <i className="fab fa-facebook-square"></i>
            </div>
            <div className="fs-3 twitter ms-lg-4">
              <i className="fab fa-twitter-square"></i>
            </div>
            <div className="fs-3 ms-lg-4">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="fs-3 ms-lg-4">
              <i className="fab fa-reddit-square"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
