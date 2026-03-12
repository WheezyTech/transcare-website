import React from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      
      {/* HERO SECTION */}
      <div className="about-hero">
        <div className="about-overlay">
          <div className="about-content">
            <h1>ABOUT TRANSCARE AGENCIES</h1>
            <p>
              Founded with a vision to transform transport and logistics services, TRANSCARE AGENCIES has grown into a dependable partner for individuals and businesses alike.
We understand that timely delivery and safe transportation are critical to success. That is why we combine professional expertise, modern operational standards, and customer-focused service to ensure every client receives reliable solutions tailored to their needs.
Our reputation is built on trust, accountability, and consistent performance.
            </p>
          </div>
        </div>
      </div>

      {/* MISSION & VISION SECTION */}
      <div className="mission-vision container">
        <div className="mv-card">
          <FaBullseye className="mv-icon" />
          <h2>Our Mission</h2>
          <p>
            To provide dependable and innovative service solutions that 
            exceed client expectations while maintaining the highest 
            standards of professionalism and integrity.
          </p>
        </div>

        <div className="mv-card">
          <FaEye className="mv-icon" />
          <h2>Our Vision</h2>
          <p>
            To become a leading agency recognized for excellence,
            trust, and transformative impact in the industry.
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;