import { useEffect, useState } from 'react'
import StickyFrameStack from './StickyFrameStack'

function getOrientation() {
  if (typeof window === 'undefined') return 'portrait'
  return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
}

function isMobileDevice() {
  if (typeof window === 'undefined') return false
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
}

export default function HeroSection({ wa }) {
  const [orientation, setOrientation] = useState('portrait')

  useEffect(() => {
    setOrientation(getOrientation())
    const onResize = () => setOrientation(getOrientation())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const isPortrait = orientation === 'portrait'
  const isMobile = isMobileDevice()

  if (isPortrait && isMobile) {
    return <StickyFrameStack wa={wa} />
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-slate/90" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 25% 50%, rgba(212,160,23,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(212,160,23,0.15) 0%, transparent 50%)`
      }} />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-32 pb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 text-gold text-xs uppercase tracking-[2px] font-medium mb-8 reveal">
          India's Trusted Institutional Furniture Partner
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.08] tracking-tight mb-6 reveal reveal-delay-1">
          Furniture for<br />
          <span className="text-gold">Learning Spaces</span>
        </h1>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed reveal reveal-delay-2">
          Premium, durable, ergonomic furniture solutions for schools, colleges, preschools, libraries, and offices — designed to inspire better learning.
        </p>
        <div className="flex flex-wrap gap-4 justify-center reveal reveal-delay-3">
          <a
            href={wa("Hi Golden Furniture, I'm interested in your institutional furniture solutions.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !px-10 !py-5 !text-base"
          >
            Get a Free Consultation
            <span className="w-7 h-7 rounded-full bg-navy/15 flex items-center justify-center text-sm transition-transform duration-300 group-hover:translate-x-1">⟶</span>
          </a>
          <a href="#solutions" className="btn-outline !px-10 !py-5 !text-base">
            Explore Solutions
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  )
}
