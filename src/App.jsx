import { useEffect, useRef, useState, useCallback } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutGolden from './components/AboutGolden'
import Solutions from './components/Solutions'
import MagazineGrid from './components/MagazineGrid'
import WhyChooseUs from './components/WhyChooseUs'
import CompleteSetup from './components/CompleteSetup'
import ProductShowcase from './components/ProductShowcase'
import Gallery from './components/Gallery'
import ProcessSection from './components/ProcessSection'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTABanner from './components/CTABanner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppSticky from './components/WhatsAppSticky'

const WHATSAPP_NUMBER = '918139887069'
const wa = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`

function App() {
  const contactRef = useRef(null)
  const [showSticky, setShowSticky] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      { threshold: 0.1 }
    )
    if (contactRef.current) observer.observe(contactRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))
    return () => revealObserver.disconnect()
  })

  return (
    <>
      <Header wa={wa} />
      <main>
        <HeroSection wa={wa} />
        <AboutGolden />
        <Solutions />
        <section className="section-padding bg-white">
          <div className="container-site flex justify-center">
            <MagazineGrid />
          </div>
        </section>
        <WhyChooseUs />
        <CompleteSetup />
        <ProductShowcase wa={wa} />
        <Gallery />
        <ProcessSection />
        <Testimonials />
        <FAQ />
        <CTABanner wa={wa} />
        <Contact wa={wa} ref={contactRef} />
      </main>
      <Footer />
      <WhatsAppSticky wa={wa} hidden={!showSticky} />
    </>
  )
}

export default App
