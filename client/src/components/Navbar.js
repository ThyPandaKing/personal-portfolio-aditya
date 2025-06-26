import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoMdHome,
  IoMdDocument,
  IoMdContact,
  IoMdFolder,
} from "react-icons/io";
import logo from "../assets/my_image.jpg"; // make sure the image exists
import colors from "../color_combo.json";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{ 
          backgroundColor: colors.primary, color: "white" }}
    >
      <div className="container-fluid">
        {/* Brand with image */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src={logo}
            alt="Profile"
            width="35"
            height="35"
            className="rounded-circle"
          />
          <span style={{ color: "white" }}>My Portfolio</span>
        </Link>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
          style={{ color: "white" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div
          className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => setExpanded(false)}
                style={{ color: "white" }}
              >
                <IoMdHome className="me-1" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/projects"
                onClick={() => setExpanded(false)}
                style={{ color: "white" }}
              >
                <IoMdFolder className="me-1" /> Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/resume"
                onClick={() => setExpanded(false)}
                style={{ color: "white" }}
              >
                <IoMdDocument className="me-1" /> Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                onClick={() => setExpanded(false)}
                style={{ color: "white" }}
              >
                <IoMdContact className="me-1" /> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
