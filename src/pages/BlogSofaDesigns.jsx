import React, { useEffect } from 'react';

const HERO_BG = 'linear-gradient(135deg, rgba(30,29,25,0.85) 0%, rgba(42,40,36,0.85) 100%), url(/frames/end-landscape.webp) center/cover no-repeat';

export default function BlogSofaDesigns({ wa }) {
  useEffect(() => { document.title = 'Best Custom Sofa Designs for Kerala Homes | Qalimoz Groups'; }, []);

  return (
    <main id="main" role="main" aria-label="Best custom sofa designs Kerala blog" className="page-content">
      <section className="page-hero" style={{ background: HERO_BG, padding: '120px 24px 60px' }}>
        <div className="container">
          <p style={{ color: '#C5963C', fontSize: 14, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>Blog</p>
          <h1>Best Custom Sofa Designs for Kerala Homes</h1>
          <p className="page-subtitle">A guide to choosing and designing the perfect custom sofa for your Trivandrum, Kollam, Karunagappally, or Kayamkulam home.</p>
        </div>
      </section>

      <article className="page-section">
        <div className="container" style={{ maxWidth: 768 }}>
          <h2>Why Choose a Custom Sofa for Kerala's Climate</h2>
          <p>Kerala's tropical climate presents unique challenges for furniture. High humidity, monsoon rains, and warm temperatures year-round mean your sofa needs to be custom built differently than mass-produced furniture designed for cooler, drier regions. A custom sofa gives you control over every material and dimension.</p>

          <h2>5 Custom Sofa Styles Popular in Kerala Homes</h2>

          <h3>1. Custom L-Shaped Sectional</h3>
          <p>Ideal for apartment living rooms in Trivandrum and Kochi, a custom L-shaped sofa maximizes corner space while providing ample seating. Add custom storage underneath for blankets and cushions.</p>

          <h3>2. Custom Three-Seater with Recliners</h3>
          <p>Perfect for family homes in Kollam and Karunagappally. A custom three-seater with built-in recliners gives each family member their own comfort zone — custom positioned for your space.</p>

          <h3>3. Custom Chesterfield</h3>
          <p>For traditional Kerala homes with high ceilings and classic architecture, a custom Chesterfield sofa adds timeless elegance. Choose performance fabric custom selected to withstand humidity.</p>

          <h3>4. Custom Minimalist Contemporary</h3>
          <p>Modern apartments in Kayamkulam and new Trivandrum developments call for clean lines and neutral tones. A custom low-profile sofa in beige or warm grey keeps the space feeling open.</p>

          <h3>5. Custom Convertible Sofa Cum Bed</h3>
          <p>Practical for Kerala's guest-loving culture. A custom sofa that converts into a bed is perfect for homes that frequently host family visitors — custom sized for your room.</p>

          <h2>Custom Material Guide for Kerala Sofas</h2>
          <ul className="page-list">
            <li><strong>Custom linen blends</strong> — breathable, comfortable in warm weather</li>
            <li><strong>Custom performance velvet</strong> — stain-resistant, easy to clean</li>
            <li><strong>Custom leather</strong> — durable with proper ventilation treatment</li>
            <li><strong>Custom cotton canvas</strong> — affordable and washable</li>
          </ul>

          <p style={{ textAlign: 'center', marginTop: 48, fontStyle: 'italic', color: '#6B6B6B' }}>Looking for a custom sofa? <a href={wa("Hi Qalimoz, I'd like a custom sofa.")} target="_blank" rel="noopener noreferrer" style={{ color: '#C5963C', textDecoration: 'underline' }}>Get a free custom quote on WhatsApp</a></p>
        </div>
      </article>

      <section className="home-button-section">
        <a href="/" className="home-button">⬅ Back to Home</a>
      </section>
    </main>
  );
}
