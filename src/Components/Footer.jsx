import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a
            href="https://www.yoobee.ac.nz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/Transparent_Background_yoobee.png`}
              alt="Yoobee Logo"
            />
          </a>
        </div>
        <p className="footer-text">© 2024 YoobeeFest. All Rights Reserved.</p>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="icon facebook-icon" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon instagram-icon" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="icon tiktok-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
