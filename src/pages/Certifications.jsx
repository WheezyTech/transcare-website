import React from "react";
import kebsLogo from "../assets/images/kebs.png";
import kncciLogo from "../assets/images/kncci.png";
import wipoLogo from "../assets/images/wipo.png";
import kipiLogo from "../assets/images/kipi.png"

const Certifications = () => {
  return (
    <div className="certifications-page">

      <h1>Our Certifications</h1>

      <p className="cert-intro">
        TRANS CARE AGENCIES operates under recognized national and
        international standards to ensure quality, reliability,
        and professional service delivery.
      </p>

      <div className="certifications-grid">

        <div className="cert-card">
          <img src={kebsLogo} alt="KEBS Certification"/>
          <h3>KEBS Certified</h3>
          <p>
            Certified by the Kenya Bureau of Standards confirming
            compliance with national quality and safety standards.
          </p>
        </div>

        <div className="cert-card">
          <img src={kncciLogo} alt="KNCCI Membership"/>
          <h3>KNCCI Membership</h3>
          <p>
            Registered member of the Kenya National Chamber of Commerce
            and Industry supporting ethical business and trade growth.
          </p>
        </div>

        <div className="cert-card">
          <img src={wipoLogo} alt="WIPO Certification"/>
          <h3>World Intellectual Property Organization (WIPO)</h3>
          <p>
            Recognition under the international intellectual property
            framework supporting innovation and business protection.
          </p>
        </div>

        <div className="cert-card">
          <img src={kipiLogo} alt="KIPI Membership"/>
          <h3>KIPI Membership</h3>
          <p>
            Registered member of the Kenya Industrial Property Institute (KIPI) supporting ethical business and trade growth.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Certifications;