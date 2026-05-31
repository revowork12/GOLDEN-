import React, { useEffect } from 'react';

const HERO_BG = 'linear-gradient(135deg, rgba(30,29,25,0.85) 0%, rgba(42,40,36,0.85) 100%), url(/frames/end-landscape.webp) center/cover no-repeat';

export default function LivingRoomKerala({ wa }) {
  useEffect(() => { document.title = 'Custom Living Room Furniture Kerala | Custom TV Units, Sofas & More | Qalimoz'; }, []);

  return (
    <main id="main" role="main" aria-label="Custom living room furniture Kerala" className="page-content">
      <section className="page-hero" style={{ background: HERO_BG }}>
        <div className="container">
          <h1>Custom Living Room Furniture in Kerala</h1>
          <p className="page-subtitle">Complete your living space with custom designed sofas, TV units, coffee tables, and showcase cabinets. Every piece custom built for Kerala homes.</p>
          <a href={wa("Hi Qalimoz, I'm interested in custom living room furniture.")} className="page-cta" target="_blank" rel="noopener noreferrer">Get Custom Quote on WhatsApp</a>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <h2>Our Custom Living Room Collection</h2>
          <div className="page-grid">
            <div className="page-card">
              <h3>Custom Sofa Sets</h3>
              <p>Custom sofas in every style — L-shape, three-seater, recliner, and corner sets. Custom fabrics and premium leather options. Built to your dimensions.</p>
              <a href="/sofa-kerala" className="card-cta">View Custom Sofas →</a>
            </div>
            <div className="page-card">
              <h3>Custom TV Units</h3>
              <p>Custom wall-mounted and freestanding TV units with cable management. Designed and built to fit your space exactly.</p>
              <a href={wa("Hi Qalimoz, I'm interested in a custom TV unit.")} target="_blank" rel="noopener noreferrer" className="card-cta">Enquire Now →</a>
            </div>
            <div className="page-card">
              <h3>Custom Coffee Tables</h3>
              <p>Custom wood, glass, and marble-top coffee tables. Round, rectangular, and lift-top designs — custom sized for your room.</p>
              <a href={wa("Hi Qalimoz, I'm interested in a custom coffee table.")} target="_blank" rel="noopener noreferrer" className="card-cta">Enquire Now →</a>
            </div>
            <div className="page-card">
              <h3>Custom Showcase Cabinets</h3>
              <p>Display your collectibles in custom built cabinets. Glass-front and open-shelf designs with custom LED lighting options.</p>
              <a href={wa("Hi Qalimoz, I'm interested in a custom showcase cabinet.")} target="_blank" rel="noopener noreferrer" className="card-cta">Enquire Now →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" style={{ background: '#F9F6DB' }}>
        <div className="container">
          <h2>Custom Living Room Design Trends in Kerala</h2>
          <p>Contemporary Kerala homes are embracing open-plan living with custom designed furniture that blends modern minimalism with traditional warmth. Popular custom trends include:</p>
          <ul className="page-list">
            <li><strong>Custom neutral palettes</strong> — bespoke sofas and cabinets in beige, warm grey, and cream with gold accents</li>
            <li><strong>Custom multi-functional furniture</strong> — storage ottomans, sofa-cum-beds, nesting tables — all custom made</li>
            <li><strong>Custom indoor-outdoor flow</strong> — furniture designed to bridge the living room and veranda</li>
            <li><strong>Custom sustainable materials</strong> — reclaimed wood, natural fibres, eco-friendly finishes</li>
          </ul>
        </div>
      </section>

      <section className="page-section page-cta-section" style={{ background: '#1E1D19', color: '#fff' }}>
        <div className="container">
          <h2 style={{ color: '#C5963C' }}>Design Your Custom Living Room</h2>
          <p>Tell us your vision and budget. We'll create a custom 3D design and build furniture that fits your home perfectly.</p>
          <a href={wa("Hi Qalimoz, I'd like to design my custom living room.")} className="page-cta" target="_blank" rel="noopener noreferrer" style={{ borderColor: '#C5963C', color: '#C5963C' }}>Start Your Custom Design</a>
        </div>
      </section>

      <section className="home-button-section">
        <a href="/" className="home-button">⬅ Back to Home</a>
      </section>
    </main>
  );
}
