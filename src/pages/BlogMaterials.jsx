import React, { useEffect } from 'react';

const HERO_BG = 'linear-gradient(135deg, rgba(30,29,25,0.85) 0%, rgba(42,40,36,0.85) 100%), url(/frames/end-landscape.webp) center/cover no-repeat';

export default function BlogMaterials({ wa }) {
  useEffect(() => { document.title = 'Custom Furniture Materials Guide Kerala | Best Wood & Fabrics | Qalimoz'; }, []);

  return (
    <main id="main" role="main" aria-label="Custom furniture materials guide Kerala" className="page-content">
      <section className="page-hero" style={{ background: HERO_BG, padding: '120px 24px 60px' }}>
        <div className="container">
          <p style={{ color: '#C5963C', fontSize: 14, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>Blog</p>
          <h1>Custom Furniture Materials: A Complete Guide for Kerala Homes</h1>
          <p className="page-subtitle">Understanding the best wood, fabric, and finish materials for custom furniture designed to last in Kerala's climate.</p>
        </div>
      </section>

      <article className="page-section">
        <div className="container" style={{ maxWidth: 768 }}>
          <h2>Choosing the Right Materials for Kerala's Climate</h2>
          <p>The success of custom furniture starts with material selection. Kerala's tropical climate — with high humidity, monsoon rains, and warm temperatures — demands materials that resist moisture, termites, and warping. Here's your complete guide to choosing the right materials for custom furniture in Kerala.</p>

          <h2>Best Wood Types for Custom Furniture in Kerala</h2>

          <h3>Teak Wood</h3>
          <p>Teak is the gold standard for custom furniture in Kerala. Naturally termite-resistant, high in oil content to repel moisture, and exceptionally durable. Teak ages beautifully and can last generations with proper care. Ideal for custom bed frames, dining tables, and outdoor furniture.</p>

          <h3>Rosewood (Sheesham)</h3>
          <p>Rosewood offers rich colour variation and exceptional strength. It's slightly more affordable than teak while still offering good durability. Rosewood is excellent for custom wardrobes, dressers, and showcase cabinets where aesthetics matter.</p>

          <h3>Mango Wood</h3>
          <p>Mango wood is an eco-friendly option gaining popularity in Kerala. It's hard, durable, and has unique grain patterns. Mango wood is perfect for custom coffee tables, TV units, and accent furniture.</p>

          <h3>Rubber Wood</h3>
          <p>Rubber wood is a sustainable, cost-effective option for custom furniture. It's uniform in texture, takes finishes well, and is suitable for custom bedside tables, shelving, and interior framework.</p>

          <h2>Fabric Choices for Custom Sofas</h2>

          <h3>Linen Blends</h3>
          <p>Breathable and lightweight, linen blends are ideal for Kerala's warm climate. They feel cool to touch and resist pilling. Best for custom sofas in well-ventilated living rooms.</p>

          <h3>Performance Velvet</h3>
          <p>Modern performance velvet is stain-resistant, fade-resistant, and easy to clean. It adds a touch of luxury to custom sofas while being practical for family homes.</p>

          <h3>Cotton Canvas</h3>
          <p>Durable, washable, and affordable. Cotton canvas is a practical choice for custom sofas in homes with children or pets.</p>

          <h3>Leather</h3>
          <p>Full-grain leather develops a beautiful patina over time. For Kerala's climate, treated leather with proper ventilation is recommended to prevent moisture issues.</p>

          <h2>Finishes That Protect</h2>
          <ul className="page-list">
            <li><strong>PU (Polyurethane) Finish</strong> — seals wood against moisture, UV-resistant, durable</li>
            <li><strong>Melamine Finish</strong> — scratch-resistant, ideal for custom wardrobes and kitchen cabinets</li>
            <li><strong>Lacquer Finish</strong> — high-gloss option for modern custom furniture designs</li>
            <li><strong>Oil Finish</strong> — natural look, penetrates wood, easy to maintain and repair</li>
          </ul>

          <p style={{ textAlign: 'center', marginTop: 48, fontStyle: 'italic', color: '#6B6B6B' }}>Need help choosing materials for your custom furniture? <a href={wa("Hi Qalimoz, I need help choosing materials for custom furniture.")} target="_blank" rel="noopener noreferrer" style={{ color: '#C5963C', textDecoration: 'underline' }}>Ask our experts on WhatsApp</a></p>
        </div>
      </article>

      <section className="home-button-section">
        <a href="/" className="home-button">⬅ Back to Home</a>
      </section>
    </main>
  );
}
