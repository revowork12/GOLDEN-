import React, { useEffect } from 'react';

const HERO_BG = 'linear-gradient(135deg, rgba(30,29,25,0.85) 0%, rgba(42,40,36,0.85) 100%), url(/frames/end-landscape.webp) center/cover no-repeat';

export default function BlogProcess({ wa }) {
  useEffect(() => { document.title = 'Custom Furniture Process Kerala | From Design to Installation | Qalimoz'; }, []);

  return (
    <main id="main" role="main" aria-label="Custom furniture process Kerala" className="page-content">
      <section className="page-hero" style={{ background: HERO_BG, padding: '120px 24px 60px' }}>
        <div className="container">
          <p style={{ color: '#C5963C', fontSize: 14, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>Blog</p>
          <h1>The Process of Custom Furniture: From Design to Installation</h1>
          <p className="page-subtitle">A step-by-step look at how Qalimoz Groups creates custom furniture for Kerala homes — from your first idea to final placement.</p>
        </div>
      </section>

      <article className="page-section">
        <div className="container" style={{ maxWidth: 768 }}>
          <h2>How Custom Furniture is Made</h2>
          <p>Many homeowners wonder what goes into creating a piece of custom furniture. At Qalimoz Groups, we follow a proven process that ensures every piece is crafted exactly to your specifications. Here's how it works.</p>

          <h2>Step 1: Initial Consultation</h2>
          <p>We begin with a conversation about your vision, needs, and space. Whether you visit our Trivandrum studio or request a home visit, we discuss style preferences, functional requirements, and material choices. This is where your custom furniture idea takes shape.</p>

          <h2>Step 2: Space Measurement & Assessment</h2>
          <p>Our team visits your home to take precise measurements of the space where the custom furniture will be placed. We assess lighting, existing decor, traffic flow, and architectural features to ensure the design integrates seamlessly.</p>

          <h2>Step 3: Design & 3D Visualization</h2>
          <p>We create detailed designs with 3D visualizations so you can see exactly how your custom furniture will look before we build it. This is the time to make adjustments — we revise until you're completely satisfied.</p>

          <h2>Step 4: Material Selection</h2>
          <p>You choose the wood, fabric, finish, and hardware for your custom piece. We provide samples and expert guidance on what works best for Kerala's climate and your lifestyle.</p>

          <h2>Step 5: Crafting</h2>
          <p>Our skilled artisans bring the design to life. Every joint is precision-cut, every surface is hand-finished, and every detail is checked against the approved design. We use traditional woodworking techniques combined with modern tools for the best results.</p>

          <h2>Step 6: Quality Check</h2>
          <p>Each piece undergoes rigorous quality inspection — checking dimensions, finish quality, structural integrity, and hardware function. We ensure your custom furniture meets our standards before it leaves our workshop.</p>

          <h2>Step 7: Delivery & Installation</h2>
          <p>We deliver and install your custom furniture in your home, ensuring proper placement and assembly. We also provide care instructions to help your furniture last for years.</p>

          <p style={{ textAlign: 'center', marginTop: 48, fontStyle: 'italic', color: '#6B6B6B' }}>Ready to start your custom furniture journey? <a href={wa("Hi Qalimoz, I'd like to start the custom furniture process.")} target="_blank" rel="noopener noreferrer" style={{ color: '#C5963C', textDecoration: 'underline' }}>Contact us on WhatsApp</a></p>
        </div>
      </article>

      <section className="home-button-section">
        <a href="/" className="home-button">⬅ Back to Home</a>
      </section>
    </main>
  );
}
