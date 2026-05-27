import React from 'react';

const items = [
  { src: '/frame-2.webp', alt: 'Bespoke wooden furniture piece handcrafted by Qalimoz Groups' },
  { src: '/gallery-8.webp', alt: 'Luxury interior concept design by Qalimoz Groups Kerala' },
  { src: '/frame-3.webp', alt: 'Luxury home interior design project by Qalimoz Groups in Kerala' },
  { src: '/frame-4.webp', alt: 'Custom furniture and interior design showcase by Qalimoz Groups' },
  { src: '/frame-5.webp', alt: 'Complete home interior transformation by Qalimoz Groups India' },
  { src: '/frame-6.png', alt: 'Premium interior design with custom cabinetry by Qalimoz Groups' },
];

export default function Gallery({ openModal }) {
  return (
    <section className="gallery" id="gallery" aria-label="Qalimoz portfolio gallery" itemScope itemType="https://schema.org/ImageGallery">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Portfolio</div>
          <h2>Our Work</h2>
        </div>
        <div className="gallery-grid">
          {items.map((item, i) => (
            <div key={i} className="gallery-item reveal img-clickable" style={{ transitionDelay: `${i * 80}ms` }} itemScope itemType="https://schema.org/ImageObject" onClick={() => openModal(item.src, item.alt)}>
              <img src={item.src} alt={item.alt} loading="lazy" className="gallery-img" itemProp="contentUrl" />
              <meta itemProp="caption" content={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
