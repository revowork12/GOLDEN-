import React from 'react';
import { p } from '../path';

export default function FurnitureSection({ wa, openModal }) {
  return (
    <section className="furniture" id="furniture" aria-label="Qalimoz Furniture" itemScope itemType="https://schema.org/Service">
      <div className="container">
        <div className="furniture-grid">
          <div className="furniture-images-grid reveal">
            <div className="img-clickable" onClick={() => openModal(p('/furniture-1.webp'), 'Qalimoz custom furniture — premium wood finish dining table')}><img src={p('/furniture-1.webp')} alt="Qalimoz custom furniture — premium wood finish dining table" className="furniture-img" loading="lazy" width="400" height="300" /></div>
            <div className="img-clickable" onClick={() => openModal(p('/furniture-2.webp'), 'Qalimoz handcrafted wooden sofa set with upholstery')}><img src={p('/furniture-2.webp')} alt="Qalimoz handcrafted wooden sofa set with upholstery" className="furniture-img" loading="lazy" width="400" height="300" /></div>
            <div className="img-clickable" onClick={() => openModal(p('/furniture-3.webp'), 'Qalimoz premium furniture — custom bed frame design')}><img src={p('/furniture-3.webp')} alt="Qalimoz premium furniture — custom bed frame design" className="furniture-img" loading="lazy" width="400" height="300" /></div>
            <div className="img-clickable" onClick={() => openModal(p('/furniture-6.webp'), 'Qalimoz artisan furniture — handcrafted wardrobe')}><img src={p('/furniture-6.webp')} alt="Qalimoz artisan furniture — handcrafted wardrobe" className="furniture-img" loading="lazy" width="400" height="300" /></div>
          </div>
          <div className="reveal reveal-delay-1">
            <div className="furniture-eyebrow" aria-label="Furniture services">Qalimoz Furnitures</div>
            <h2>Furniture Built Around You</h2>
            <p>
              Every piece is crafted to your specifications — from the wood selection to the final finish. Our artisans bring decades of experience to each project. Based in Kerala, serving across India.
            </p>
            <ul className="furniture-features">
              <li>Custom measurements for your space</li>
              <li>Premium materials sourced worldwide</li>
              <li>On-site delivery and installation</li>
            </ul>
            <a href={wa("Hi Qalimoz, I'm interested in furniture.")} className="btn-gold-outline" target="_blank" rel="noopener noreferrer" aria-label="Enquire about furniture on WhatsApp">
              Enquire About Furniture <span aria-hidden="true">⟶</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
