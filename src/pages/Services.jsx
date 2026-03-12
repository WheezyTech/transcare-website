import React from "react";
import { FaFire, FaTools, FaWrench, FaIndustry, FaTruck, FaLeaf } from "react-icons/fa";

/* IMPORT STOVE IMAGES */
import stove1 from "../assets/images/stove1.jpeg";
import stove2 from "../assets/images/stove2.jpeg";
import stove3 from "../assets/images/stove3.jpg";
import stove4 from "../assets/images/stove4.jpg";

function Services() {
  return (
    <>
      {/* SERVICES SECTION */}
      <section className="services-page container">
        <h2 className="services-title">Our Services</h2>

        <div className="services-grid">
          <div className="service-card">
            <FaIndustry className="service-icon" />
            <h3>Steam Stove Manufacturing</h3>
            <p>
              We manufacture durable and efficient steam-powered stoves
              designed for homes, institutions, and commercial kitchens.
            </p>
          </div>

          <div className="service-card">
            <FaTools className="service-icon" />
            <h3>Custom Stove Fabrication</h3>
            <p>
              Our experts design and fabricate steam stoves tailored to your
              cooking needs, kitchen space, and operational requirements.
            </p>
          </div>

          <div className="service-card">
            <FaFire className="service-icon" />
            <h3>Energy Efficient Cooking</h3>
            <p>
              Our advanced steam stove technology reduces fuel consumption
              while ensuring safe, fast, and efficient cooking.
            </p>
          </div>

          <div className="service-card">
            <FaTruck className="service-icon" />
            <h3>Delivery & Installation</h3>
            <p>
              We provide reliable delivery and professional installation
              services to ensure your steam stove operates safely and efficiently.
            </p>
          </div>

          <div className="service-card">
            <FaWrench className="service-icon" />
            <h3>Maintenance & Repair</h3>
            <p>
              Our technicians offer regular maintenance and repair services
              to keep your steam stove performing at its best.
            </p>
          </div>

          <div className="service-card">
            <FaLeaf className="service-icon" />
            <h3>Eco-Friendly Cooking Solutions</h3>
            <p>
              Our steam stoves support environmentally friendly cooking
              with reduced smoke emissions and lower fuel usage.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;