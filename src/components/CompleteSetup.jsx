const services = [
  {
    title: 'Site Assessment',
    desc: 'Our team visits your institution, measures spaces, and understands your requirements.',
  },
  {
    title: 'Custom Design',
    desc: 'We create detailed layouts, 3D renderings, and material recommendations tailored to your space.',
  },
  {
    title: 'Manufacturing',
    desc: 'Using premium materials and modern techniques, we craft furniture to exact specifications.',
  },
  {
    title: 'Delivery & Installation',
    desc: 'We handle logistics, on-site assembly, and placement so you can focus on what matters.',
  },
]

export default function CompleteSetup() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative reveal">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gold/15 to-navy/5 border border-gold/10 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <p className="text-slate/40 text-sm">Complete Setup Services</p>
              </div>
            </div>
          </div>
          <div className="reveal reveal-delay-1">
            <span className="section-label">Complete Setup</span>
            <h2 className="section-title text-navy mb-6">From Consultation to Installation</h2>
            <p className="text-slate/60 text-lg leading-relaxed mb-10">
              We manage every step of your furniture project, ensuring a seamless experience from start to finish.
            </p>
            <div className="space-y-8">
              {services.map((s, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-gold font-bold">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy mb-1">{s.title}</h3>
                    <p className="text-slate/60 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
