import React from "react";
import kipiLogo from "../assets/images/kipi.png";

const KIPICertification = () => {
  return (
    <div className="cert-page">
      <div className="cert-hero">
        <img src={kipiLogo} alt="KIPI Certification"/>
        <h1>KIPI Certification</h1>
        <p>
          Our company is recognized by the Kenya Bureau of Standards for
          maintaining high quality and regulatory compliance.
        </p>
      </div>

      <div className="cert-content">
        <div className="cert-card">
          <h3>Quality Assurance</h3>
          <p>Our services meet national standards for reliability and safety.</p>
        </div>

        <div className="cert-card">
          <h3>Verified Products</h3>
          <p>All solutions follow approved technology and operational standards.</p>
        </div>

        <div className="cert-card">
          <h3>Compliance</h3>
          <p>We maintain continuous compliance with regulatory requirements.</p>
        </div>
      </div>
    </div>
  );
};

export default KIPICertification;