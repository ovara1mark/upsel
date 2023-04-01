import React from "react";
import "./navbanner.css";

export const Navbar = (props) => {
  return (
    <div>
      <div className="navbanner-navbanner">
        <div className="navbanner-logo">
          <div className="navbanner-logo1"></div>
        </div>
        <div className="navbanner-links">
          <button className="navbanner-button">
            <span className="navbanner-text">
              <span>About Us</span>
            </span>
          </button>
          <button className="navbanner-button1">
            <span className="navbanner-text02">
              <span>Portfolio</span>
            </span>
          </button>
          <button className="navbanner-button2">
            <span className="navbanner-text04">
              <span>Services</span>
            </span>
          </button>
          <button className="navbanner-button3">
            <span className="navbanner-text06">
              <span>Blog</span>
            </span>
          </button>
          <button className="navbanner-button4">
            <span className="navbanner-text08">
              <span>FAQ</span>
            </span>
          </button>
          <button className="navbanner-button5">
            <span className="navbanner-text10">
              <span>Contact Us</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
