import React from "react";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { easeInOut, motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <motion.div
          animate={{ translateY: [0, -5, 5, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
          className="navbar-logo"
        >
          <img src={logo} alt="" />
        </motion.div>
        <div className="navbar-items">
          <ul>
            <li>Home</li>
            <li>Editions</li>
            <li>Features</li>
            <li>Options</li>
          </ul>
        </div>
        <div className="navbar-toggle">
          <FaBars />
        </div>
      </div>
    </>
  );
};

export default Navbar;
