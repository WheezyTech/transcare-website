import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Products from './pages/Products';
import Terms from "./pages/Terms";
import FAQ from "./pages/FAQ";
import FloatingVideo from "./components/FloatingVideo";
import Certifications from "./pages/Certifications";
import KebsCertification from "./pages/KebsCertification";
import WIPOCertification from "./pages/WIPOCertification";
import KNCCICertification from "./pages/KNCCICertification";
import KIPICertification from "./pages/KIPICertification";
import Warranty from "./pages/Warranty";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Disclaimer from "./pages/Disclaimer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/certifications/kebs" element={<KebsCertification />} />
          <Route path="/certifications/wipo" element={<WIPOCertification />} />
          <Route path="/certifications/KNCCI" element={<KNCCICertification/>} />
          <Route path="/certifications/KIPI" element={<KIPICertification/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/warranty-policy" element={<Warranty />} />
        </Routes>
      </div>
      <Footer />
      <FloatingVideo />
    </div>
  );
};

export default App;