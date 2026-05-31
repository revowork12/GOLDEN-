import React, { useEffect } from 'react';

const HERO_BG = 'linear-gradient(135deg, rgba(30,29,25,0.85) 0%, rgba(42,40,36,0.85) 100%), url(/frames/end-landscape.webp) center/cover no-repeat';

export default function BlogWardrobe({ wa }) {
  useEffect(() => { document.title = 'Custom Wardrobe Design Ideas Kerala | Modular Wardrobes | Qalimoz'; }, []);

  return (
    <main id="main" role="main" aria-label="Custom wardrobe ideas Kerala" className="page-content">
      <section className="page-hero" style={{ background: HERO_BG, padding: '120px 24px 60px' }}>
        <div className="container">
          <p style={{ color: '#C5963C', fontSize: 14, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>Blog</p>
          <h1>Custom Wardrobe Design Ideas for Kerala Bedrooms</h1>
          <p className="page-subtitle">Inspiration and practical tips for designing custom wardrobes that maximize space and suit Kerala homes.</p>
        </div>
      </section>

      <article className="page-section">
        <div className="container" style={{ maxWidth: 768 }}>
          <h2>Why Choose a Custom Wardrobe?</h2>
          <p>A custom wardrobe is one of the most impactful investments you can make for your bedroom. Unlike ready-made options, a custom wardrobe is designed around your specific storage needs, room dimensions, and style preferences. For Kerala homes, custom wardrobes also address climate-specific challenges like humidity and ventilation.</p>

          <h2>Custom Wardrobe Styles for Kerala Homes</h2>

          <h3>Sliding Door Wardrobes</h3>
          <p>Ideal for smaller bedrooms in Trivandrum and Kollam apartments. Sliding doors save space and offer a modern, clean look. Choose from custom mirrored panels, wood finishes, or laminate designs.</p>

          <h3>Walk-in Wardrobes</h3>
          <p>For larger homes in Karunagappally and Kayamkulam, a custom walk-in wardrobe is the ultimate luxury. Custom shelving, hanging sections, drawer units, and lighting create a dressing room experience.</p>

          <h3>Fitted Wardrobes</h3>
          <p>Built floor-to-ceiling and wall-to-wall, fitted wardrobes maximize every inch of space. Custom internal layouts with adjustable shelving ensure everything has its place.</p>

          <h3>Corner Wardrobes</h3>
          <p>Custom corner wardrobes make use of often-wasted space. With custom angled shelving and pull-out racks, they provide surprisingly generous storage.</p>

          <h2>Custom Wardrobe Features for Kerala</h2>
          <ul className="page-list">
            <li><strong>Ventilated sections</strong> — prevent musty odours in Kerala's humidity</li>
            <li><strong>Termite-proof wood treatment</strong> — essential for Kerala's climate</li>
            <li><strong>Stainless steel hardware</strong> — no rust on handles, rails, or hinges</li>
            <li><strong>Custom drawer dividers</strong> — organized storage for accessories and jewellery</li>
            <li><strong>LED lighting</strong> — automatic lights that turn on when doors open</li>
          </ul>

          <h2>Custom Wardrobe Material Options</h2>
          <p>For custom wardrobes in Kerala, we recommend plywood or engineered wood with PU finish for the structure, and solid wood or laminate for doors. These materials resist humidity while offering design flexibility.</p>

          <p style={{ textAlign: 'center', marginTop: 48, fontStyle: 'italic', color: '#6B6B6B' }}>Ready to design your custom wardrobe? <a href={wa("Hi Qalimoz, I'd like a custom wardrobe.")} target="_blank" rel="noopener noreferrer" style={{ color: '#C5963C', textDecoration: 'underline' }}>Start your design on WhatsApp</a></p>
        </div>
      </article>

      <section className="home-button-section">
        <a href="/" className="home-button">⬅ Back to Home</a>
      </section>
    </main>
  );
}
