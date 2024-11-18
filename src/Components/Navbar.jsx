import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [currentLogo, setCurrentLogo] = useState("Yoobee");
  const [activeLink, setActiveLink] = useState("#hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const logoWords = [
    "Game",
    "Tech",
    "Film",
    "Art",
    "Code",
    "Media",
    "Design",
    "Tourism",
    "Creative",
    "Mani",
    "Yoobee",
  ];

  // Cycle through logo words
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => {
        const currentIndex = logoWords.indexOf(prev);
        const nextIndex = (currentIndex + 1) % logoWords.length;
        return logoWords[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Handle scroll to update navbar state
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  // Handle window resize to reset menu state
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setMenuOpen(false); // Close the menu on desktop view
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <a href="#hero" className="logo">
        <span className="rotating-part">{currentLogo}</span>
        <span className="stationary-part">Fest</span>
      </a>
      <button
        className="burger-menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#hero" className={activeLink === "#hero" ? "active" : ""}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={activeLink === "#about" ? "active" : ""}>
            About
          </a>
        </li>
        <li>
          <a
            href="#highlights"
            className={activeLink === "#highlights" ? "active" : ""}
          >
            Events
          </a>
        </li>
        <li>
          <a
            href="#sponsor"
            className={activeLink === "#sponsor" ? "active" : ""}
          >
            Sponsors
          </a>
        </li>
        <li>
          <a
            href="#footer"
            className={activeLink === "#footer" ? "active" : ""}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
