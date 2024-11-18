import React, { useState, useEffect } from "react";
import "./Sponsor.css";

function Sponsor() {
  const sponsors = [
    {
      name: "Sony",
      logo: "/assets/images/Transparent_Background_sony.png",
      website: "https://www.sony.co.nz/",
    },
    {
      name: "Datacom",
      logo: "/assets/images/Transparent_Background_datacom.png",
      website: "https://datacom.com/",
    },
    {
      name: "Gameloft",
      logo: "/assets/images/Transparent_Background_gameloft.png",
      website: "https://www.gameloft.com/",
    },
    {
      name: "Genesis",
      logo: "/assets/images/Transparent_Background_genesis.png",
      website: "https://www.genesisenergy.co.nz/",
    },
    {
      name: "Grinding Gears Game",
      logo: "/assets/images/Transparent_Background_grinding gears game.png",
      website: "https://www.grindinggear.com/",
    },
    {
      name: "Marvel",
      logo: "/assets/images/Transparent_Background_marvel.png",
      website: "https://www.marvel.com/",
    },
    {
      name: "Rocketlab",
      logo: "/assets/images/Transparent_Background_rocketlab.png",
      website: "https://www.rocketlabusa.com/",
    },
    {
      name: "Spark",
      logo: "/assets/images/Transparent_Background_spark.png",
      website: "https://www.spark.co.nz/",
    },
    {
      name: "Vodafone",
      logo: "/assets/images/Transparent_Background_vodafone.png",
      website: "https://one.nz/",
    },
    {
      name: "Wacom",
      logo: "/assets/images/Transparent_Background_wacom.png",
      website: "https://www.wacom.com/",
    },
    {
      name: "Xero",
      logo: "/assets/images/Transparent_Background_xero.png",
      website: "https://www.xero.com/",
    },
    {
      name: "Yoobee",
      logo: "/assets/images/Transparent_Background_yoobee.png",
      website: "https://www.yoobee.ac.nz/",
    },
    {
      name: "Mukpuddy",
      logo: "/assets/images/Transparent_Background_mukpuddy.png",
      website: "https://mukpuddy.com/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length);
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [sponsors.length]);

  const visibleSponsors = [...sponsors, ...sponsors].slice(
    currentIndex,
    currentIndex + 10
  ); // Always show 10 sponsors

  return (
    <section id="sponsor" className="sponsor-section">
      <h2 className="sponsor-title">Our Sponsors</h2>
      <div className="carousel-container">
        {visibleSponsors.map((sponsor, index) => (
          <a
            key={index}
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-card"
          >
            <img
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              className="sponsor-logo"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Sponsor;
