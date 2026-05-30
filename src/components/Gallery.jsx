import React, { useState, useRef, useCallback, useEffect } from 'react';
import { p } from '../path';

const CUPBOARD_IMG = (n) => `ChatGPT Image May 30, 2026, 05_${n}.webp`;
const CUSHION_IMG = (n) => `ChatGPT Image May 30, 2026, ${n}.webp`;
const MAY26_IMG = (n) => `ChatGPT Image May 26, 2026, ${n}.webp`;
const WA_IMG = (n) => `WhatsApp Image 2026-05-30 at ${n}.webp`;

const categories = [
  {
    title: 'Cupboards.',
    scroll: true,
    images: [
      { src: CUPBOARD_IMG('32_30 AM'), alt: 'Cupboard design 1' },
      { src: CUPBOARD_IMG('32_55 AM'), alt: 'Cupboard design 2' },
      { src: CUPBOARD_IMG('45_55 AM'), alt: 'Cupboard design 3' },
      { src: CUPBOARD_IMG('47_42 AM'), alt: 'Cupboard design 4' },
      { src: CUPBOARD_IMG('51_22 AM'), alt: 'Cupboard design 5' },
      { src: CUPBOARD_IMG('51_28 AM'), alt: 'Cupboard design 6' },
      { src: CUPBOARD_IMG('52_09 AM'), alt: 'Cupboard design 7' },
      { src: CUPBOARD_IMG('53_59 AM'), alt: 'Cupboard design 8' },
      { src: p('/frame-2.webp'), alt: 'Cupboard design 9' },
    ]
  },
  {
    title: 'Premium Sofa.',
    scroll: true,
    images: [
      { src: CUSHION_IMG('06_03_34 AM'), alt: 'Premium sofa design 1' },
      { src: CUSHION_IMG('06_03_49 AM'), alt: 'Premium sofa design 2' },
      { src: CUSHION_IMG('06_04_21 AM'), alt: 'Premium sofa design 3' },
      { src: CUSHION_IMG('06_04_41 AM'), alt: 'Premium sofa design 4' },
      { src: CUSHION_IMG('06_05_53 AM'), alt: 'Premium sofa design 5' },
      { src: CUSHION_IMG('06_08_04 AM'), alt: 'Premium sofa design 6' },
      { src: p('/frame-7.png'), alt: 'Premium sofa design 7' },
      { src: CUSHION_IMG('06_55_54 AM'), alt: 'Premium sofa design 8' },
    ]
  },
  {
    title: 'Cushion Coat.',
    images: [
      { src: CUSHION_IMG('06_44_49 AM'), alt: 'Cushion coat design 1' },
      { src: CUSHION_IMG('05_55_28 AM'), alt: 'Cushion coat design 2' },
      { src: CUSHION_IMG('05_55_37 AM'), alt: 'Cushion coat design 3' },
      { src: CUSHION_IMG('05_56_13 AM'), alt: 'Cushion coat design 4' },
      { src: CUSHION_IMG('06_35_06 AM'), alt: 'Cushion coat design 5' },
      { src: p('/gallery-8.webp'), alt: 'Cushion coat design 6' },
    ]
  },
  {
    title: 'Marble Top Dining Table.',
    scroll: true,
    images: [
      { src: CUSHION_IMG('05_57_52 AM'), alt: 'Marble top dining table 1' },
      { src: CUSHION_IMG('05_58_31 AM'), alt: 'Marble top dining table 2' },
      { src: CUSHION_IMG('07_20_49 AM'), alt: 'Marble top dining table 3' },
      { src: CUSHION_IMG('05_59_43 AM'), alt: 'Marble top dining table 4' },
      { src: CUSHION_IMG('06_00_58 AM'), alt: 'Marble top dining table 5' },
      { src: CUSHION_IMG('06_01_51 AM'), alt: 'Marble top dining table 6' },
      { src: MAY26_IMG('11_20_01 PM'), alt: 'Marble top dining table 7' },
      { src: CUSHION_IMG('07_32_27 AM'), alt: 'Marble top dining table 8' },
      { src: CUSHION_IMG('07_40_03 AM'), alt: 'Marble top dining table 9' },
    ]
  },
  {
    title: 'Gypsum Work.',
    images: [
      { src: WA_IMG('4.36.57 AM'), alt: 'Gypsum work design 1' },
      { src: WA_IMG('4.36.58 AM (1)'), alt: 'Gypsum work design 2' },
      { src: WA_IMG('4.36.58 AM'), alt: 'Gypsum work design 3' },
      { src: WA_IMG('4.36.59 AM (1)'), alt: 'Gypsum work design 4' },
      { src: WA_IMG('4.36.59 AM'), alt: 'Gypsum work design 5' },
      { src: WA_IMG('4.37.00 AM'), alt: 'Gypsum work design 6' },
    ]
  },
  {
    title: 'Other.',
    images: [
      { src: CUSHION_IMG('05_59_50 AM'), alt: 'Other design 2' },
      { src: CUSHION_IMG('06_12_10 AM'), alt: 'Other design 3' },
      { src: CUSHION_IMG('06_12_54 AM'), alt: 'Other design 4' },
      { src: CUSHION_IMG('06_13_03 AM'), alt: 'Other design 5' },
      { src: CUSHION_IMG('07_40_25 AM'), alt: 'Other design 6' },
      { src: CUSHION_IMG('07_30_01 AM'), alt: 'Other design 7' },
    ]
  },
];

