import React from "react";
import {
  FaIndustry,
  FaTools,
  FaFire,
  FaTruck,
  FaWrench,
  FaLeaf,
} from "react-icons/fa";

const Services = () => {
  return (
    <section className="services-page">
      <div className="container">

        <h1 className="services-title">
          Steam Stove Manufacturing & Cooking Solutions in Kenya
        </h1>

        <p className="services-subtitle">
          At Transcare Agencies, we provide high-quality, energy-efficient
          steam stove manufacturing and support services designed for homes,
          schools, institutions, and commercial kitchens across Trans-Sahara Africa and beyond.
        </p>

        <div className="services-grid">

          {/* Service 1 */}
          <div className="service-card">
            <FaIndustry className="service-icon" />
            <h3>Steam Stove Manufacturing</h3>
            <p>
              We design and manufacture durable, high-performance steam stoves
              suitable for homes, schools, hotels, and institutions. Our stoves
              are built for efficiency, safety, and long-term use.
            </p>
            <ul>
              <li>Homes & residential kitchens</li>
              <li>Schools & institutions</li>
              <li>Hotels & commercial kitchens</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="service-card">
            <FaTools className="service-icon" />
            <h3>Custom Stove Fabrication</h3>
            <p>
              We build customized steam stoves tailored to your specific kitchen
              requirements, ensuring optimal performance and space utilization.
            </p>
            <ul>
              <li>Custom kitchen sizes</li>
              <li>Flexible cooking capacity</li>
              <li>Designed for your operations</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="service-card">
            <FaFire className="service-icon" />
            <h3>Energy-Efficient Cooking Solutions</h3>
            <p>
              Our advanced steam stove technology helps reduce fuel consumption,
              improve cooking speed, and enhance safety in the kitchen.
            </p>
            <ul>
              <li>Lower fuel costs</li>
              <li>Faster cooking time</li>
              <li>Improved kitchen safety</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="service-card">
            <FaTruck className="service-icon" />
            <h3>Delivery & Installation</h3>
            <p>
              We provide fast and reliable delivery services across Kenya,
              along with professional installation to ensure your stove operates
              perfectly from day one.
            </p>
            <ul>
              <li>Timely delivery</li>
              <li>Professional installation</li>
              <li>Setup guidance</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="service-card">
            <FaWrench className="service-icon" />
            <h3>Maintenance & Repair</h3>
            <p>
              Our experienced technicians offer maintenance and repair services
              to keep your steam stove running efficiently and reliably.
            </p>
            <ul>
              <li>Routine maintenance</li>
              <li>Quick repairs</li>
              <li>Performance optimization</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="service-card">
            <FaLeaf className="service-icon" />
            <h3>Eco-Friendly Cooking Solutions</h3>
            <p>
              Our stoves are designed to support environmentally friendly
              cooking by reducing smoke emissions and improving fuel efficiency.
            </p>
            <ul>
              <li>Reduced smoke emissions</li>
              <li>Lower environmental impact</li>
              <li>Sustainable cooking practices</li>
            </ul>
          </div>

        </div>

        {/* WHY CHOOSE US */}
        <div className="why-choose">
          <h2>Why Choose Transcare Agencies?</h2>
          <ul>
            <li>✔ High-quality and durable products</li>
            <li>✔ Energy-saving technology</li>
            <li>✔ Professional and experienced team</li>
            <li>✔ Reliable customer support</li>
            <li>✔ Environmentally friendly solutions</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Services;
