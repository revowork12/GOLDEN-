import React, { useEffect, useRef, useCallback, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Experience from './components/Experience';
import FurnitureSection from './components/FurnitureSection';
import InteriorSection from './components/InteriorSection';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppSticky from './components/WhatsAppSticky';
import ImageModal from './components/ImageModal';
import SofaKerala from './pages/SofaKerala';
import LivingRoomKerala from './pages/LivingRoomKerala';
import BedroomKerala from './pages/BedroomKerala';
import FurnitureTrivandrum from './pages/FurnitureTrivandrum';
import FurnitureKollam from './pages/FurnitureKollam';
import BlogSofaDesigns from './pages/BlogSofaDesigns';
import BlogLuxuryFurniture from './pages/BlogLuxuryFurniture';
import BlogMaterials from './pages/BlogMaterials';
import BlogProcess from './pages/BlogProcess';
import BlogWardrobe from './pages/BlogWardrobe';
import BlogWhyCustom from './pages/BlogWhyCustom';

const WHATSAPP_NUMBER = '919605157123';
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Qalimoz, I'm interested in your services.");
const wa = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, wa };

function HomePage({ wa: waFn, contactRef, openModal }) {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  return (
    <main id="main" role="main" aria-label="Main content">
      <HeroSection wa={waFn} />
      <Experience />
      <FurnitureSection wa={waFn} openModal={openModal} />
      <InteriorSection wa={waFn} openModal={openModal} />
      <Gallery openModal={openModal} />
      <Process />
      <Contact wa={waFn} ref={contactRef} />
    </main>
  );
}

function App() {
  const contactRef = useRef(null);
  const [showSticky, setShowSticky] = React.useState(true);
  const [modalImage, setModalImage] = useState(null);
  const openModal = useCallback((src, alt) => setModalImage({ src, alt }), []);
  const closeModal = useCallback(() => setModalImage(null), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (contactRef.current) observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a href="#main" className="skip-link" aria-label="Skip to main content">Skip to main content</a>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://qalimoz.com/#website",
          "name": "Qalimoz Groups",
          "url": "https://qalimoz.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://qalimoz.com/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })
      }} />

      <Header wa={wa} />
      <Routes>
        <Route path="/" element={<HomePage wa={wa} contactRef={contactRef} openModal={openModal} />} />
        <Route path="/sofa-kerala" element={<SofaKerala wa={wa} />} />
        <Route path="/living-room-furniture-kerala" element={<LivingRoomKerala wa={wa} />} />
        <Route path="/bedroom-furniture-kerala" element={<BedroomKerala wa={wa} />} />
        <Route path="/furniture-shop-thiruvananthapuram" element={<FurnitureTrivandrum wa={wa} />} />
        <Route path="/furniture-shop-kollam" element={<FurnitureKollam wa={wa} />} />
        <Route path="/blog/best-sofa-designs-kerala-homes" element={<BlogSofaDesigns wa={wa} />} />
        <Route path="/blog/luxury-furniture-trends-kerala" element={<BlogLuxuryFurniture wa={wa} />} />
        <Route path="/blog/custom-furniture-materials-guide-kerala" element={<BlogMaterials wa={wa} />} />
        <Route path="/blog/custom-furniture-process-from-design-to-installation" element={<BlogProcess wa={wa} />} />
        <Route path="/blog/custom-wardrobe-design-ideas-kerala" element={<BlogWardrobe wa={wa} />} />
        <Route path="/blog/why-custom-furniture-best-choice-kerala-home" element={<BlogWhyCustom wa={wa} />} />
      </Routes>
      <Footer />
      <WhatsAppSticky wa={wa} hidden={!showSticky} />
      {modalImage && (
        <ImageModal src={modalImage.src} alt={modalImage.alt} onClose={closeModal} />
      )}
    </>
  );
}

export default App;