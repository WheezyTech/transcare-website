import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Footer Columns */}
        <div className="footer-columns">

          {/* Column 1: About */}
          <div className="footer-column">
            <h4>About Us</h4>
            <p>
              Transcare Agencies is a Kenyan-based company specializing in clean, efficient cookstoves. Our mission is to reduce fuel costs, cooking time, and environmental impact.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <Link to="/" onClick={scrollToTop}>Home</Link>
            <Link to="/services" onClick={scrollToTop}>Services</Link>
            <Link to="/products" onClick={scrollToTop}>Products</Link>
            <Link to="/about" onClick={scrollToTop}>About</Link>
            <Link to="/contact" onClick={scrollToTop}>Contact</Link>
            <Link to="/certifications" onClick={scrollToTop}>Certifications</Link>
            <Link to="/faq" onClick={scrollToTop}>FAQ</Link>
          </div>

          {/* Column 3: Legal */}
          <div className="footer-column">
            <h4>Legal</h4>
            <Link to="/terms" onClick={scrollToTop}>Terms & Conditions</Link>
            <Link to="/privacy-policy" onClick={scrollToTop}>Privacy Policy</Link>
            <Link to="/cookie-policy" onClick={scrollToTop}>Cookie Policy</Link>
            <Link to="/disclaimer" onClick={scrollToTop}>Disclaimer</Link>
            <Link to="/warranty-policy" onClick={scrollToTop}>Return / Warranty Policy</Link>
          </div>

          {/* Column 4: Social & Certifications */}
          <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="footer-social">
              <a href="https://www.facebook.com/share/18gVvD2gvJ/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} WheezyTechnologies. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
