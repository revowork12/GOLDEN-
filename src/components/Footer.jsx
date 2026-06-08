export default function Footer() {
  return (
    <footer className="bg-navy py-16 px-6 border-t border-gold/10" role="contentinfo">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h4 className="font-display text-xl font-bold text-gold mb-3">Golden Furniture</h4>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">Furniture Solutions for Every Learning Space. Premium institutional furniture across India.</p>
        </div>
        <div>
          <h5 className="text-xs font-semibold uppercase tracking-[2px] text-white/30 mb-4">Solutions</h5>
          <a href="#solutions" className="block text-sm text-white/55 hover:text-gold mb-2.5 transition-colors">Schools</a>
          <a href="#solutions" className="block text-sm text-white/55 hover:text-gold mb-2.5 transition-colors">Colleges</a>
          <a href="#solutions" className="block text-sm text-white/55 hover:text-gold mb-2.5 transition-colors">Libraries</a>
          <a href="#solutions" className="block text-sm text-white/55 hover:text-gold mb-2.5 transition-colors">Offices</a>
        </div>
        <div>
          <h5 className="text-xs font-semibold uppercase tracking-[2px] text-white/30 mb-4">Links</h5>
          <a href="#about" className="block text-sm text-white/55 hover:text-gold mb-2.5 transition-colors">About</a>
          <a href="#products" className="block text-sm text-white/55 hover:text-gold mb-2.5 transition-colors">Products</a>
          <a href="#process" className="block text-sm text-white/55 hover:text-gold mb-2.5 transition-colors">Process</a>
          <a href="#contact" className="block text-sm text-white/55 hover:text-gold mb-2.5 transition-colors">Contact</a>
        </div>
        <div>
          <h5 className="text-xs font-semibold uppercase tracking-[2px] text-white/30 mb-4">Contact</h5>
          <a href="mailto:hello@goldenfurniture.in" className="block text-sm text-white/55 hover:text-gold mb-2.5 transition-colors">hello@goldenfurniture.in</a>
          <a href="tel:+918139887069" className="block text-sm text-white/55 hover:text-gold mb-2.5 transition-colors">+91 81398 87069</a>
          <p className="text-sm text-white/40 mt-1">India</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-xs text-white/25">&copy; 2026 Golden Furniture. All rights reserved.</p>
      </div>
    </footer>
  )
}
