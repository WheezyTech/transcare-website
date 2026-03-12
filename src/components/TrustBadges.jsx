import React from "react";
import kncci from "../assets/images/kncci.png";
import kebs from "../assets/images/kebs.png";
import wipo from "../assets/images/wipo.png";

const TrustBadges = () => {
  return (
    <div className="trust-section">
      <h2>Trusted & Certified</h2>

      <div className="badge-container">

        <div className="badge">
          <img src={kncci} alt="KNCCI Certification"/>
          <p>KNCCI Member</p>
        </div>

        <div className="badge">
          <img src={kebs} alt="KEBS Certification"/>
          <p>KEBS Standards</p>
        </div>

        <div className="badge">
          <img src={wipo} alt="WIPO Certification"/>
          <p>WIPO Recognition</p>
        </div>

      </div>
    </div>
  );
};

export default TrustBadges;