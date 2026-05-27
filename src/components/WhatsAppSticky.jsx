import React from 'react';

export default function WhatsAppSticky({ wa, hidden }) {
  return (
    <div className={`whatsapp-sticky${hidden ? ' hidden' : ''}`} aria-label="WhatsApp quick contact">
      <a href={wa("Hi Qalimoz, I'm interested in your services.")} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp — free quote">
        Chat on WhatsApp <span aria-hidden="true">⟶</span>
      </a>
    </div>
  );
}
