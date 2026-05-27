import React, { useState, useEffect } from 'react';

export default function Header({ wa }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { label: 'Furnitures', href: '#furniture' },
    { label: 'Interiors', href: '#interiors' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} role="banner" itemScope itemType="https://schema.org/WPHeader">
      <div className="header-inner">
        <a href="#home" className="header-logo" aria-label="Qalimoz Groups — Home">
          <img src="/logo.webp" alt="Qalimoz Groups — Custom Furniture & Interior Design" className="header-logo-img" width="220" height="220" />
        </a>

        <nav className="header-nav" aria-label="Main navigation" itemScope itemType="https://schema.org/SiteNavigationElement">
          {links.map(l => (
            <a key={l.href} href={l.href} itemProp="url"><span itemProp="name">{l.label}</span></a>
          ))}
        </nav>

        <a href={wa("Hi Qalimoz, I'm interested in your services.")} className="header-cta" target="_blank" rel="noopener noreferrer" aria-label="Enquire on WhatsApp">
          Enquire Now
          <span className="header-cta-icon" aria-hidden="true">⟶</span>
        </a>

        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className={`mobile-overlay${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        <button
          className="mobile-overlay-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <a href={wa("Hi Qalimoz, I'm interested in your services.")} className="mobile-overlay-cta" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
          Enquire Now
        </a>
      </div>
    </header>
  );
}
