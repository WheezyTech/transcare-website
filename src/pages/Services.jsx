import React from "react";
import { FaIndustry, FaTools, FaFire, FaTruck, FaWrench, FaLeaf } from "react-icons/fa";

const Services = () => {
  return (
    <section className="services-page">
      <div className="container">

        <h1 className="services-title">Our Services</h1>
        <p className="services-subtitle">
          We provide high-quality steam stove manufacturing and support services 
          designed for homes, institutions, and commercial kitchens.
        </p>

        <div className="services-grid">

          <div className="service-card">
            <FaIndustry className="service-icon"/>
            <h3>Steam Stove Manufacturing</h3>
            <p>
              We design and manufacture durable steam-powered stoves 
              suitable for homes, schools, hotels, and institutions.
            </p>
          </div>

          <div className="service-card">
            <FaTools className="service-icon"/>
            <h3>Custom Stove Fabrication</h3>
            <p>
              Our team builds customized steam stoves tailored to your 
              kitchen size, cooking capacity, and operational needs.
            </p>
          </div>

          <div className="service-card">
            <FaFire className="service-icon"/>
            <h3>Energy Efficient Cooking</h3>
            <p>
              Our steam stove technology helps reduce fuel consumption 
              while providing fast and safe cooking solutions.
            </p>
          </div>

          <div className="service-card">
            <FaTruck className="service-icon"/>
            <h3>Delivery & Installation</h3>
            <p>
              We offer reliable delivery and professional installation 
              services to ensure your equipment works perfectly.
            </p>
          </div>

          <div className="service-card">
            <FaWrench className="service-icon"/>
            <h3>Maintenance & Repair</h3>
            <p>
              Our technicians provide regular maintenance and repair 
              services to keep your steam stove operating efficiently.
            </p>
          </div>

          <div className="service-card">
            <FaLeaf className="service-icon"/>
            <h3>Eco-Friendly Cooking Solutions</h3>
            <p>
              Our stoves promote environmentally friendly cooking with 
              reduced smoke emissions and improved fuel efficiency.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;
