import React, { useEffect, useRef } from 'react';

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll('[data-count]');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        let current = 0;
        const step = Math.ceil(target / 40);
        const interval = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(interval); }
          el.textContent = current;
        }, 40);
        obs.unobserve(el);
      });
    }, { rootMargin: '-20% 0px -30% 0px' });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="experience" id="experience">
      <div className="container" ref={ref}>
        <span className="experience-eyebrow">Our Legacy</span>
        <div className="experience-display">
          <div className="experience-stat">
            <span className="experience-num"><span data-count="10">0</span>+</span>
            <span className="experience-label">Years of Craftsmanship</span>
          </div>
          <div className="experience-divider" aria-hidden="true"></div>
          <div className="experience-stat">
            <span className="experience-num"><span data-count="2000">0</span>+</span>
            <span className="experience-label">Spaces Transformed</span>
          </div>
          <div className="experience-divider" aria-hidden="true"></div>
          <div className="experience-stat">
            <span className="experience-num"><span data-count="100">0</span>%</span>
            <span className="experience-label">Client Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}
