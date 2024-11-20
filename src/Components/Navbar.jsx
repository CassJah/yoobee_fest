import React, { useState, useEffect, useMemo } from "react";
import "./Navbar.css";

function Navbar() {
  const [currentLogo, setCurrentLogo] = useState("Yoobee");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const logoWords = useMemo(
    () => [
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
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => {
        const currentIndex = logoWords.indexOf(prev);
        const nextIndex = (currentIndex + 1) % logoWords.length;
        return logoWords[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [logoWords]); // Add `logoWords` to the dependency array

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#highlights">Events</a>
        </li>
        <li>
          <a href="#sponsor">Sponsors</a>
        </li>
        <li>
          <a href="#footer">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
