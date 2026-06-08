import AnimatedCounter from './AnimatedCounter'

export default function AboutGolden() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="section-label">About Golden Furniture</span>
            <h2 className="section-title text-navy mb-6">Crafting Spaces Where Learning Thrives</h2>
            <p className="text-slate/70 text-lg leading-relaxed mb-6">
              For over a decade, Golden Furniture has been India's preferred partner for institutional furniture. We design and manufacture furniture that transforms ordinary rooms into inspiring learning environments.
            </p>
            <p className="text-slate/60 leading-relaxed mb-8">
              From ergonomic classroom seating to modular library systems, every piece is built with durability, safety, and aesthetics in mind. Our team works closely with architects, educators, and institution leaders to deliver solutions that stand the test of time.
            </p>
            <div className="flex flex-wrap gap-12">
              <div>
                <div className="font-display text-4xl font-bold text-gold"><AnimatedCounter value={10} suffix="+" /></div>
                <div className="text-slate/50 text-sm uppercase tracking-[2px] font-medium mt-1">Years of Excellence</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-gold"><AnimatedCounter value={500} suffix="+" duration={2500} /></div>
                <div className="text-slate/50 text-sm uppercase tracking-[2px] font-medium mt-1">Institutions Served</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-gold"><AnimatedCounter value={50} suffix="K+" duration={3000} /></div>
                <div className="text-slate/50 text-sm uppercase tracking-[2px] font-medium mt-1">Seats Installed</div>
              </div>
            </div>
          </div>
          <div className="relative reveal reveal-delay-1">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gold/20 to-navy/10 border border-gold/10 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="font-display text-6xl text-gold/30 mb-4">GF</div>
                <p className="text-slate/40 text-sm">Golden Furniture — Premium Institutions</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
