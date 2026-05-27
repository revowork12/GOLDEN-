import React, { useEffect, useRef, useCallback, useState } from 'react';
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

const WHATSAPP_NUMBER = '919605157123';
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Qalimoz, I'm interested in your services.");
const wa = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, wa };

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

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
      <a href="#main" className="skip-link" aria-label="Skip to main content">Skip to main content</a>

      {/* JSON-LD for website (injected in DOM for AI crawlers that miss index.html) */}
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
      <main id="main" role="main" aria-label="Main content">
        <HeroSection wa={wa} />
        <Experience />
        <FurnitureSection wa={wa} openModal={openModal} />
        <InteriorSection wa={wa} openModal={openModal} />
        <Gallery openModal={openModal} />
        <Process />
        <Contact wa={wa} ref={contactRef} />
      </main>
      <Footer />
      <WhatsAppSticky wa={wa} hidden={!showSticky} />
      {modalImage && (
        <ImageModal src={modalImage.src} alt={modalImage.alt} onClose={closeModal} />
      )}
    </>
  );
}

export default App;
