import React, { useEffect } from 'react';

const HERO_BG = 'linear-gradient(135deg, rgba(30,29,25,0.85) 0%, rgba(42,40,36,0.85) 100%), url(/frames/end-landscape.webp) center/cover no-repeat';

export default function FurnitureKollam({ wa }) {
  useEffect(() => { document.title = 'Custom Furniture Shop Kollam | Custom Made Furniture Kollam | Qalimoz Groups'; }, []);

  return (
    <main id="main" role="main" aria-label="Custom furniture shop Kollam" className="page-content">
      <section className="page-hero" style={{ background: HERO_BG }}>
        <div className="container">
          <h1>Custom Furniture Shop in Kollam</h1>
          <p className="page-subtitle">Premium custom furniture delivery and interior design services across Kollam district. Custom sofas, beds, wardrobes & more — built to your specifications.</p>
          <a href={wa("Hi Qalimoz, I'm from Kollam and interested in custom furniture.")} className="page-cta" target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <h2>Custom Furniture Services in Kollam</h2>
          <p>We bring Trivandrum-quality custom craftsmanship to Kollam homes. Whether you need a custom sofa set, custom bedroom furniture, or complete home interiors, our team delivers custom built furniture to every part of Kollam district.</p>
          <ul className="page-list">
            <li><strong>Free custom home visits</strong> — our designers travel to Kollam for measurements</li>
            <li><strong>Custom designs</strong> — built to match Kollam home architecture and your taste</li>
            <li><strong>Custom delivery & installation</strong> — throughout Kollam district</li>
            <li><strong>Custom craftsmanship</strong> — premium quality at Kollam-friendly rates</li>
          </ul>
        </div>
      </section>

      <section className="page-section" style={{ background: '#F9F6DB' }}>
        <div className="container">
          <h2>Popular Custom Furniture in Kollam</h2>
          <div className="page-grid">
            <div className="page-card">
              <h3>Custom Sofa Sets</h3>
              <p>Custom L-shaped, three-seater, and recliner sofas for Kollam living rooms.</p>
              <a href="/sofa-kerala" className="card-cta">View Custom Options →</a>
            </div>
            <div className="page-card">
              <h3>Custom Bedroom Sets</h3>
              <p>Custom queen and king bed frames with matching wardrobes and dressers.</p>
              <a href="/bedroom-furniture-kerala" className="card-cta">View Custom Options →</a>
            </div>
            <div className="page-card">
              <h3>Custom Living Room</h3>
              <p>Complete custom living room furniture including TV units, coffee tables, and cabinets.</p>
              <a href="/living-room-furniture-kerala" className="card-cta">View Custom Options →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-cta-section" style={{ background: '#1E1D19', color: '#fff' }}>
        <div className="container">
          <h2 style={{ color: '#C5963C' }}>We Deliver Custom Furniture to Kollam</h2>
          <p>Get premium custom furniture delivered to your home in Kollam. Free design consultation and measurement service.</p>
          <a href={wa("Hi Qalimoz, I'd like a free custom consultation in Kollam.")} className="page-cta" target="_blank" rel="noopener noreferrer" style={{ borderColor: '#C5963C', color: '#C5963C' }}>Book Free Custom Consultation</a>
        </div>
      </section>

      <section className="home-button-section">
        <a href="/" className="home-button">⬅ Back to Home</a>
      </section>
    </main>
  );
}
