import { useEffect, useRef, useState } from 'react';

const LANDSCAPE_VIDEO = '/frames/landscape-animation.mp4';
const PORTRAIT_VIDEO = '/frames/portrait-animation.mp4';

function getOrientation() {
  if (window.screen?.orientation?.type) return window.screen.orientation.type;
  return window.innerWidth > window.innerHeight ? 'landscape-primary' : 'portrait-primary';
}

function isLandscape(type) {
  return type.startsWith('landscape');
}

export default function HeroSection({ wa }) {
  const [isReady, setIsReady] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [isReleased, setIsReleased] = useState(false);
  const [canvasActive, setCanvasActive] = useState(true);

  const targetProgress = useRef(0);
  const smoothProgress = useRef(0);
  const rafId = useRef(null);
  const activeOrientation = useRef(getOrientation());
  const touchStartY = useRef(0);
  const touchStartProgress = useRef(0);
  const phaseRef = useRef(0);
  const lastPhaseAdvance = useRef(0);
  const releasedOnce = useRef(false);
  const wrapperRef = useRef(null);
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const durationRef = useRef(0);
  const cropRef = useRef({ dx: 0, dy: 0, dw: 0, dh: 0 });
  const resizeTimer = useRef(null);
  const startOffsetRef = useRef(0);
  const scrollEnded = useRef(true);
  const lastScrollChange = useRef(0);

  const orientation = activeOrientation.current;
  const isLandscapeOrientation = isLandscape(orientation);
  const videoSrc = isLandscapeOrientation ? LANDSCAPE_VIDEO : PORTRAIT_VIDEO;

  function recalcCrop(vw, vh) {
    const cw = window.innerWidth;
    const ch = window.innerHeight;
    const scale = Math.max(cw / vw, ch / vh);
    cropRef.current = {
      dw: vw * scale,
      dh: vh * scale,
      dx: (cw - vw * scale) / 2,
      dy: (ch - vh * scale) / 2,
    };
  }

  function setupCanvas() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth * dpr;
    const h = window.innerHeight * dpr;
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawVideoFrame() {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;
    if (video.videoWidth === 0 || video.videoHeight === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const { dx, dy, dw, dh } = cropRef.current;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.drawImage(video, dx, dy, dw, dh);
  }

  function onVideoReady() {
    const video = videoRef.current;
    if (!video) return;
    durationRef.current = video.duration || 0;
    const vw = video.videoWidth;
    const vh = video.videoHeight;
    if (vw > 0 && vh > 0) {
      startOffsetRef.current = !isLandscape(activeOrientation.current) && durationRef.current > 0.49
        ? 0.49 : 0;
      recalcCrop(vw, vh);
      setupCanvas();
    }
    video.play().catch(() => {});
    setIsReady(true);
  }

  useEffect(() => {
    if (!isReady) return;
    function onResize() {
      clearTimeout(resizeTimer.current);
      resizeTimer.current = setTimeout(() => {
        const video = videoRef.current;
        if (!video) return;
        const vw = video.videoWidth;
        const vh = video.videoHeight;
        if (vw > 0 && vh > 0) {
          recalcCrop(vw, vh);
          setupCanvas();
          if (phaseRef.current === 0) drawVideoFrame();
        }
      }, 200);
    }
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(resizeTimer.current);
    };
  }, [isReady]);

  // Safety: force isReady(true) after 3s if video metadata never loaded on iOS
  useEffect(() => {
    if (isReady) return;
    const timer = setTimeout(() => setIsReady(true), 3000);
    return () => clearTimeout(timer);
  }, [isReady]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    function keepVideoAlive() {
      const video = videoRef.current;
      if (video && video.paused && !video.seeking && durationRef.current > 0) {
        video.play().catch(() => {});
      }
    }

    function tryAdvance() {
      const now = performance.now();
      if (now - lastPhaseAdvance.current < 300) return;
      if (phaseRef.current === 1) {
        phaseRef.current = 2;
        lastPhaseAdvance.current = now;
        setTextVisible(true);
      } else if (phaseRef.current === 2) {
        release();
        return true;
      }
      return false;
    }

    function forceComplete() {
      if (releasedOnce.current) return;
      targetProgress.current = 1.0;
      const el = wrapperRef.current;
      if (el) {
        const prev = scrollEnded.current;
        scrollEnded.current = false;
        window.scrollTo(0, el.offsetHeight);
        scrollEnded.current = prev;
      }
    }

    function checkBottom(el) {
      if (releasedOnce.current) return false;
      if (window.scrollY >= el.offsetTop + el.offsetHeight - window.innerHeight - 1) {
        targetProgress.current = 1.0;
        return true;
      }
      return false;
    }

    function onScroll() {
      const el = wrapperRef.current;
      if (!el || releasedOnce.current) return;
      const scrolled = window.scrollY - el.offsetTop;
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) {
        targetProgress.current = 1.0;
      } else {
        checkBottom(el);
        targetProgress.current = Math.min(Math.max(scrolled / total, 0), 1);
      }
      keepVideoAlive();
      lastScrollChange.current = performance.now();
      if (scrollEnded.current) {
        scrollEnded.current = false;
        if (phaseRef.current > 0) tryAdvance();
      }
    }

    function onTouchStart(e) {
      if (releasedOnce.current) return;
      keepVideoAlive();
      touchStartY.current = e.touches[0].clientY;
      touchStartProgress.current = smoothProgress.current;
    }

    function onTouchMove(e) {
      if (releasedOnce.current) return;
      const delta = touchStartY.current - e.touches[0].clientY;
      const el = wrapperRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) {
        targetProgress.current = 1.0;
        keepVideoAlive();
        return;
      }
      checkBottom(el);
      targetProgress.current = Math.min(Math.max(
        touchStartProgress.current + (delta / total), 0), 1);
      keepVideoAlive();
    }

    function onScrollEnd() {
      const el = wrapperRef.current;
      if (!el || releasedOnce.current) return;
      const scrolled = window.scrollY - el.offsetTop;
      const total = el.offsetHeight - window.innerHeight;
      if (total > 0 && scrolled / total > 0.85) {
        forceComplete();
      }
      scrollEnded.current = true;
    }

    function onOrientationChange() {
      if (releasedOnce.current) return;
      const newOrientation = getOrientation();
      if (newOrientation === activeOrientation.current) return;
      activeOrientation.current = newOrientation;
      targetProgress.current = 0;
      smoothProgress.current = 0;
      phaseRef.current = 0;
      lastPhaseAdvance.current = 0;
      releasedOnce.current = false;
      setIsReady(false);
      setTextVisible(false);
    }

    function release() {
      releasedOnce.current = true;
      setIsReleased(true);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    }

    function loop() {
      if (releasedOnce.current) return;

      // iOS fallback: poll actual scroll position every frame (window.scrollY is always fresh on iOS)
      if (!releasedOnce.current) {
        const el = wrapperRef.current;
        if (el) {
          const scrolled = window.scrollY - el.offsetTop;
          const total = el.offsetHeight - window.innerHeight;
          if (total > 0) {
            const raw = Math.min(Math.max(scrolled / total, 0), 1);
            if (raw > targetProgress.current) targetProgress.current = raw;
          }
        }
      }

      // Scroll-end fallback detection (iOS may not fire scrollend event)
      if (!scrollEnded.current && !releasedOnce.current) {
        if (performance.now() - lastScrollChange.current > 400) {
          scrollEnded.current = true;
          const el = wrapperRef.current;
          if (el) {
            const scrolled = window.scrollY - el.offsetTop;
            const total = el.offsetHeight - window.innerHeight;
            if (total > 0 && scrolled / total > 0.85) {
              forceComplete();
            } else if (phaseRef.current > 0) {
              tryAdvance();
            }
          }
        }
      }

      smoothProgress.current += (targetProgress.current - smoothProgress.current) * 0.25;

      if (targetProgress.current >= 0.85) {
        smoothProgress.current = 1.0;
      }

      const sp = smoothProgress.current;
      const video = videoRef.current;
      if (!video) return;
      keepVideoAlive();

      if (video.videoWidth > 0 && video.videoHeight > 0 && durationRef.current === 0) {
        durationRef.current = video.duration || 0;
        startOffsetRef.current = !isLandscape(activeOrientation.current) && durationRef.current > 0.49
          ? 0.49 : 0;
        recalcCrop(video.videoWidth, video.videoHeight);
        setupCanvas();
      }

      if (sp < 1.0) {
        phaseRef.current = 0;
        if (!canvasActive) setCanvasActive(true);
        const so = startOffsetRef.current;
        if (durationRef.current > 0) {
          video.currentTime = so + sp * (durationRef.current - so);
        }
        drawVideoFrame();
        if (textVisible) setTextVisible(false);
      } else {
        if (durationRef.current > 0) {
          video.currentTime = durationRef.current;
        }
        if (canvasActive) setCanvasActive(false);
        if (phaseRef.current === 0) {
          phaseRef.current = 1;
          const endFrame = isLandscape(activeOrientation.current)
            ? '/frames/end-landscape.webp'
            : '/frames/end-portrait.webp';
          heroRef.current.style.backgroundImage = `url(${endFrame})`;
          heroRef.current.style.backgroundSize = 'cover';
          heroRef.current.style.backgroundPosition = 'center';
        }
      }

      // Autonomous phase advancement (no scroll events needed on iOS)
      if (phaseRef.current >= 1) {
        tryAdvance();
      }

      rafId.current = requestAnimationFrame(loop);
    }

    rafId.current = requestAnimationFrame(loop);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('scrollend', onScrollEnd, { passive: true });

    const screenOrientation = window.screen?.orientation;
    if (screenOrientation) {
      screenOrientation.addEventListener('change', onOrientationChange);
    }
    window.addEventListener('orientationchange', onOrientationChange);

    // Safety: force release after 8s regardless of state
    const safetyTimer = setTimeout(() => {
      if (!releasedOnce.current) release();
    }, 8000);

    return () => {
      clearTimeout(safetyTimer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scrollend', onScrollEnd);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      if (screenOrientation) {
        screenOrientation.removeEventListener('change', onOrientationChange);
      }
      window.removeEventListener('orientationchange', onOrientationChange);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isReady]);

  useEffect(() => {
    if (!isReleased) return;

    const heroEl = heroRef.current;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (rafId.current) cancelAnimationFrame(rafId.current);

    const endFrame = isLandscape(activeOrientation.current)
      ? '/frames/end-landscape.webp'
      : '/frames/end-portrait.webp';
    heroEl.style.backgroundImage = `url(${endFrame})`;
    heroEl.style.backgroundSize = 'cover';
    heroEl.style.backgroundPosition = 'center';

    if (canvas) {
      canvas.style.display = 'none';
    }

    if (video) {
      video.removeAttribute('src');
      video.load();
    }

    const wrapEl = wrapperRef.current;
    if (wrapEl) {
      wrapEl.style.height = '0px';
      wrapEl.style.visibility = 'hidden';
    }

    window.getComputedStyle(document.body).height;
    window.scrollTo(0, 0);
  }, [isReleased]);

  return (
    <>
      <div
        ref={wrapperRef}
        aria-hidden="true"
        style={{
          height: isLandscapeOrientation ? '1000vh' : '500vh',
          visibility: 'hidden',
          position: 'relative',
          pointerEvents: 'none'
        }}
      />
      <div
        className="hero"
        id="home"
        ref={heroRef}
        style={{
          position: isReleased ? 'relative' : 'fixed',
          top: isReleased ? undefined : 0,
          left: isReleased ? undefined : 0,
          right: isReleased ? undefined : 0,
          bottom: isReleased ? undefined : 0,
          zIndex: isReleased ? 1 : 10,
          backgroundColor: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isReleased ? '140px 24px 80px' : '140px 24px 80px',
          overflow: 'hidden',
          visibility: 'visible'
        }}
      >
        <video
          ref={videoRef}
          muted
          autoPlay
          playsInline
          webkit-playsinline="true"
          x5-playsinline="true"
          preload="auto"
          src={videoSrc}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.01, pointerEvents: 'none', objectFit: 'cover' }}
          onLoadedData={onVideoReady}
        />
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            display: canvasActive ? 'block' : 'none',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(rgba(30,29,25,0.5) 0%, rgba(30,29,25,0.3) 50%, rgba(30,29,25,0.6) 100%)',
          pointerEvents: 'none'
        }} />
        <div className="hero-content" style={{
          width: '100%', maxWidth: '900px',
          margin: '0 auto', position: 'relative',
          zIndex: 3, textAlign: 'center',
          pointerEvents: textVisible ? 'auto' : 'none'
        }}>
          <div className="hero-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="hero-eyebrow" style={{
              display: 'inline-flex', alignItems: 'center',
              fontSize: '12px', fontWeight: 500, textTransform: 'uppercase',
              letterSpacing: '2px', color: '#C5963C',
              marginBottom: '10px', padding: '6px 14px',
              border: '1px solid rgba(188,143,75,0.25)',
              borderRadius: '100px',
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              transitionDelay: '0ms'
            }}>
              5+ Years of Craftsmanship
            </div>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: 'clamp(36px, 5.5vw, 76px)',
              fontWeight: 700, lineHeight: 1.08,
              color: '#fff', letterSpacing: '0.03em',
              marginBottom: '8px', maxWidth: '800px',
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              transitionDelay: '0ms'
            }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300 }}>Design</span> Your Space,<br />Define{" "}
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300 }}>your style</span>
            </h1>
            <p className="hero-sub" style={{
              fontSize: 'clamp(15px, 1.1vw, 17px)',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7, maxWidth: '520px',
              marginBottom: '20px', textAlign: 'center',
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              transitionDelay: '150ms'
            }}>
              Qalimoz Groups delivers bespoke furniture and complete home interiors. Over 2,000 satisfied clients across Kerala and India.
            </p>
            <div className="hero-actions" style={{
              display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center',
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              transitionDelay: '300ms'
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
