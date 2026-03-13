import React from 'react';
import '../styles/Home.css';

export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to Our Service</h1>
        <p>Your satisfaction is our priority!</p>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="why-image">
          <img src="/images/why-choose-us.jpg" alt="Why Choose Us Image" />
        </div>
        <p>We provide the best services in the industry.</p>
      </section>

      <section className="company-stats">
        <h2>Company Stats</h2>
        <p>100+ Projects Completed</p>
        <p>200+ Happy Clients</p>
      </section>

      <section className="cta">
        <h2>Contact Us Today!</h2>
        <button className="btn-primary">Get Started</button>
      </section>

      <section className="gallery">
        <h2>Gallery</h2>
        <img src="/images/gallery1.jpg" alt="Gallery Image 1" />
        <img src="/images/gallery2.jpg" alt="Gallery Image 2" />
      </section>
    </div>
  );
}