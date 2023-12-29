import React from "react";
import "./footer.css";
import logo from "./assets/logo.png";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-info">
        <img src={logo} alt="" className="logo" />
        <div className="social">
          <span>Social</span>
          <div className="icons">
            <FaInstagram />
            <span> Instagram</span>
          </div>
          <div className="icons">
          <FaFacebook />
            <span> Facebook</span>
          </div>
          <div className="icons">
          <FaXTwitter />
            <span> Twitter</span>
          </div>
          <div className="icons">
            <FaLinkedin />
            <span> LinkedIn</span>
          </div>
        </div>
      </div>
      <div className="copyright">&copy; 2024 fineartsnith</div>
    </div>
  );
}
