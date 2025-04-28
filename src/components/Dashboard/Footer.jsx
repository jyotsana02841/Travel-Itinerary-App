import React from 'react';
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import '../../styles/Dashboard/Footer.css';

const Footer = () => {
  return (
    <div className="footer-container"> {/* Add a specific class for the footer container */}
      <span className="footer-icon"><CiHome /></span> {/* Add a class for the icons */}
      <span className="footer-icon"><CiSearch /></span>
      <span className="footer-icon"><FaPlus /></span>
      <span className="footer-icon"><IoIosHeartEmpty /></span>
      <span className="footer-icon"><FiUser /></span>
    </div>
  );
};

export default Footer;