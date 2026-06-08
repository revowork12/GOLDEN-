export default function CTABanner({ wa }) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-gold to-gold-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(15,23,42,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(15,23,42,0.2) 0%, transparent 50%)`
      }} />
      <div className="container-site relative z-10 text-center">
        <div className="max-w-3xl mx-auto reveal">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy mb-4">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-navy/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Let's discuss your furniture needs. Get a free consultation and quote today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={wa("Hi Golden Furniture, I'd like a free consultation for my institution.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark !bg-navy !text-white !px-12 !py-5 !text-base hover:!bg-slate"
            >
              Get Free Consultation
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm">⟶</span>
            </a>
            <a href="#contact" className="inline-flex items-center px-10 py-5 rounded-full border-2 border-navy text-navy font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:bg-navy hover:text-white">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
