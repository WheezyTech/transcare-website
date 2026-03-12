import React from "react";
import wipoLogo from "../assets/images/wipo.png";

const WIPOCertification = () => {
  return (
    <div className="cert-page">
      <div className="cert-hero">
        <img src={wipoLogo} alt="WIPO Certification" />
        <h1>World Interlactual Property Organization</h1>
        <p>
          Our certification services, aligned with the standards of the World Intellectual Property Organization (WIPO), help individuals and businesses protect and maximize the value of their intellectual property.
        </p>
      </div>

      <div className="cert-content">
        <div className="cert-card">
          <h3>WIPO</h3>
          <p>Protect your ideas, showcase your expertise, and expand your reach globally. Our team guides you through the certification process from start to finish.</p>
        </div>

        <div className="cert-card">
          <h3>World Interlactual Property Organization</h3>
          <p>Secure systems designed to protect business operations.</p>
        </div>

        <div className="cert-card">
          <h3>International Compliance</h3>
          <p>Meeting global operational standards and procedures.</p>
        </div>
      </div>
    </div>
  );
};

export default WIPOCertification;