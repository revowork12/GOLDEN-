const testimonials = [
  {
    quote: "Golden Furniture transformed our entire campus. The quality of their classroom furniture is outstanding — durable, comfortable, and beautifully designed.",
    name: 'Dr. Priya Sharma',
    role: 'Principal, Delhi Public School',
  },
  {
    quote: 'We furnished our entire library with their modular shelving and reading tables. The team understood our vision perfectly and delivered ahead of schedule.',
    name: 'Prof. Arjun Nair',
    role: 'Librarian, IIT Mumbai',
  },
  {
    quote: 'The preschool furniture is perfect — colorful, safe, and the perfect size for our little learners. Our kids absolutely love their new classroom!',
    name: 'Ms. Sunita Reddy',
    role: 'Director, Little Steps Preschool',
  },
  {
    quote: "We've been a repeat customer for 5 years. Their office furniture is built to last, and the after-sales service is exceptional.",
    name: 'Mr. Rajesh Patel',
    role: 'CEO, EduCorp India',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-site">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title text-navy mb-4">Trusted by Leading Institutions</h2>
          <p className="text-slate/60 text-lg">Hear from our clients across India.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <svg className="w-8 h-8 text-gold/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-slate/70 text-sm leading-relaxed italic mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="border-t border-gray-100 pt-4">
                <strong className="block text-sm text-navy">{t.name}</strong>
                <span className="text-xs text-slate/50">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