export default function Gallery({ openModal }) {
  const [current, setCurrent] = useState(0);
  const [carouselHeight, setCarouselHeight] = useState('auto');
  const [scrollMaxH, setScrollMaxH] = useState('none');
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const drag = useRef({ active: false, startX: 0, startY: 0, offset: 0, isHorizontal: null });
  const measuredRef = useRef(false);

  const total = categories.length;

  const goTo = useCallback((idx) => {
    const i = Math.max(0, Math.min(idx, total - 1));
    setCurrent(i);
    if (trackRef.current) {
      trackRef.current.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      trackRef.current.style.transform = `translateX(${-i * 100}%)`;
    }
  }, [total]);

  useEffect(() => {
    const cat = categories[current];
    if (!cat || !cat.scroll) { setScrollMaxH('none'); return; }
    const calc = () => {
      const track = trackRef.current;
      if (!track) return;
      const slide = track.children[current];
      if (!slide) return;
      const grid = slide.querySelector('.gallery-slide-scroll');
      if (!grid) return;
      const items = grid.querySelectorAll('.gallery-slide-img-wrap');
      if (items.length < 2) return;
      const rowH = items[0].offsetHeight;
      const gap = 16;
      setScrollMaxH(`${rowH * 3 + gap * 2}px`);
    };
    const t = setTimeout(calc, 100);
    const t2 = setTimeout(() => {
      if (!measuredRef.current) {
        const track = trackRef.current;
        if (track && track.children.length >= 2) {
          const h0 = track.children[0].offsetHeight;
          const h1 = track.children[1].offsetHeight;
          setCarouselHeight(`${Math.max(h0, h1)}px`);
          measuredRef.current = true;
        }
      }
    }, 300);
    window.addEventListener('resize', calc);
    return () => { clearTimeout(t); clearTimeout(t2); window.removeEventListener('resize', calc); };
  }, [current]);

  const clampDrag = useCallback((basePct) => {
    const min = -(total - 1) * 100;
    return Math.max(min, Math.min(0, basePct));
  }, [total]);

  const handlePointerDown = useCallback((clientX, clientY) => {
    drag.current = { active: true, startX: clientX, startY: clientY, offset: 0, isHorizontal: null };
    if (trackRef.current) trackRef.current.style.transition = 'none';
  }, []);

  const handlePointerMove = useCallback((clientX, clientY) => {
    if (!drag.current.active) return;
    const diffX = clientX - drag.current.startX;
    const diffY = clientY - drag.current.startY;

    if (drag.current.isHorizontal === null && (Math.abs(diffX) > 8 || Math.abs(diffY) > 8)) {
      drag.current.isHorizontal = Math.abs(diffX) > Math.abs(diffY);
      if (!drag.current.isHorizontal) return;
    }
    if (drag.current.isHorizontal === false) return;

    const container = containerRef.current;
    if (!container) return;
    const pct = (diffX / container.offsetWidth) * 100;
    drag.current.offset = pct;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${clampDrag((-current * 100) + pct)}%)`;
    }
  }, [current, clampDrag]);

  const handlePointerUp = useCallback(() => {
    if (!drag.current.active) return;
    drag.current.active = false;
    if (!drag.current.isHorizontal) return;
    const container = containerRef.current;
    if (!container) return;
    const thresholdPx = container.offsetWidth * 0.15;
    const totalPx = (drag.current.offset / 100) * container.offsetWidth;
    if (Math.abs(totalPx) > thresholdPx) {
      goTo(current + (drag.current.offset > 0 ? -1 : 1));
    } else {
      goTo(current);
    }
  }, [current, goTo]);

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  return (
    <section className="gallery" id="gallery" aria-label="Qalimoz portfolio gallery">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Portfolio</div>
          <h2>Our Works</h2>
        </div>
        <div
            className="gallery-carousel"
            style={{ height: carouselHeight }}
            ref={containerRef}
            onTouchStart={(e) => { if (e.touches[0]) handlePointerDown(e.touches[0].clientX, e.touches[0].clientY); }}
            onTouchMove={(e) => { if (e.touches[0]) handlePointerMove(e.touches[0].clientX, e.touches[0].clientY); }}
            onTouchEnd={handlePointerUp}
            onMouseDown={(e) => handlePointerDown(e.clientX, e.clientY)}
            onMouseMove={(e) => { if (drag.current.active) handlePointerMove(e.clientX, e.clientY); }}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
          >
            <div className="gallery-carousel-track" ref={trackRef}>
              {categories.map((cat, ci) => (
                <div key={ci} className="gallery-carousel-slide">
                  <h3 className="gallery-slide-title">{cat.title}</h3>
                  {cat.scroll ? (
                    <div className="gallery-slide-scroll" style={{ maxHeight: scrollMaxH }}>
                      <div className="gallery-slide-grid">
                        {cat.images.map((img, ii) => (
                          <div
                            key={ii}
                            className="gallery-slide-img-wrap img-clickable"
                            onClick={() => openModal(img.src, img.alt)}
                          >
                            {img.src ? (
                              <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className="gallery-slide-img"
                              />
                            ) : (
                              <div className="gallery-slide-img gallery-slide-img--placeholder">
                                <span>{img.alt}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="gallery-slide-scroll-fade">
                        <span className="gallery-slide-scroll-arrow" aria-hidden="true">⌄</span>
                      </div>
                    </div>
                  ) : (
                    <div className="gallery-slide-grid">
                      {cat.images.map((img, ii) => (
                        <div
                          key={ii}
                          className="gallery-slide-img-wrap img-clickable"
                          onClick={() => openModal(img.src, img.alt)}
                        >
                          {img.src ? (
                            <img
                              src={img.src}
                              alt={img.alt}
                              loading="lazy"
                              className="gallery-slide-img"
                            />
                          ) : (
                            <div className="gallery-slide-img gallery-slide-img--placeholder">
                              <span>{img.alt}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {total > 1 && (
              <>
                <button
                  className={`gallery-arrow gallery-arrow--prev${current === 0 ? ' disabled' : ''}`}
                  onClick={prev}
                  aria-label="Previous category"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <button
                  className={`gallery-arrow gallery-arrow--next${current === total - 1 ? ' disabled' : ''}`}
                  onClick={next}
                  aria-label="Next category"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </>
            )}
          {total > 1 && (
            <div className="gallery-dots">
              {categories.map((_, i) => (
                <button
                  key={i}
                  className={`gallery-dot${i === current ? ' active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to category ${i + 1}`}
                />
              ))}
            </div>
          )}
          </div>
      </div>
    </section>
  );
}
