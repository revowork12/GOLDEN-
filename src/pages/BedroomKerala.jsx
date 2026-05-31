import React, { useEffect } from 'react';

const HERO_BG = 'linear-gradient(135deg, rgba(30,29,25,0.85) 0%, rgba(42,40,36,0.85) 100%), url(/frames/end-landscape.webp) center/cover no-repeat';

export default function BedroomKerala({ wa }) {
  useEffect(() => { document.title = 'Custom Bedroom Furniture Kerala | Custom Beds, Wardrobes & Dressers | Qalimoz'; }, []);

  return (
    <main id="main" role="main" aria-label="Custom bedroom furniture Kerala" className="page-content">
      <section className="page-hero" style={{ background: HERO_BG }}>
        <div className="container">
          <h1>Custom Bedroom Furniture in Kerala</h1>
          <p className="page-subtitle">Custom bed frames, wardrobes, dressers, and bedside tables crafted to your specifications. Every piece custom built for Kerala bedrooms with humidity-resistant materials.</p>
          <a href={wa("Hi Qalimoz, I'm interested in custom bedroom furniture.")} className="page-cta" target="_blank" rel="noopener noreferrer">Get Custom Quote on WhatsApp</a>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <h2>Our Custom Bedroom Collection</h2>
          <div className="page-grid">
            <div className="page-card">
              <h3>Custom Bed Frames</h3>
              <p>Queen, king, and custom-sized bed frames in solid wood. Custom storage beds with hydraulic lift options. Built to your preferred height and style.</p>
              <a href={wa("Hi Qalimoz, I'm interested in a custom bed frame.")} target="_blank" rel="noopener noreferrer" className="card-cta">Enquire Now →</a>
            </div>
            <div className="page-card">
              <h3>Custom Wardrobes</h3>
              <p>Custom modular and fitted wardrobes with optimized storage. Sliding and hinged door options, custom internal layout, and your choice of finish.</p>
              <a href={wa("Hi Qalimoz, I'm interested in a custom wardrobe.")} target="_blank" rel="noopener noreferrer" className="card-cta">Enquire Now →</a>
            </div>
            <div className="page-card">
              <h3>Custom Dressers & Vanities</h3>
              <p>Elegant custom dressing tables with mirrors and storage. Designed to match your bedroom set perfectly.</p>
              <a href={wa("Hi Qalimoz, I'm interested in a custom dresser.")} target="_blank" rel="noopener noreferrer" className="card-cta">Enquire Now →</a>
            </div>
            <div className="page-card">
              <h3>Custom Bedside Tables</h3>
              <p>Compact custom nightstands with drawer and shelf storage. Matching sets available in your choice of wood and finish.</p>
              <a href={wa("Hi Qalimoz, I'm interested in custom bedside tables.")} target="_blank" rel="noopener noreferrer" className="card-cta">Enquire Now →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" style={{ background: '#F9F6DB' }}>
        <div className="container">
          <h2>Custom Protection for Kerala's Climate</h2>
          <p>Kerala's humidity can damage standard bedroom furniture. Our custom built bedroom furniture is designed to last:</p>
          <ul className="page-list">
            <li><strong>Custom PU finish coating</strong> — seals wood against moisture absorption</li>
            <li><strong>Termite treatment</strong> — all custom wood is pre-treated before crafting</li>
            <li><strong>Stainless steel hardware</strong> — no rusting on custom drawer slides or hinges</li>
            <li><strong>Ventilated wardrobe designs</strong> — custom ventilation prevents musty odours</li>
          </ul>
        </div>
      </section>

      <section className="page-section page-cta-section" style={{ background: '#1E1D19', color: '#fff' }}>
        <div className="container">
          <h2 style={{ color: '#C5963C' }}>Get a Free Custom Bedroom Consultation</h2>
          <p>We visit your home to take custom measurements and discuss designs — at no charge.</p>
          <a href={wa("Hi Qalimoz, I'd like a custom bedroom consultation.")} className="page-cta" target="_blank" rel="noopener noreferrer" style={{ borderColor: '#C5963C', color: '#C5963C' }}>Book Free Custom Consultation</a>
        </div>
      </section>

      <section className="home-button-section">
        <a href="/" className="home-button">⬅ Back to Home</a>
      </section>
    </main>
  );
}
