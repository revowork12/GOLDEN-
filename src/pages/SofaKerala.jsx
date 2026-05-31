import React, { useEffect } from 'react';

const HERO_BG = 'linear-gradient(135deg, rgba(30,29,25,0.85) 0%, rgba(42,40,36,0.85) 100%), url(/frames/end-landscape.webp) center/cover no-repeat';

export default function SofaKerala({ wa }) {
  useEffect(() => { document.title = 'Premium Custom Sofa Sets in Kerala | Buy Custom Sofas Online | Qalimoz Groups'; }, []);

  return (
    <main id="main" role="main" aria-label="Custom sofa sets Kerala" className="page-content">
      <section className="page-hero" style={{ background: HERO_BG }}>
        <div className="container">
          <h1>Custom Sofa Sets in Kerala</h1>
          <p className="page-subtitle">Custom-crafted sofas designed for Kerala's climate and your lifestyle. Every sofa is custom built to your dimensions, fabric, and style.</p>
          <a href={wa("Hi Qalimoz, I'm interested in a custom sofa.")} className="page-cta" target="_blank" rel="noopener noreferrer">Get Free Quote on WhatsApp</a>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <h2>Why Choose Custom Sofas for Kerala Homes</h2>
          <p>Kerala's humid climate and monsoon seasons demand furniture that resists moisture, mould, and warping. Our custom made sofas are built to order with your specific needs in mind:</p>
          <ul className="page-list">
            <li><strong>Custom dimensions</strong> — built to fit your living room perfectly, no matter the size</li>
            <li><strong>Custom fabric choice</strong> — pick from 50+ fabrics, colours, and textures</li>
            <li><strong>Custom comfort level</strong> — choose your foam density, cushion fill, and seat depth</li>
            <li><strong>Kiln-dried hardwood frames</strong> — termite-proof and humidity-resistant</li>
            <li><strong>Anti-rust springs</strong> — stainless steel reinforced suspensions</li>
          </ul>
        </div>
      </section>

      <section className="page-section" style={{ background: '#F9F6DB' }}>
        <div className="container">
          <h2>Custom Sofa Types We Craft</h2>
          <div className="page-grid">
            <div className="page-card">
              <h3>Custom L-Shaped Sofas</h3>
              <p>Perfect for Kochi and Trivandrum apartments. Space-saving corner designs with custom storage options. Custom built to your exact layout and dimensions.</p>
              <a href={wa("Hi Qalimoz, I'm interested in a custom L-shaped sofa.")} target="_blank" rel="noopener noreferrer" className="card-cta">Enquire Now →</a>
            </div>
            <div className="page-card">
              <h3>Custom Three-Seater Sofas</h3>
              <p>Classic designs for Kollam and Karunagappally living rooms. Choose from modern, traditional, or contemporary styles — all custom made to your preferences.</p>
              <a href={wa("Hi Qalimoz, I'm interested in a custom three-seater sofa.")} target="_blank" rel="noopener noreferrer" className="card-cta">Enquire Now →</a>
            </div>
            <div className="page-card">
              <h3>Custom Recliner Sofas</h3>
              <p>Electric and manual recliners for Kayamkulam homes. Custom upholstery and premium comfort mechanisms tailored to your needs.</p>
              <a href={wa("Hi Qalimoz, I'm interested in a custom recliner sofa.")} target="_blank" rel="noopener noreferrer" className="card-cta">Enquire Now →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <h2>Custom Sofa Materials Guide</h2>
          <ul className="page-list">
            <li><strong>Premium Fabric</strong> — wide range of colours and textures, breathable and durable</li>
            <li><strong>Performance Velvet</strong> — stain-resistant, easy to clean, perfect for families</li>
            <li><strong>Genuine Leather</strong> — timeless elegance with proper ventilation treatment</li>
            <li><strong>Linen Blends</strong> — lightweight and breathable for Kerala's warm climate</li>
          </ul>
        </div>
      </section>

      <section className="page-section page-cta-section" style={{ background: '#1E1D19', color: '#fff' }}>
        <div className="container">
          <h2 style={{ color: '#C5963C' }}>Get Your Custom Sofa Quote</h2>
          <p>Tell us your dimensions, fabric preference, and style. We'll create a custom sofa designed just for you.</p>
          <a href={wa("Hi Qalimoz, I'd like a free consultation for a custom sofa.")} className="page-cta" target="_blank" rel="noopener noreferrer" style={{ borderColor: '#C5963C', color: '#C5963C' }}>Book Free Custom Consultation</a>
        </div>
      </section>

      <section className="home-button-section">
        <a href="/" className="home-button">⬅ Back to Home</a>
      </section>
    </main>
  );
}
