import { useEffect, useRef, useState } from 'react'

const NUM_FRAMES = 36
const PORTRAIT_TOTAL_VH = 500
const FRAME_OFFSET = 3
const ANIMATION_END = 0.6

export default function StickyFrameStack({ wa }) {
  const [phase, setPhase] = useState(0)
  const wrapperRef = useRef(null)
  const heroRef = useRef(null)
  const canvasRef = useRef(null)
  const framesRef = useRef([])
  const phaseRef = useRef(0)
  const rafId = useRef(null)
  const releasedRef = useRef(false)
  const targetProgress = useRef(0)
  const smoothProgress = useRef(0)

  const availableFrames = NUM_FRAMES - FRAME_OFFSET
  const frameDir = 'stack-portrait'
  const endFrame = '/frames/end-portrait.webp'

  function pad(i) {
    return String(i + 1).padStart(2, '0')
  }

  function setupCanvas() {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = window.devicePixelRatio || 1
    const w = window.innerWidth * dpr
    const h = window.innerHeight * dpr
    canvas.width = w
    canvas.height = h
    canvas.style.width = window.innerWidth + 'px'
    canvas.style.height = window.innerHeight + 'px'
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }

  function drawFrame(index) {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const img = framesRef.current[index]
    if (!img || !img.complete || img.naturalWidth === 0) return
    const w = window.innerWidth
    const h = window.innerHeight
    ctx.clearRect(0, 0, w, h)
    const sw = img.naturalWidth
    const sh = img.naturalHeight
    const scale = Math.max(w / sw, h / sh)
    const dx = (w - sw * scale) / 2
    const dy = (h - sh * scale) / 2
    ctx.drawImage(img, dx, dy, sw * scale, sh * scale)
  }

  function release() {
    if (releasedRef.current) return
    releasedRef.current = true
    phaseRef.current = 2
    setPhase(2)
    if (rafId.current) cancelAnimationFrame(rafId.current)
    const canvas = canvasRef.current
    if (canvas) canvas.style.display = 'none'
    const hero = heroRef.current
    if (hero) {
      hero.style.backgroundImage = `url(${endFrame})`
      hero.style.backgroundSize = 'cover'
      hero.style.backgroundPosition = 'center'
    }
    const wrap = wrapperRef.current
    if (wrap) {
      wrap.style.height = '0px'
      wrap.style.overflow = 'hidden'
    }
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    setupCanvas()

    const loadedImages = new Array(NUM_FRAMES)

    const firstImg = new Image()
    firstImg.onload = () => {
      if (!releasedRef.current) drawFrame(FRAME_OFFSET)
    }
    firstImg.src = `/frames/${frameDir}/frame_${pad(FRAME_OFFSET)}.webp`
    loadedImages[FRAME_OFFSET] = firstImg
    firstImg.decode().then(() => {
      if (!releasedRef.current) drawFrame(FRAME_OFFSET)
    }).catch(() => {})
    if (firstImg.complete && firstImg.naturalWidth > 0) {
      drawFrame(FRAME_OFFSET)
    }

    for (let i = 0; i < NUM_FRAMES; i++) {
      if (i === FRAME_OFFSET) continue
      const img = new Image()
      img.src = `/frames/${frameDir}/frame_${pad(i)}.webp`
      loadedImages[i] = img
      img.decode().catch(() => {})
    }

    const endImg = new Image()
    endImg.src = endFrame
    framesRef.current = loadedImages

    function loop() {
      if (releasedRef.current) return
      const wrap = wrapperRef.current
      const hero = heroRef.current
      if (!wrap || !hero) return
      const scrolled = window.scrollY
      const total = wrap.offsetHeight - window.innerHeight
      if (total <= 0) {
        release()
        return
      }
      targetProgress.current = Math.min(scrolled / total, 1)
      smoothProgress.current += (targetProgress.current - smoothProgress.current) * 0.12
      const sp = smoothProgress.current
      const raw = targetProgress.current
      const frameProgress = Math.min(sp / ANIMATION_END, 1)
      const frameIndex = FRAME_OFFSET + Math.min(Math.floor(frameProgress * availableFrames), availableFrames - 1)
      drawFrame(frameIndex)
      if (raw >= 0.75 && phaseRef.current === 0) {
        phaseRef.current = 1
        setPhase(1)
      }
      if (raw >= 0.95) {
        release()
        return
      }
      if (raw >= 0.85 && scrolled >= total - 10) {
        release()
        return
      }
      rafId.current = requestAnimationFrame(loop)
    }

    rafId.current = requestAnimationFrame(loop)
    targetProgress.current = 0
    smoothProgress.current = 0

    const safetyTimer = setTimeout(() => {
      if (!releasedRef.current) release()
    }, 12000)

    const onResize = () => {
      setupCanvas()
      if (!releasedRef.current) {
        const wrap = wrapperRef.current
        if (wrap) {
          const scrolled = window.scrollY
          const total = wrap.offsetHeight - window.innerHeight
          const progress = total > 0 ? Math.min(scrolled / total, 1) : 0
          const frameProgress = Math.min(progress / ANIMATION_END, 1)
          const frameIndex = FRAME_OFFSET + Math.min(Math.floor(frameProgress * availableFrames), availableFrames - 1)
          drawFrame(frameIndex)
        }
      }
    }
    window.addEventListener('resize', onResize)

    return () => {
      clearTimeout(safetyTimer)
      window.removeEventListener('resize', onResize)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <>
      <div ref={wrapperRef} aria-hidden="true" style={{ height: `${PORTRAIT_TOTAL_VH}vh`, position: 'relative' }} />
      <div
        id="home"
        ref={heroRef}
        style={{
          position: phase >= 2 ? 'relative' : 'fixed',
          top: phase >= 2 ? undefined : 0,
          left: phase >= 2 ? undefined : 0,
          right: phase >= 2 ? undefined : 0,
          bottom: phase >= 2 ? undefined : 0,
          zIndex: phase >= 2 ? 1 : 999,
          backgroundColor: '#0F172A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 24px 80px',
          overflow: 'hidden',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(rgba(15,23,42,0.5) 0%, rgba(15,23,42,0.3) 50%, rgba(15,23,42,0.6) 100%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          width: '100%', maxWidth: '900px',
          margin: '0 auto', position: 'relative',
          zIndex: 3, textAlign: 'center',
        }}>
          <div className="flex flex-col items-center">
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              fontSize: '12px', fontWeight: 500, textTransform: 'uppercase',
              letterSpacing: '2px', color: '#D4A017',
              marginBottom: '10px', padding: '6px 14px',
              border: '1px solid rgba(212,160,23,0.25)',
              borderRadius: '100px',
              opacity: phase >= 1 ? 1 : 0,
              transform: phase >= 1 ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}>
              Premium Institutional Furniture
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(36px, 5.5vw, 76px)',
              fontWeight: 700, lineHeight: 1.08,
              color: '#fff', letterSpacing: '0.03em',
              marginBottom: '8px', maxWidth: '800px',
              opacity: phase >= 1 ? 1 : 0,
              transform: phase >= 1 ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              transitionDelay: '0ms',
            }}>
              Furniture for<br />
              <span style={{ color: '#D4A017' }}>Learning Spaces</span>
            </h1>
            <p style={{
              fontSize: 'clamp(15px, 1.1vw, 17px)',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7, maxWidth: '520px',
              marginBottom: '20px', textAlign: 'center',
              opacity: phase >= 1 ? 1 : 0,
              transform: phase >= 1 ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              transitionDelay: '150ms',
            }}>
              Premium, durable, ergonomic furniture solutions for schools, colleges, preschools, libraries, and offices.
            </p>
            <div style={{
              display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center',
              opacity: phase >= 1 ? 1 : 0,
              transform: phase >= 1 ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              transitionDelay: '300ms',
            }}>
              <a
                href={wa("Hi Golden Furniture, I'm interested in your institutional furniture solutions.")}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '12px',
                  padding: '14px 32px 14px 36px',
                  borderRadius: '100px',
                  background: '#D4A017',
                  color: '#1E293B',
                  fontSize: '14px', fontWeight: 600,
                  textTransform: 'uppercase', letterSpacing: '1px',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                Get a Free Consultation
                <span style={{
                  width: '28px', height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(30,41,59,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '13px',
                }}>⟶</span>
              </a>
              <a
                href="#solutions"
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  padding: '14px 32px',
                  borderRadius: '100px',
                  border: '1.5px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  fontSize: '14px', fontWeight: 500,
                  textTransform: 'uppercase', letterSpacing: '1px',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#D4A017'; e.currentTarget.style.color = '#D4A017' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#fff' }}
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
