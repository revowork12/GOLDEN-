const steps = [
  { num: '01', title: 'Consult', desc: 'We discuss your requirements, budget, and timeline in detail.' },
  { num: '02', title: 'Design', desc: 'Our team creates layouts, 3D visuals, and material selections.' },
  { num: '03', title: 'Manufacture', desc: 'Precision crafting using premium materials and quality control.' },
  { num: '04', title: 'Install', desc: 'Professional delivery, assembly, and placement at your institution.' },
]

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-navy">
      <div className="container-site">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="section-label text-gold">Our Process</span>
          <h2 className="section-title text-white mb-4">How We Work</h2>
          <p className="text-white/50 text-lg">A streamlined, transparent process from consultation to completion.</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-0 relative max-w-4xl mx-auto">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gold/25" />
          {steps.map((s, i) => (
            <div
              key={i}
              className="flex-1 text-center relative px-4 reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-gold text-navy font-display text-xl font-bold flex items-center justify-center mx-auto mb-5 relative z-10">
                {s.num}
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed max-w-[200px] mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
