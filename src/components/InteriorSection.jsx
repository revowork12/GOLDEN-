import React from 'react';

const images = [
  { src: '/interior-1.webp', alt: 'Qalimoz interior design — modern living room transformation in Kerala' },
  { src: '/interior-2.webp', alt: 'Qalimoz bedroom interior design with custom wardrobe and lighting' },
  { src: '/interior-3.webp', alt: 'Qalimoz kitchen interior design with modular cabinetry' },
  { src: '/interior-4.webp', alt: 'Qalimoz dining area interior design with bespoke furniture' },
];

export default function InteriorSection({ wa, openModal }) {
  return (
    <section className="interiors" id="interiors" aria-label="Qalimoz Interior Design" itemScope itemType="https://schema.org/Service">
      <div className="container">
        <div className="interiors-grid">
          <div className="interiors-images reveal">
            {images.map((img, i) => (
              <div key={i} className={`interiors-img-wrap interiors-img-wrap-${i + 1} img-clickable`} onClick={() => openModal(img.src, img.alt)}>
                <img src={img.src} alt={img.alt} loading="lazy" className="interiors-img" width="400" height="300" />
              </div>
            ))}
          </div>
          <div className="interiors-text reveal reveal-delay-1">
            <div className="interiors-eyebrow" aria-label="Interior design services">Qalimoz Interiors</div>
            <h2>Interiors That Feel Like Home</h2>
            <p>
              From concept to completion, our design team transforms your vision into a space that reflects your personality and lifestyle. Serving homes and offices across Kerala and India.
            </p>
            <ul className="interiors-features">
              <li>End-to-end interior solutions</li>
              <li>3D visualization before execution</li>
              <li>Dedicated project management</li>
            </ul>
            <a href={wa("Hi Qalimoz, I'm interested in interior design.")} className="btn-gold-outline" target="_blank" rel="noopener noreferrer" aria-label="Start your interior project on WhatsApp">
              Start Your Interior Project <span aria-hidden="true">⟶</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
