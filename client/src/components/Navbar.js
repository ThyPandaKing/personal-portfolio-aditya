import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoMdHome,
  IoMdDocument,
  IoMdContact,
  IoMdFolder,
} from "react-icons/io";
import profileLogo from "../assets/my_icon.png";
import colors from "../color_combo.json";
import { motion } from "framer-motion";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{
        backgroundColor: colors.primary,
        color: colors.highlightFont,
      }}
    >
      <div className="container-fluid">
        {/* Brand with image */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src={profileLogo}
            alt="Profile"
            width="35"
            height="35"
            className="rounded-circle"
          />
          <span style={{ color: colors.highlightFont }}>My Portfolio</span>
        </Link>

        {/* Toggle button */}
        <motion.button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
          style={{
            color: colors.highlightFont,
            backgroundColor: colors.highlightFont,
          }}
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
              <Link
                className="nav-link"
                to="/"
                onClick={() => setExpanded(false)}
              >
                <motion.div
                  style={{
                    color: colors.highlightFont,
                    display: "flex",
                    alignItems: "center",
                    filter: "drop-shadow(0 0 0 rgba(0,0,0,0))", // reset base shadow
                    transition: "filter 0.2s, color 0.2s", // optional smoothness
                  }}
                  whileHover={{
                    color: "#fff",
                    filter: "drop-shadow(0 0 4px rgba(255,255,255,0.8))",
                  }}
                >
                  <IoMdHome className="me-1" /> Home
                </motion.div>
              </Link>
            </motion.li>
            <motion.li className="nav-item">
              <Link
                className="nav-link"
                to="/projects"
                onClick={() => setExpanded(false)}
              >
                <motion.div
                  style={{
                    color: colors.highlightFont,
                    display: "flex",
                    alignItems: "center",
                    filter: "drop-shadow(0 0 0 rgba(0,0,0,0))", // reset base shadow
                    transition: "filter 0.2s, color 0.2s", // optional smoothness
                  }}
                  whileHover={{
                    color: "#fff",
                    filter: "drop-shadow(0 0 4px rgba(255,255,255,0.8))",
                  }}
                >
                  <IoMdFolder className="me-1" /> Projects
                </motion.div>
              </Link>
            </motion.li>
            <motion.li className="nav-item">
              <Link
                className="nav-link"
                to="/resume"
                onClick={() => setExpanded(false)}
              >
                <motion.div
                  style={{
                    color: colors.highlightFont,
                    display: "flex",
                    alignItems: "center",
                    filter: "drop-shadow(0 0 0 rgba(0,0,0,0))", // reset base shadow
                    transition: "filter 0.2s, color 0.2s", // optional smoothness
                  }}
                  whileHover={{
                    color: "#fff",
                    filter: "drop-shadow(0 0 4px rgba(255,255,255,0.8))",
                  }}
                >
                  <IoMdDocument className="me-1" /> Resume
                </motion.div>
              </Link>
            </motion.li>
            <motion.li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                onClick={() => setExpanded(false)}
              >
                <motion.div
                  style={{
                    color: colors.highlightFont,
                    display: "flex",
                    alignItems: "center",
                    filter: "drop-shadow(0 0 0 rgba(0,0,0,0))", // reset base shadow
                    transition: "filter 0.2s, color 0.2s", // optional smoothness
                  }}
                  whileHover={{
                    color: "#fff",
                    filter: "drop-shadow(0 0 4px rgba(255,255,255,0.8))",
                  }}
                >
                  <IoMdContact className="me-1" /> Contact
                </motion.div>
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
