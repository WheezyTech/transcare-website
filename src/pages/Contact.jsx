import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusClass, setStatusClass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uyg3c1d", // your Service ID
        "template_syvvf0t", // your Template ID
        e.target,
        "xh6dGg_lR1vQp_S6Y" // your Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStatusMessage("Message sent successfully!");
          setStatusClass("success");
          e.target.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatusMessage("Failed to send message. Please try again.");
          setStatusClass("error");
        }
      );
  };

  return (
    <section className="contact-page container">

      {/* Page Heading */}
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Have questions about our steam stoves? Contact us today and our team will assist you.
      </p>

      <div className="contact-grid">

        {/* CONTACT INFO CARDS */}
        <div className="contact-info">
          <div className="contact-card">
            <FaPhone className="contact-icon"/>
            <h3>Call Us</h3>
            <p>+254 713 147 392</p>
          </div>

          <div className="contact-card">
            <FaEnvelope className="contact-icon"/>
            <h3>Email</h3>
            <p>philkolil02@gmail.com, transcareagencies@gmail.com</p>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon"/>
            <h3>Location</h3>
            <p>Eldoret-Pioneer, Kenya</p>
          </div>

          <div className="contact-card whatsapp">
            <FaWhatsapp className="contact-icon"/>
            <h3>WhatsApp</h3>
            <p>Chat with us instantly</p>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="phone" placeholder="Phone Number" />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>

          {/* Status Message */}
          {statusMessage && (
            <p className={`form-status ${statusClass}`}>{statusMessage}</p>
          )}
        </div>
      </div>

      {/* GOOGLE MAP */}
      <div className="map-container">
        <iframe
          title="Our Location"
          src="https://maps.google.com/maps?q=Pioneer%20Eldoret%20Kenya&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/254713147392"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>

      {/* Floating Facebook Button */}
      <a
        href="https://www.facebook.com/YourPageName"
        className="facebook-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>

      {/* Floating LinkedIn Button */}
      <a
        href="https://ke.linkedin.com/"
        className="linkedin-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>

    </section>
  );
}

export default Contact;
