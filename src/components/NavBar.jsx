import React from "react";
import { Link } from "react-router-dom";
import logo from "../Logo.svg";

export default function NavBar() {
  return (
    <nav className="nav-container">
      <Link to="/" className="nav-logo">
        <img className="nav-logo" src={logo} alt="Company logo" />
      </Link>
      <ul className="nav-links">
        <li className="nav-items">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-items">
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="nav-items">
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <button>Login</button>
      </ul>
    </nav>
  );
}
