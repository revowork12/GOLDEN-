import React, { useEffect } from 'react';

const HERO_BG = 'linear-gradient(135deg, rgba(30,29,25,0.85) 0%, rgba(42,40,36,0.85) 100%), url(/frames/end-landscape.webp) center/cover no-repeat';

export default function BlogWhyCustom({ wa }) {
  useEffect(() => { document.title = 'Why Choose Custom Furniture Kerala | Benefits of Bespoke Furniture | Qalimoz'; }, []);

  return (
    <main id="main" role="main" aria-label="Why choose custom furniture Kerala" className="page-content">
      <section className="page-hero" style={{ background: HERO_BG, padding: '120px 24px 60px' }}>
        <div className="container">
          <p style={{ color: '#C5963C', fontSize: 14, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>Blog</p>
          <h1>Why Custom Furniture is the Best Choice for Your Kerala Home</h1>
          <p className="page-subtitle">Discover the advantages of choosing custom made furniture over ready-made options for homes in Trivandrum, Kollam, and across Kerala.</p>
        </div>
      </section>

      <article className="page-section">
        <div className="container" style={{ maxWidth: 768 }}>
          <h2>Custom vs Ready-Made: The Kerala Advantage</h2>
          <p>When furnishing a home in Kerala, the choice between custom furniture and ready-made options is significant. While ready-made furniture is convenient, custom furniture offers advantages that are particularly valuable for Kerala homes. Here's why more homeowners are choosing custom.</p>

          <h2>1. Perfect Fit for Your Space</h2>
          <p>Kerala homes come in diverse layouts — from heritage houses with high ceilings to modern apartments with compact rooms. Custom furniture is built to your exact dimensions, ensuring it fits perfectly. No gaps, no wasted space, no compromises.</p>

          <h2>2. Built for Kerala's Climate</h2>
          <p>Ready-made furniture is typically designed for temperate climates. Custom furniture from Qalimoz is built with Kerala-specific considerations — termite-resistant wood, humidity-proof finishes, anti-rust hardware, and ventilated designs that prevent moisture damage.</p>

          <h2>3. Your Style, Your Choice</h2>
          <p>Custom furniture gives you complete control over design, materials, colours, and finishes. Whether you want a contemporary minimalist look for your Trivandrum apartment or a classic traditional style for your Kollam home, custom furniture brings your vision to life.</p>

          <h2>4. Superior Quality & Craftsmanship</h2>
          <p>Mass-produced furniture is made quickly with cost-cutting materials. Custom furniture is handcrafted by skilled artisans who take pride in their work. The result is furniture that looks better, feels better, and lasts longer.</p>

          <h2>5. Long-term Value</h2>
          <p>While custom furniture requires an initial investment, it offers better long-term value. Custom pieces are built to last decades, can be repaired and refinished, and can be designed to adapt to your changing needs. Ready-made furniture often needs replacement every few years.</p>

          <h2>6. Sustainable Choice</h2>
          <p>Custom furniture is inherently more sustainable. You choose the materials, there's less waste in production, and the pieces last longer — reducing the environmental impact of frequent replacements.</p>

          <p style={{ textAlign: 'center', marginTop: 48, fontStyle: 'italic', color: '#6B6B6B' }}>Ready to experience the benefits of custom furniture? <a href={wa("Hi Qalimoz, I'd like to discuss custom furniture for my home.")} target="_blank" rel="noopener noreferrer" style={{ color: '#C5963C', textDecoration: 'underline' }}>Talk to us on WhatsApp</a></p>
        </div>
      </article>

      <section className="home-button-section">
        <a href="/" className="home-button">⬅ Back to Home</a>
      </section>
    </main>
  );
}
