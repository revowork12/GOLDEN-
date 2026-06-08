const reasons = [
  {
    title: 'Superior Quality',
    desc: 'Premium materials, precision engineering, and rigorous quality checks ensure furniture that lasts for decades.',
  },
  {
    title: 'Safety First',
    desc: 'All furniture meets strict safety standards with rounded edges, non-toxic finishes, and stable construction.',
  },
  {
    title: 'Ergonomic Design',
    desc: 'Every piece is designed with student comfort and posture in mind, reducing fatigue and improving focus.',
  },
  {
    title: 'Custom Solutions',
    desc: 'We tailor designs, dimensions, and finishes to match your institution\'s unique requirements and branding.',
  },
  {
    title: 'End-to-End Service',
    desc: 'From consultation and design to manufacturing, delivery, and installation — we handle everything.',
  },
  {
    title: 'Pan-India Delivery',
    desc: 'With a robust logistics network, we deliver and install furniture across all major cities in India.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-navy">
      <div className="container-site">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="section-label text-gold">Why Choose Us</span>
          <h2 className="section-title text-white mb-4">Built for Institutions That Demand the Best</h2>
          <p className="text-white/50 text-lg">Six reasons why leading institutions across India trust Golden Furniture.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/5 reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="font-display text-lg font-bold text-gold mb-3">{r.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
