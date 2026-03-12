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
      {/* STOVE PRODUCTS */}
<section className="stove-gallery container">
  <h2 className="services-title">Our Steam Stoves</h2>

  <div className="services-grid">

    <div className="service-card">
      <img src={stove1} alt="Single Burner Steam Stove" />
      <h3>Single Burner Steam Stove</h3>
    </div>

    <div className="service-card">
      <img src={stove2} alt="Double Burner Steam Stove" />
      <h3>Double Burner Steam Stove</h3>
    </div>

    <div className="service-card">
      <img src={stove3} alt="Commercial Steam Stove" />
      <h3>Commercial Steam Stove</h3>
    </div>

    <div className="service-card">
      <img src={stove4} alt="Institutional Steam Stove" />
      <h3>Institutional Steam Stove</h3>
    </div>

  </div>
</section>
    </>
  );
}

export default Services;