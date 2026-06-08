import { useState, useEffect } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
]

export default function Header({ wa }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-4 md:pt-5 transition-all duration-500 ${scrolled ? 'pt-2 md:pt-3' : ''}`}>
      <div className={`
        flex items-center justify-between w-full max-w-6xl px-6 h-[72px] rounded-full
        bg-navy/10 backdrop-blur-[36px] saturate-125 border border-white/10
        transition-all duration-500
        ${scrolled ? 'bg-navy/20 backdrop-blur-[44px] shadow-lg shadow-black/10' : ''}
      `}>
        <a href="#home" className="flex items-center gap-2">
          <span className="text-gold font-display text-xl font-bold tracking-tight">Golden</span>
          <span className="text-white/80 font-body text-sm font-light hidden sm:inline">Furniture</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-white text-xs font-medium uppercase tracking-[1.2px] transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-gold after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-400"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={wa("Hi Golden Furniture, I'm interested in your solutions.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-navy text-[11px] font-semibold uppercase tracking-[1px] transition-all duration-300 hover:scale-[1.04] hover:bg-gold-light"
        >
          Enquire Now
          <span className="w-[18px] h-[18px] rounded-full bg-navy/15 flex items-center justify-center text-[10px] transition-transform duration-300 group-hover:translate-x-[2px]">⟶</span>
        </a>

        <button
          className={`flex lg:hidden flex-col justify-center w-9 h-9 cursor-pointer relative z-50 ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-[1.5px] bg-white mx-auto transition-all duration-350 ${menuOpen ? 'translate-y-[4.5px] rotate-45' : 'mb-[3px]'}`} />
          <span className={`block w-5 h-[1.5px] bg-white mx-auto transition-all duration-350 ${menuOpen ? 'opacity-0 scale-x-0' : 'mb-[3px]'}`} />
          <span className={`block w-5 h-[1.5px] bg-white mx-auto transition-all duration-350 ${menuOpen ? '-translate-y-[4.5px] -rotate-45' : ''}`} />
        </button>
      </div>

      <div className={`fixed inset-0 z-40 bg-navy/96 backdrop-blur-[40px] flex flex-col items-center justify-center gap-12 transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white cursor-pointer transition-colors hover:bg-white/20"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="text-white font-display text-3xl opacity-0 translate-y-6 transition-all duration-500"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(24px)',
              transitionDelay: menuOpen ? `${100 + i * 50}ms` : '0ms',
            }}
          >
            {l.label}
          </a>
        ))}
        <a
          href={wa("Hi Golden Furniture, I'm interested in your solutions.")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="mt-4 px-8 py-2.5 rounded-full bg-gold text-navy text-sm font-semibold uppercase tracking-[1px] opacity-0 translate-y-6 transition-all duration-500"
          style={{
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: menuOpen ? '350ms' : '0ms',
          }}
        >
          Enquire Now
        </a>
      </div>
    </header>
  )
}
