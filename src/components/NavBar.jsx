import React from "react";
import { Link } from "react-router-dom";
import logo from "../Logo.svg";

export default function NavBar() {
  return (
    <nav className="nav-container">
      <Link to="/" className="nav-logo">
        <img className="nav-logo" src={logo} alt="Company logo" />
      </Link>
      <div className="nav-links">
        <button className="nav-button">
          <Link className="nav-items" to="/">
            Home
          </Link>
        </button>
        <button className="nav-button">
          <Link className="nav-items" to="/about-us">
            About Us
          </Link>
        </button>
        <button className="nav-button">
          <Link
            to="/contact-us"
            className="nav-items"
            onClick={() => {
              window.location.href = "/contact-us"; //Allows user to refresh form when clicking navbar link
            }}
          >
            Contact Us
          </Link>
        </button>
        <button className="login-button">Log in</button>
      </div>
    </nav>
  );
}
