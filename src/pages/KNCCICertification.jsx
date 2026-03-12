import React from "react";
import kncciLogo from "../assets/images/kncci.png";

const KNCCICertification = () => {
  return (
    <div className="cert-page">
      <div className="cert-hero">
        <img src={kncciLogo} alt="KNCCI Certification" />
        <h1>Kenya National Chamber of Commerce and Industry</h1>
        <p>
          This document is a membership certificate for TRANS CARE AGENCIES
          from the Kenya National Chamber of Commerce and Industry (KNCCI).
        </p>
      </div>

      <div className="cert-content">
        <div className="cert-card">
          <h3>Quality Assurance</h3>
          <p>
            Our company is recognized by the Kenya National Chamber of Commerce
            and Industry for membership, high quality, and regulatory compliance.
          </p>
        </div>

        <div className="cert-card">
          <h3>Verified Products</h3>
          <p>
            All solutions follow approved technology and operational standards.
          </p>
        </div>

        <div className="cert-card">
          <h3>Compliance</h3>
          <p>
            We maintain continuous compliance with regulatory requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KNCCICertification;