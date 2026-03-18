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
import truck12 from "../assets/images/truck12.jpg";
import truck13 from "../assets/images/truck13.jpg";
import truck14 from "../assets/images/truck14.jpg";
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
  { src: truck11 },
  { src: truck12 },
  { src: truck13 },
  { src: truck14 }
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


{/* MEMBERSHIP */}
<section className="services-preview container">

<h2>MEMBERSHIP</h2>

<div className="service-cards">

<div className="card">
<h3>Jua Kali Association</h3>
<p>Our membership with the Jua Kali Association connects us with Kenya’s largest informal sector network that promotes entrepreneurship and local manufacturing.</p>
</div>

<div className="card">
<h3>Kenya Chamber of Commerce and Industry</h3>
<p>Our membership with KNCCI reflects our dedication to ethical business practices and national economic growth.</p>
</div>

<div className="card">
<h3>Kenya Industrial Property Institute (KIPI)</h3>
<p>KIPI supports businesses in protecting patents, trademarks and industrial designs.</p>
</div>

<div className="card">
<h3>Clean Cooking Alliance (CCA)</h3>
<p>This partnership aligns us with global efforts promoting clean and sustainable cooking solutions.</p>
</div>

<div className="card">
<h3>Small Medium Enterprises</h3>
<p>As an SME we focus on innovation, efficiency and supporting local economic growth.</p>
</div>

<div className="card">
<h3>World Intellectual Property Organization (WIPO)</h3>
<p>Our affiliation demonstrates commitment to innovation and international intellectual property protection.</p>
</div>

<div className="card">
<h3>Kenya Industrial Research and Development Institute</h3>
<p>KIRDI supports research-driven innovation and industrial development.</p>
</div>

<div className="card">
<h3>Clean Cooking Association (Kenya)</h3>
<p>Supporting initiatives that promote efficient and sustainable cooking technologies.</p>
</div>

</div>
</section>


{/* WHY CHOOSE US */}
<section className="why-us">

<div className="container why-container">

<div className="why-text">

<h2>Why Choose Transcare Agencies?</h2>

<ul className="why-list">

<li>
<strong>✔ Reliable & On-Time Delivery</strong>
<p>We are committed to delivering our steam stoves and services on time while maintaining the highest standards of quality.</p>
</li>

<li>
<strong>✔ Professional Team</strong>
<p>Our experienced team ensures every stove is manufactured and installed with precision.</p>
</li>

<li>
<strong>✔ Competitive Pricing</strong>
<p>We provide high-quality steam stove solutions at affordable and competitive prices.</p>
</li>

<li>
<strong>✔ Customer-Focused Approach</strong>
<p>Customer satisfaction is our priority and we provide tailored solutions for every client.</p>
</li>

<li>
<strong>✔ Energy Efficient Technology</strong>
<p>Our stoves reduce fuel consumption while delivering fast and efficient cooking.</p>
</li>

</ul>

</div>


{/* CEO IMAGE */}
<div className="why-image">

<img src={ceo} alt="CEO Transcare Agencies" />

<h4>Dr. Philip Kolil</h4>

<p className="ceo-title">
Chief Executive Officer
</p>

<p className="ceo-quote">
Leads Transcare Agencies with a commitment to innovation, quality manufacturing, and reliable steam stove solutions designed for homes, institutions, and commercial kitchens.
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
