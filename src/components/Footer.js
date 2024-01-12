import React, { useState, useEffect } from "react";
import "./footer.css";
import logo from "./assets/logo.png";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="footer">
      <div className="footer-info">
        <img src={logo} alt="" className="logo" />
        {/* <p>National Institute of Technology Hamirpur</p> */}
        <div className="social">
          <span className="social-heading">Social</span>
          <div
            className="icons"
            onClick={() => {
              window.open("https://www.instagram.com/fineartsnith/", "_blank");
            }}
          >
            <FaInstagram />
            <span> Instagram</span>
          </div>
          <div
            className="icons"
            onClick={() => {
              window.open(
                "https://www.facebook.com/FineArtsClubNitHamirpur/",
                "_blank"
              );
            }}
          >
            <FaFacebook />
            <span> Facebook</span>
          </div>
          <div
            className="icons"
            onClick={() => {
              window.open(
                "https://www.facebook.com/FineArtsClubNitHamirpur/",
                "_blank"
              );
            }}
          >
            <FaXTwitter />
            <span> Twitter</span>
          </div>
          <div
            className="icons"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/company/fineartsnith/",
                "_blank"
              );
            }}
          >
            <FaLinkedin />
            <span> LinkedIn</span>
          </div>
        </div>
      </div>
      <div className="copyright">&copy; 2024 fineartsnith</div>
    </div>
  );
}
