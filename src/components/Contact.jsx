import React, { forwardRef } from 'react';

const Contact = forwardRef(({ wa }, ref) => {
  return (
    <section className="contact" id="contact" ref={ref} aria-label="Contact Qalimoz" itemScope itemType="https://schema.org/ContactPoint">
      <div className="contact-inner reveal">
        <h2>Ready to Transform Your Space?</h2>
        <p>Talk to us on WhatsApp. We respond within minutes.</p>
        <a href={wa("Hi Qalimoz, I'm interested in your services.")} className="btn-dark" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp — free quote">
          Chat on WhatsApp
          <span className="btn-icon" aria-hidden="true">⟶</span>
        </a>
        <p className="contact-secondary">Or <a href="tel:+919605157123" aria-label="Call Qalimoz at +91 96051 57123" itemProp="telephone">Call Us</a></p>
        <meta itemProp="contactType" content="customer service" />
      </div>
    </section>
  );
});

export default Contact;
