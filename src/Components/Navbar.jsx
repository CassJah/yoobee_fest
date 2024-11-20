import React, { useState, useEffect, useMemo } from "react";
import "./Navbar.css";

function Navbar() {
  const [currentLogo, setCurrentLogo] = useState("Yoobee");
  const [activeLink, setActiveLink] = useState("#hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Use useMemo for logoWords to avoid reinitializing on every render
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

  // Update currentLogo periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => {
        const currentIndex = logoWords.indexOf(prev);
        const nextIndex = (currentIndex + 1) % logoWords.length;
        return logoWords[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [logoWords]);

  // Handle scroll events
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    setIsScrolled(scrollPosition > 50);

    const sections = [
      { id: "#hero", element: document.getElementById("hero") },
      { id: "#about", element: document.getElementById("about") },
      { id: "#highlights", element: document.getElementById("highlights") },
      { id: "#sponsor", element: document.getElementById("sponsor") },
      { id: "#footer", element: document.getElementById("footer") },
    ];

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i].element;
      if (
        section &&
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        setActiveLink(sections[i].id);
        return;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
