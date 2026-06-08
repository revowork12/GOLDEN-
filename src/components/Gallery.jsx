import { useState, useRef, useCallback, useEffect } from 'react'
import ImageModal from './ImageModal'

const categories = [
  {
    title: 'Wardrobe.',
    scroll: true,
    images: [
      { src: '/images/wardrobe-1.webp', alt: 'Wardrobe design 1' },
      { src: '/images/wardrobe-2.webp', alt: 'Wardrobe design 2' },
      { src: '/images/wardrobe-3.webp', alt: 'Wardrobe design 3' },
      { src: '/images/wardrobe-4.webp', alt: 'Wardrobe design 4' },
      { src: '/images/wardrobe-5.webp', alt: 'Wardrobe design 5' },
      { src: '/images/wardrobe-6.webp', alt: 'Wardrobe design 6' },
    ],
  },
  {
    title: 'Dining Table.',
    scroll: true,
    images: [
      { src: '/images/dining-1.webp', alt: 'Dining table 1' },
      { src: '/images/dining-2.webp', alt: 'Dining table 2' },
      { src: '/images/dining-3.webp', alt: 'Dining table 3' },
      { src: '/images/dining-4.webp', alt: 'Dining table 4' },
      { src: '/images/dining-5.webp', alt: 'Dining table 5' },
      { src: '/images/dining-6.webp', alt: 'Dining table 6' },
    ],
  },
  {
    title: 'School.',
    scroll: true,
    images: [
      { src: '/images/school-1.webp', alt: 'School furniture 1' },
      { src: '/images/school-2.webp', alt: 'School furniture 2' },
      { src: '/images/school-3.webp', alt: 'School furniture 3' },
      { src: '/images/school-4.webp', alt: 'School furniture 4' },
      { src: '/images/school-5.webp', alt: 'School furniture 5' },
      { src: '/images/school-6.webp', alt: 'School furniture 6' },
    ],
  },
  {
    title: 'Sofa.',
    scroll: true,
    images: [
      { src: '/images/sofa-2.webp', alt: 'Sofa design 1' },
      { src: '/images/sofa-1.webp', alt: 'Sofa design 2' },
      { src: '/images/1000274643.webp', alt: 'Sofa design 3' },
      { src: '/images/sofa-3.webp', alt: 'Sofa design 4' },
      { src: '/images/1000274642.webp', alt: 'Sofa design 5' },
      { src: '/images/1000274640.webp', alt: 'Sofa design 6' },
    ],
  },
  {
    title: 'Interior.',
    scroll: true,
    images: [
      { src: '/images/interior-1.webp', alt: 'Interior design 1' },
      { src: '/images/interior-2.webp', alt: 'Interior design 2' },
      { src: '/images/interior-3.webp', alt: 'Interior design 3' },
      { src: '/images/interior-4.webp', alt: 'Interior design 4' },
      { src: '/images/interior-5.webp', alt: 'Interior design 5' },
      { src: '/images/interior-6.webp', alt: 'Interior design 6' },
    ],
  },
]

