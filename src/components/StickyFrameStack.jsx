import { useEffect, useRef, useState } from 'react';

const NUM_FRAMES = 24;
const LANDSCAPE_TOTAL_VH = 1000;
const PORTRAIT_TOTAL_VH = 500;

export default function StickyFrameStack({ wa }) {
  const [phase, setPhase] = useState(0);
  const wrapperRef = useRef(null);
  const heroRef = useRef(null);
  const phaseRef = useRef(0);
  const rafId = useRef(null);
  const lastScrollY = useRef(0);
  const scrollStopped = useRef(performance.now());

  const isLandscapeOrientation = window.innerWidth > window.innerHeight;
  const totalVH = isLandscapeOrientation ? LANDSCAPE_TOTAL_VH : PORTRAIT_TOTAL_VH;
  const frameVH = totalVH / NUM_FRAMES;
  const frameDir = isLandscapeOrientation ? 'stack-landscape' : 'stack-portrait';

  function pad(i) {
    return String(i + 1).padStart(2, '0');
  }

  function release() {
    if (phaseRef.current >= 2) return;
    phaseRef.current = 2;
    setPhase(2);
    if (rafId.current) cancelAnimationFrame(rafId.current);
    const wrap = wrapperRef.current;
    if (wrap) {
      wrap.style.height = '0px';
      wrap.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    function loop() {
      if (phaseRef.current >= 2) return;
      const scrolled = window.scrollY;
      if (scrolled !== lastScrollY.current) {
        lastScrollY.current = scrolled;
        scrollStopped.current = performance.now();
      }

      const wrap = wrapperRef.current;
      if (wrap) {
        const total = wrap.offsetHeight - window.innerHeight;
        if (total > 0) {
          const progress = Math.min(scrolled / total, 1);
          if (progress >= 0.95 && phaseRef.current === 0) {
            phaseRef.current = 1;
            setPhase(1);
          }
          if (scrolled >= total - 5) {
            release();
            return;
          }
        }
      }

      if (phaseRef.current === 0 && performance.now() - scrollStopped.current > 500) {
        phaseRef.current = 1;
        setPhase(1);
      }

      rafId.current = requestAnimationFrame(loop);
    }

    rafId.current = requestAnimationFrame(loop);

    const safetyTimer = setTimeout(release, 12000);

    return () => {
      clearTimeout(safetyTimer);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    if (phase < 2) return;
    const hero = heroRef.current;
    if (!hero) return;
    hero.style.backgroundImage = `url(/frames/end-${isLandscapeOrientation ? 'landscape' : 'portrait'}.webp)`;
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center';
  }, [phase]);

  return (
    <>
      <div
        ref={wrapperRef}
        aria-hidden="true"
        style={{ position: 'relative' }}
      >
        {Array.from({ length: NUM_FRAMES }, (_, i) => (
          <div
            key={i}
            style={{
              position: 'sticky',
              top: 0,
              height: `${frameVH}vh`,
              width: '100%',
              backgroundImage: `url(/frames/${frameDir}/frame_${pad(i)}.webp)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: i,
            }}
          />
        ))}
        <div style={{ height: '100vh' }} />
      </div>
      <div
        className="hero"
        id="home"
        ref={heroRef}
        style={{
          position: phase >= 2 ? 'relative' : 'fixed',
          top: phase >= 2 ? undefined : 0,
          left: phase >= 2 ? undefined : 0,
          right: phase >= 2 ? undefined : 0,
          bottom: phase >= 2 ? undefined : 0,
          zIndex: phase >= 2 ? 1 : 999,
          backgroundColor: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: phase >= 2 ? '140px 24px 80px' : '140px 24px 80px',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(rgba(30,29,25,0.5) 0%, rgba(30,29,25,0.3) 50%, rgba(30,29,25,0.6) 100%)',
          pointerEvents: 'none'
        }} />
        <div className="hero-content" style={{
          width: '100%', maxWidth: '900px',
          margin: '0 auto', position: 'relative',
          zIndex: 3, textAlign: 'center',
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          pointerEvents: phase >= 1 ? 'auto' : 'none'
        }}>
          <div className="hero-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="hero-eyebrow" style={{
              display: 'inline-flex', alignItems: 'center',
              fontSize: '12px', fontWeight: 500, textTransform: 'uppercase',
              letterSpacing: '2px', color: '#C5963C',
              marginBottom: '10px', padding: '6px 14px',
              border: '1px solid rgba(188,143,75,0.25)',
              borderRadius: '100px'
            }}>
              5+ Years of Craftsmanship
            </div>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: 'clamp(36px, 5.5vw, 76px)',
              fontWeight: 700, lineHeight: 1.08,
              color: '#fff', letterSpacing: '0.03em',
              marginBottom: '8px', maxWidth: '800px'
            }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300 }}>Design</span> Your Space,<br />Define{" "}
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300 }}>your style</span>
            </h1>
            <p className="hero-sub" style={{
              fontSize: 'clamp(15px, 1.1vw, 17px)',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7, maxWidth: '520px',
              marginBottom: '20px', textAlign: 'center'
            }}>
              Qalimoz Groups delivers bespoke furniture and complete home interiors. Over 2,000 satisfied clients across Kerala and India.
            </p>
            <div className="hero-actions" style={{
              display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'
            }}>
              <a
                href={wa("Hi Qalimoz, I'm interested in your services.")}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a Free Quote
                <span className="btn-icon" aria-hidden="true">⟶</span>
              </a>
              <a href="#gallery" className="btn-secondary">View Our Work</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
