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
import { motion } from "framer-motion";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{
        backgroundColor: colors.primary,
        color: colors.font,
      }}
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
          <span style={{ color: colors.font }}>My Portfolio</span>
        </Link>

        {/* Toggle button */}
        <motion.button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
          style={{ color: colors.font, backgroundColor: colors.font }}
        >
          <span className="navbar-toggler-icon"></span>
        </motion.button>

        {/* Links */}
        <motion.div
          className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
          id="navbarNav"
        >
          <motion.ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <motion.li className="nav-item">
              <motion.a
                className="nav-link"
                to="/"
                onClick={() => setExpanded(false)}
                style={{ color: colors.font }}
                whileHover={{
                  color: colors.highlightFont,
                  textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
                  transition: { duration: 0.1 },
                  textDecoration: "underline",
                }}
              >
                <IoMdHome className="me-1" /> Home
              </motion.a>
            </motion.li>
            <motion.li className="nav-item">
              <motion.a
                className="nav-link"
                to="/projects"
                onClick={() => setExpanded(false)}
                style={{ color: colors.font }}
                whileHover={{
                  color: colors.highlightFont,
                  textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
                  transition: { duration: 0.1 },
                  textDecoration: "underline",
                }}
              >
                <IoMdFolder className="me-1" /> Projects
              </motion.a>
            </motion.li>
            <motion.li className="nav-item">
              <motion.a
                className="nav-link"
                to="/resume"
                onClick={() => setExpanded(false)}
                style={{ color: colors.font }}
                whileHover={{
                  color: colors.highlightFont,
                  textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
                  transition: { duration: 0.1 },
                  textDecoration: "underline",
                }}
              >
                <IoMdDocument className="me-1" /> Resume
              </motion.a>
            </motion.li>
            <motion.li className="nav-item">
              <motion.a
                className="nav-link"
                to="/contact"
                onClick={() => setExpanded(false)}
                style={{ color: colors.font }}
                whileHover={{
                  color: colors.highlightFont,
                  textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
                  transition: { duration: 0.1 },
                  textDecoration: "underline",
                }}
              >
                <IoMdContact className="me-1" /> Contact
              </motion.a>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