export default function Gallery() {
  const [current, setCurrent] = useState(0)
  const [carouselHeight, setCarouselHeight] = useState('auto')
  const [scrollMaxH, setScrollMaxH] = useState('none')
  const [modalSrc, setModalSrc] = useState(null)
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const drag = useRef({ active: false, startX: 0, startY: 0, offset: 0, isHorizontal: null })
  const measuredRef = useRef(false)

  const total = categories.length

  const goTo = useCallback((idx) => {
    const i = Math.max(0, Math.min(idx, total - 1))
    setCurrent(i)
    if (trackRef.current) {
      trackRef.current.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
      trackRef.current.style.transform = `translateX(${-i * 100}%)`
    }
  }, [total])

  useEffect(() => {
    const cat = categories[current]
    if (!cat || !cat.scroll) { setScrollMaxH('none'); return }
    const calc = () => {
      const track = trackRef.current
      if (!track) return
      const slide = track.children[current]
      if (!slide) return
      const grid = slide.querySelector('.gallery-slide-scroll')
      if (!grid) return
      const items = grid.querySelectorAll('.gallery-slide-img-wrap')
      if (items.length < 2) return
      const rowH = items[0].offsetHeight
      const gap = 16
      setScrollMaxH(`${rowH * 2 + gap}px`)
    }
    const t = setTimeout(calc, 100)
    const t2 = setTimeout(() => {
      if (!measuredRef.current) {
        const track = trackRef.current
        if (track && track.children.length >= 2) {
          const h0 = track.children[0].offsetHeight
          const h1 = track.children[1].offsetHeight
          setCarouselHeight(`${Math.max(h0, h1)}px`)
          measuredRef.current = true
        }
      }
    }, 300)
    window.addEventListener('resize', calc)
    return () => { clearTimeout(t); clearTimeout(t2); window.removeEventListener('resize', calc) }
  }, [current])

  const clampDrag = useCallback((basePct) => {
    const min = -(total - 1) * 100
    return Math.max(min, Math.min(0, basePct))
  }, [total])

  const handlePointerDown = useCallback((clientX, clientY) => {
    drag.current = { active: true, startX: clientX, startY: clientY, offset: 0, isHorizontal: null }
    if (trackRef.current) trackRef.current.style.transition = 'none'
  }, [])

  const handlePointerMove = useCallback((clientX, clientY) => {
    if (!drag.current.active) return
    const diffX = clientX - drag.current.startX
    const diffY = clientY - drag.current.startY

    if (drag.current.isHorizontal === null && (Math.abs(diffX) > 8 || Math.abs(diffY) > 8)) {
      drag.current.isHorizontal = Math.abs(diffX) > Math.abs(diffY)
      if (!drag.current.isHorizontal) return
    }
    if (drag.current.isHorizontal === false) return

    const container = containerRef.current
    if (!container) return
    const pct = (diffX / container.offsetWidth) * 100
    drag.current.offset = pct
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${clampDrag((-current * 100) + pct)}%)`
    }
  }, [current, clampDrag])

  const handlePointerUp = useCallback(() => {
    if (!drag.current.active) return
    drag.current.active = false
    if (!drag.current.isHorizontal) return
    const container = containerRef.current
    if (!container) return
    const thresholdPx = container.offsetWidth * 0.15
    const totalPx = (drag.current.offset / 100) * container.offsetWidth
    if (Math.abs(totalPx) > thresholdPx) {
      goTo(current + (drag.current.offset > 0 ? -1 : 1))
    } else {
      goTo(current)
    }
  }, [current, goTo])

  const prev = () => goTo(current - 1)
  const next = () => goTo(current + 1)

  return (
    <section id="gallery" className="section-padding bg-cream">
      <div className="container-site">
        <div className="text-center mb-12 reveal">
          <span className="section-label">Our Portfolio</span>
          <h2 className="section-title text-navy">Our Works</h2>
        </div>
        <div
          className="gallery-carousel relative overflow-hidden rounded-2xl select-none cursor-grab active:cursor-grabbing mt-12 pb-5 touch-action-pan-y"
          style={{ height: carouselHeight, minHeight: 400 }}
          ref={containerRef}
          onTouchStart={(e) => { if (e.touches[0]) handlePointerDown(e.touches[0].clientX, e.touches[0].clientY) }}
          onTouchMove={(e) => { if (e.touches[0]) handlePointerMove(e.touches[0].clientX, e.touches[0].clientY) }}
          onTouchEnd={handlePointerUp}
          onMouseDown={(e) => handlePointerDown(e.clientX, e.clientY)}
          onMouseMove={(e) => { if (drag.current.active) handlePointerMove(e.clientX, e.clientY) }}
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
        >
          <div className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform" ref={trackRef}>
            {categories.map((cat, ci) => (
              <div key={ci} className="min-w-full px-1">
                <h3 className="font-display text-xl md:text-2xl font-bold text-gold mb-6 tracking-tight">{cat.title}</h3>
                {cat.scroll ? (
                  <div className="gallery-slide-scroll relative overflow-y-auto overflow-x-hidden rounded-lg" style={{ maxHeight: scrollMaxH }}>
                    <div className="grid grid-cols-2 gap-4">
                      {cat.images.map((img, ii) => (
                        <div
                          key={ii}
                          className="gallery-slide-img-wrap aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-[0_20px_48px_-8px_rgba(30,29,25,0.1),0_8px_24px_-4px_rgba(212,160,23,0.06)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                          onClick={() => img.src && setModalSrc(img.src)}
                        >
                          {img.src ? (
                            <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover block transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105" />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-gold/10 to-navy/5 flex items-center justify-center text-slate/40 text-xs uppercase tracking-widest text-center p-4">
                              <span>{img.alt}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="sticky bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-cream to-transparent pointer-events-none -mt-12 flex items-end justify-center pb-1">
                      <span className="text-xl text-gold leading-none animate-scrollBounce opacity-70">⌄</span>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    {cat.images.map((img, ii) => (
                      <div
                        key={ii}
                        className="gallery-slide-img-wrap aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-[0_20px_48px_-8px_rgba(30,29,25,0.1),0_8px_24px_-4px_rgba(212,160,23,0.06)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        onClick={() => img.src && setModalSrc(img.src)}
                      >
                        {img.src ? (
                          <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover block transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105" />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-gold/10 to-navy/5 flex items-center justify-center text-slate/40 text-xs uppercase tracking-widest text-center p-4">
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
                className={`gallery-arrow absolute top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm border border-navy/5 shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center text-navy cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:bg-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:scale-105 left-4${current === 0 ? ' !opacity-0 !pointer-events-none' : ''}`}
                onClick={prev}
                aria-label="Previous category"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button
                className={`gallery-arrow absolute top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm border border-navy/5 shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center text-navy cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:bg-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:scale-105 right-4${current === total - 1 ? ' !opacity-0 !pointer-events-none' : ''}`}
                onClick={next}
                aria-label="Next category"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </>
          )}
          {total > 1 && (
            <div className="flex justify-center gap-2.5 absolute bottom-4 left-0 right-0 pointer-events-auto">
              {categories.map((_, i) => (
                <button
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full border-none cursor-pointer transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] p-0 ${i === current ? 'bg-gold scale-130' : 'bg-slate/40 hover:bg-slate/70'}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to category ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {modalSrc && (
        <ImageModal src={modalSrc} alt="" onClose={() => setModalSrc(null)} />
      )}
    </section>
  )
}
