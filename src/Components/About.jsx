import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <h2 className="about-title">About YoobeeFest</h2>
      <div className="about-timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Founded in Creativity</h3>
            <p>
              YooBeeFest was created to bring together creative minds, fostering
              innovation and showcasing student talent in unique and dynamic
              ways.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Interactive Experiences</h3>
            <p>
              Each year, students from game design, film production, graphic
              design, and more come together to create interactive showcases.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Celebration of Achievement</h3>
            <p>
              A vibrant mix of graduation ceremonies and live performances to
              celebrate success, creativity, and community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
