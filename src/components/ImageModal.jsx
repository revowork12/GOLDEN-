import React, { useEffect } from 'react';

export default function ImageModal({ src, alt, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="image-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Image preview">
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt || ''} />
      </div>
    </div>
  );
}
