import { useState } from 'react'

const faqs = [
  {
    q: 'What types of institutions do you serve?',
    a: 'We serve schools, colleges, universities, preschools, libraries, corporate offices, hostels, and government institutions across India.',
  },
  {
    q: 'Do you offer custom furniture designs?',
    a: 'Yes, we specialize in custom designs. Our team works with you to create furniture that matches your space, branding, and functional requirements.',
  },
  {
    q: 'What is the typical delivery timeline?',
    a: 'Timelines vary based on order size and customization. Standard orders are delivered within 4-6 weeks. Custom projects typically take 8-12 weeks from design approval.',
  },
  {
    q: 'Do you provide installation services?',
    a: 'Yes, we provide complete end-to-end service including delivery, on-site assembly, and installation by our trained team.',
  },
  {
    q: 'What is your warranty policy?',
    a: 'We offer a 5-year warranty on all our furniture covering manufacturing defects. Our team is always available for post-installation support.',
  },
  {
    q: 'Do you serve institutions outside your region?',
    a: 'Yes, we deliver and install furniture across all major cities in India through our extensive logistics network.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="section-padding bg-white">
      <div className="container-site max-w-3xl">
        <div className="text-center mb-16 reveal">
          <span className="section-label">FAQ</span>
          <h2 className="section-title text-navy mb-4">Frequently Asked Questions</h2>
          <p className="text-slate/60 text-lg">Everything you need to know about working with Golden Furniture.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-2xl overflow-hidden reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-cream/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-display text-base font-bold text-navy pr-4">{faq.q}</span>
                <span className={`w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-400"
                style={{
                  maxHeight: openIndex === i ? '200px' : '0px',
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <p className="px-6 pb-5 text-slate/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
