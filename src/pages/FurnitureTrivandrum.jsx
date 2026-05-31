import React, { useEffect } from 'react';

const HERO_BG = 'linear-gradient(135deg, rgba(30,29,25,0.85) 0%, rgba(42,40,36,0.85) 100%), url(/frames/end-landscape.webp) center/cover no-repeat';

export default function FurnitureTrivandrum({ wa }) {
  useEffect(() => { document.title = 'Custom Furniture Shop Trivandrum | Custom Made Furniture Thiruvananthapuram | Qalimoz'; }, []);

  return (
    <main id="main" role="main" aria-label="Custom furniture shop Trivandrum" className="page-content">
      <section className="page-hero" style={{ background: HERO_BG }}>
        <div className="container">
          <h1>Custom Furniture Shop in Trivandrum</h1>
          <p className="page-subtitle">Qalimoz Groups delivers premium custom furniture and interior design across Thiruvananthapuram. Based in Kollam, we serve Trivandrum homes with custom crafted furniture since 2019.</p>
          <a href={wa("Hi Qalimoz, I'm from Trivandrum and interested in custom furniture.")} className="page-cta" target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <h2>Why Trivandrum Chooses Qalimoz for Custom Furniture</h2>
          <p>We understand the unique needs of Kerala's capital city. From heritage homes to modern apartments in Kazhakoottam, we've designed and built custom furniture for homes across every Trivandrum neighbourhood — delivered from our Kollam workshop.</p>
          <ul className="page-list">
            <li><strong>Custom craftsmanship</strong> — designed and built by Kollam-based artisans</li>
            <li><strong>Free custom measurements</strong> — we visit your Trivandrum home</li>
            <li><strong>Custom delivery</strong> — across the city from Kowdiar to Pappanamcode</li>
            <li><strong>Custom design consultation</strong> — see samples and materials at our studio</li>
          </ul>
        </div>
      </section>

      <section className="page-section" style={{ background: '#F9F6DB' }}>
        <div className="container">
          <h2>Areas We Serve in Trivandrum</h2>
          <div className="page-grid">
            {['Kowdiar', 'Kazhakoottam', 'Vellayambalam', 'Sasthamangalam', 'Pattom', 'Nanthancode', 'Thampanoor', 'Pappanamcode', 'Nemom', 'Keston Road'].map(area => (
              <div key={area} className="page-card" style={{ padding: '16px 20px' }}>
                <p style={{ fontWeight: 600, margin: 0, fontFamily: 'var(--font-display)' }}>{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-cta-section" style={{ background: '#1E1D19', color: '#fff' }}>
        <div className="container">
          <h2 style={{ color: '#C5963C' }}>Visit Our Trivandrum Custom Studio</h2>
          <p>Book an appointment to visit our workshop and discuss your custom furniture needs. Free design consultation included.</p>
          <a href={wa("Hi Qalimoz, I'd like to visit your Trivandrum studio for custom furniture.")} className="page-cta" target="_blank" rel="noopener noreferrer" style={{ borderColor: '#C5963C', color: '#C5963C' }}>Book Custom Studio Visit</a>
        </div>
      </section>

      <section className="home-button-section">
        <a href="/" className="home-button">⬅ Back to Home</a>
      </section>
    </main>
  );
}
