export default function WhatsAppSticky({ wa, hidden }) {
  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 bg-navy px-6 py-3 shadow-lg shadow-black/20 transition-transform duration-400 ${hidden ? 'translate-y-full' : 'translate-y-0'} md:hidden`}>
      <a
        href={wa("Hi Golden Furniture, I'm interested in your solutions.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full py-3.5 rounded-full bg-gold text-navy text-sm font-semibold uppercase tracking-[1px]"
      >
        Enquire Now
      </a>
    </div>
  )
}
