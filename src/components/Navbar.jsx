import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Transcare Agencies" className="logo" />
        </Link>
        <span className="company-name">TRANSCARE AGENCIES</span>
      </div>
      
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
        <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        {/* Certifications Dropdown */}
      <div className="dropdown">
        <Link to="/certifications">Certifications ▾</Link>

        <div className="dropdown-menu">
          <Link to="/certifications" onClick={() => setIsOpen(false)}>All Certifications</Link>
          <Link to="/certifications/kebs" onClick={() => setIsOpen(false)}>KEBS</Link>
          <Link to="/certifications/wipo" onClick={() => setIsOpen(false)}>WIPO</Link>
          <Link to="/certifications/kncci" onClick={() => setIsOpen(false)}>KNCCI</Link>
        </div>
      </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;