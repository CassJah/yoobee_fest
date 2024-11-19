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

  const handleScroll = () => setIsScrolled(window.scrollY > 50);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setMenuOpen(false);
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

  const handleActiveLink = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

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
        {[
          { href: "#hero", label: "Home" },
          { href: "#about", label: "About" },
          { href: "#highlights", label: "Events" },
          { href: "#sponsor", label: "Sponsors" },
          { href: "#footer", label: "Contact" },
        ].map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={activeLink === item.href ? "active" : ""}
              onClick={() => handleActiveLink(item.href)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
