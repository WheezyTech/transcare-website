import React, { useState } from "react";
import { Link } from "react-router-dom";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import truck3 from "../assets/images/truck3.jpg";
import truck4 from "../assets/images/truck4.jpeg";
import truck5 from "../assets/images/truck5.jpeg";
import truck6 from "../assets/images/truck6.jpeg";
import truck7 from "../assets/images/truck7.jpeg";
import truck8 from "../assets/images/truck8.jpeg";
import truck9 from "../assets/images/truck9.jpg";
import truck10 from "../assets/images/truck10.jpg";
import truck11 from "../assets/images/truck11.jpg";
import ceo from "../assets/images/ceo.png";


function Home() {

const images = [
  { src: truck10 },
  { src: truck4 },
  { src: truck5 },
  { src: truck6 },
  { src: truck7 },
  { src: truck8 },
  { src: truck9 },
  { src: truck3 },
  { src: truck11 }
];

const [open, setOpen] = useState(false);
const [index, setIndex] = useState(0);

return (
<div className="home">

{/* HERO */}
<section className="hero">
<div className="hero-content">
<h1>Reliable. Professional. Efficient.</h1>
<p>
Transcare Agencies is a Kenyan-based company and a partner of the Clean Cooking Alliance (CCA), specializing in the design and production of efficient, clean-burning cookstoves. Based in Eldoret, the agency focuses on reducing cooking time, lowering fuel costs, and minimizing environmental impact through innovative technology.
</p>

<div className="hero-buttons">
<Link to="/contact" className="btn-primary">Get Started</Link>
<Link to="/services" className="btn-outline">Our Services</Link>
</div>
</div>
</section>


{/* SERVICES */}
<section className="services-preview container">
<h2>MEMBERSHIP</h2>

<div className="service-cards">

<div className="card">
<h3>Jua Kali Association </h3>
<p>Our membership with the Jua Kali Association connects us with Kenya’s largest informal sector network that promotes entrepreneurship, skills development, and local manufacturing. This affiliation strengthens our commitment to supporting grassroots innovation and collaboration within the business community.</p>
</div>

<div className="card">
<h3>Kenya Chamber of Commerce and Industry</h3>
<p>Being a member of the Kenya National Chamber of Commerce and Industry (KNCCI) reflects our dedication to ethical business practices and national economic growth. KNCCI membership provides access to a broad business network, advocacy support, and opportunities for partnerships and trade development.</p>
</div>

<div className="card">
<h3>Kenya Industrial Property Institute(KIPI)</h3>
<p>Our association with the Kenya Industrial Property Institute (KIPI) highlights our commitment to protecting innovation and intellectual property rights. KIPI supports businesses in securing patents, trademarks, and industrial designs, ensuring that creativity and technological advancements are safeguarded.</p>
</div>

<div className="card">
<h3>Clean Cooking Association(CCA) World</h3>
<p>Through engagement with the Clean Cooking Alliance (CCA), we support initiatives that promote clean, efficient, and sustainable cooking solutions. This partnership aligns us with global efforts to improve health, protect the environment, and expand access to modern energy solutions.</p>
</div>

<div className="card">
<h3>Small Medium Enterprises</h3>
<p>Membership in the Small and Medium Enterprises (SME) sector demonstrates our commitment to growing sustainable businesses and contributing to economic development. As an SME, we focus on innovation, efficiency, and providing reliable services while supporting job creation and local economic growth.</p>
</div>

<div className="card">
<h3>World Interlectual Property Organization(WIPO) </h3>
<p>Recognition from the World Intellectual Property Organization (WIPO) connects us to a global framework that promotes the protection of intellectual property. This affiliation demonstrates our commitment to innovation, creativity, and international standards in protecting ideas and business assets.</p>
</div>

<div className="card">
<h3>Kenya Industrial Research and Development Institute</h3>
<p>Our collaboration with the Kenya Industrial Research and Development Institute (KIRDI) supports research-driven innovation and industrial development. KIRDI works with businesses to improve product development, technology adoption, and sustainable industrial growth.</p>
</div>

<div className="card">
<h3>Clean Cooking Association (Kenya)</h3>
<p>Through engagement with the Clean Cooking Alliance (CCA), we support initiatives that promote clean, efficient, and sustainable cooking solutions. This partnership aligns us with global efforts to improve health, protect the environment, and expand access to modern energy solutions.</p>
</div>

</div>

</section>


{/* WHY CHOOSE US */}
<section className="why-us">
  <div className="container">
    <h2>Why Choose Transcare Agencies?</h2>

    <ul className="why-list">

      <li>
        <strong>✔ Reliable & On-Time Delivery</strong>
        <p>
          We are committed to delivering our steam stoves and services on time
          while maintaining the highest standards of quality and reliability.
        </p>
      </li>

      <li>
        <strong>✔ Professional Team</strong>
        <p>
          Our experienced and skilled team ensures every steam stove is designed,
          manufactured, and installed with precision and expertise.
        </p>
      </li>

      <li>
        <strong>✔ Competitive Pricing</strong>
        <p>
          We provide high-quality steam stove solutions at affordable and
          competitive prices to ensure value for our customers.
        </p>
      </li>

      <li>
        <strong>✔ Customer-Focused Approach</strong>
        <p>
          Customer satisfaction is our priority. We listen to our clients’ needs
          and provide tailored solutions that meet their cooking and operational
          requirements.
        </p>
      </li>

      <li>
        <strong>✔ Energy Efficient Technology</strong>
        <p>
          Our steam stoves are designed to reduce fuel consumption while
          delivering fast and efficient cooking for homes, institutions,
          and commercial kitchens.
        </p>
      </li>

    </ul>
  </div>
</section>
    {/* RIGHT IMAGE */}
    <div className="why-image">
      <img src={ceo} alt="CEO Transcare Agencies" />
      <p className="ceo-name">CEO/Founder - Transcare Agencies</p>
      <p className="ceo-quote">
        Dr. Philip Kolil
        Chief Executive Officer     
        leads Transcare Agencies with a commitment to
        innovation, quality manufacturing, and reliable steam stove
        solutions designed for homes, institutions, and commercial kitchens.
      </p>
    </div>

  </div>
</section>

      {/* COMPANY STATS */}
      <section className="stats">
        <div className="container stats-grid">

          <div>
            <h3>500+</h3>
            <p>Deliveries Completed</p>
          </div>

          <div>
            <h3>320+</h3>
            <p>Satisfied Clients</p>
          </div>

          <div>
            <h3>12+</h3>
            <p>Years Experience</p>
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Work With Us?</h2>

          <Link to="/contact" className="btn-primary">
            Contact Us Today
          </Link>

        </div>
      </section>


{/* GALLERY */}
<section className="gallery container">

<h2>Our Work Gallery</h2>

<div className="gallery-grid">

{images.map((img, i) => (
<div
className="gallery-card"
key={i}
onClick={() => {
setIndex(i);
setOpen(true);
}}
>
<img src={img.src} alt="Transcare Work"/>
</div>
))}

</div>

</section>

<Lightbox
open={open}
close={() => setOpen(false)}
slides={images}
index={index}
/>

</div>
);
}

export default Home;
