import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-bg"
        src="/assets/videos/yoobeefest.mp4"
      ></video>
      <div className="hero-content">
        <h1>#NoLimits</h1>
        <p>YoobeeFest: A celebration of creativity, innovation, and talent.</p>
        <div className="hero-buttons">
          <button className="cta-button">Learn More</button>
          <button className="cta-button-secondary">Join the waitlist</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
