const products = [
  {
    name: 'Classroom Desk Systems',
    desc: 'Adjustable, durable desks designed for modern classrooms with ample storage and ergonomic angles.',
    category: 'School',
  },
  {
    name: 'Lecture Hall Seating',
    desc: 'Comfortable, space-efficient seating with fold-away writing tablets for lecture environments.',
    category: 'College',
  },
  {
    name: 'Library Shelving Units',
    desc: 'Modular, adjustable shelving systems in various finishes to maximize your library space.',
    category: 'Library',
  },
  {
    name: 'Preschool Play Tables',
    desc: 'Colorful, round-edged tables and chairs designed for collaborative early learning activities.',
    category: 'Preschool',
  },
  {
    name: 'Executive Office Desks',
    desc: 'Premium wooden and metal desks with cable management for administrative and faculty offices.',
    category: 'Office',
  },
  {
    name: 'Dormitory Bed Systems',
    desc: 'Smart, space-saving bed units with integrated storage, study areas, and wardrobes.',
    category: 'Hostel',
  },
]

export default function ProductShowcase({ wa }) {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-site">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="section-label">Product Showcase</span>
          <h2 className="section-title text-navy mb-4">Our Product Range</h2>
          <p className="text-slate/60 text-lg">Browse our most popular institutional furniture solutions.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              className="card reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-xs font-semibold uppercase tracking-[2px] text-gold mb-3">{p.category}</div>
              <h3 className="font-display text-xl font-bold text-navy mb-3">{p.name}</h3>
              <p className="text-slate/60 text-sm leading-relaxed mb-6">{p.desc}</p>
              <a
                href={wa(`Hi Golden Furniture, I'd like to know more about ${p.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-[1.5px] text-gold hover:text-gold-light transition-colors inline-flex items-center gap-2"
              >
                Enquire Now
                <span>⟶</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
