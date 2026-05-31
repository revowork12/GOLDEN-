import React from 'react';

const Footer = React.forwardRef((props, ref) => {
  return (
    <footer className="footer" ref={ref} role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
      <div className="footer-grid">
        <div className="footer-brand" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content="Qalimoz Groups" />
          <h4>Qalimoz Groups</h4>
          <p>Crafting spaces since 2019. Bespoke furniture and complete home interiors tailored to you.</p>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <a href="#furniture" aria-label="Qalimoz Furnitures">Qalimoz Furnitures</a>
          <a href="#interiors" aria-label="Qalimoz Interiors">Qalimoz Interiors</a>
          <a href="#contact" aria-label="Custom Orders">Custom Orders</a>
          <a href="#contact" aria-label="Consultation services">Consultation</a>
        </div>
        <div className="footer-col">
          <h5>Links</h5>
          <a href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-col">
          <h5>Contact</h5>
          <a href="mailto:hello@qalimoz.com" aria-label="Email Qalimoz">hello@qalimoz.com</a>
          <a href="tel:+919605157123" aria-label="Call Qalimoz at +91 96051 57123">+91 96051 57123</a>
          <span style={{display:'block',fontSize:'14px',color:'rgba(255,255,255,0.4)'}} itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="addressLocality">Kollam</span>, <span itemProp="addressRegion">KL</span>, <span itemProp="addressCountry">India</span>
          </span>
          <span style={{display:'block',fontSize:'13px',color:'rgba(255,255,255,0.3)',marginTop:'4px'}}>Serving Thiruvananthapuram, Karunagappally & Kayamkulam</span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Qalimoz Groups. All rights reserved.</p>
        <p style={{color:'rgba(255,255,255,0.2)',fontSize:'12px'}}>Built with care</p>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;
