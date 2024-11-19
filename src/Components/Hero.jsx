import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-bg"
        src={`${process.env.PUBLIC_URL}/assets/videos/yoobeefest.mp4`}
        aria-label="Background video for YoobeeFest"
      ></video>

      {/* Hero Content */}
      <div className="hero-content">
        <h1>#NoLimits</h1>
        <p>YoobeeFest: A celebration of creativity, innovation, and talent.</p>

        {/* Call-to-Action Buttons */}
        <div className="hero-buttons">
          <button
            className="cta-button"
            aria-label="Learn more about YoobeeFest"
          >
            Learn More
          </button>
          <button
            className="cta-button-secondary"
            aria-label="Join the YoobeeFest waitlist"
          >
            Join the Waitlist
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
