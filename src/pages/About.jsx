import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="about-page">
      
      {/* SEO META TAGS */}
      <Helmet>
        <title>About Transcare Agencies | Steam Stove Manufacturing Kenya</title>
        <meta
          name="description"
          content="Learn about Transcare Agencies, a Kenyan company specializing in energy-efficient steam stove manufacturing and clean cooking solutions for homes, schools, and institutions."
        />
      </Helmet>

      {/* HERO SECTION */}
      <div className="about-hero">
        <div className="about-overlay">
          <div className="about-content">
            <h1>About Transcare Agencies</h1>

            <p>
              Transcare Agencies is a trusted Kenyan company specializing in
              <strong> steam stove manufacturing and clean cooking solutions</strong>{" "}
              for homes, institutions, and commercial kitchens. Founded with a
              vision to transform cooking efficiency and sustainability, the
              company has grown into a reliable partner for individuals and
              organizations across Kenya.
            </p>

            <p>
              We understand that modern kitchens require solutions that are not
              only efficient but also safe, cost-effective, and environmentally
              friendly. That is why we combine{" "}
              <strong>professional expertise, innovative technology, and
              customer-focused service</strong> to deliver high-quality steam
              stove systems tailored to each client’s needs.
            </p>

            <p>
              Our products are designed to reduce fuel consumption, minimize
              cooking time, and promote cleaner environments by reducing smoke
              emissions. Over time, we have built a strong reputation based on{" "}
              <strong>trust, reliability, and consistent performance</strong>.
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
            To provide reliable and energy-efficient cooking solutions that
            exceed customer expectations while maintaining the highest standards
            of quality, professionalism, and integrity.
          </p>
        </div>

        <div className="mv-card">
          <FaEye className="mv-icon" />
          <h2>Our Vision</h2>
          <p>
            To become a leading provider of clean cooking technologies in Kenya
            and beyond, recognized for excellence, sustainability, and
            innovation.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
