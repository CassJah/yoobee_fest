import React, { useState, useEffect } from "react";
import "./Highlights.css";

function Highlights() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      title: "Graduation Ceremony",
      description: "Celebrate the achievements of our graduates.",
      video: "/assets/videos/graduation.mp4", // Correct video path
    },
    {
      title: "Student Showcase",
      description:
        "Interactive displays of student projects across disciplines.",
      video: "/assets/videos/a.i.mp4", // Correct video path
    },
    {
      title: "Music Festival",
      description: "Enjoy a summer festival with top artists and bands.",
      video: "/assets/videos/festival.mp4", // Correct video path
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [cards.length]);

  return (
    <section id="highlights" className="highlights">
      <h2>Event Highlights</h2>
      <div className="carousel">
        {cards.map((card, index) => {
          const position = (index - currentIndex + cards.length) % cards.length;

          let className = "hidden";
          if (position === 0) className = "visible";
          if (position === 1) className = "next";
          if (position === cards.length - 1) className = "previous";

          return (
            <div key={index} className={`card ${className}`}>
              <video
                src={card.video}
                autoPlay
                muted
                loop
                className="card-video"
              ></video>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Highlights;
