const solutions = [
  {
    title: 'Schools',
    desc: 'Complete classroom furniture including ergonomic desks, chairs, storage units, and teacher stations designed for safety and durability.',
    icon: '🏫',
    features: ['Ergonomic seating', 'Durable desktops', 'Teacher workstations', 'Storage solutions'],
  },
  {
    title: 'Colleges & Universities',
    desc: 'Lecture hall systems, library furniture, laboratory workstations, and common area seating built for heavy daily use.',
    icon: '🎓',
    features: ['Lecture hall systems', 'Lab workstations', 'Library furniture', 'Common area seating'],
  },
  {
    title: 'Preschools & Early Learning',
    desc: 'Colorful, safe, age-appropriate furniture that stimulates creativity and supports early childhood development.',
    icon: '🎨',
    features: ['Kid-friendly designs', 'Rounded safety edges', 'Colorful finishes', 'Lightweight & mobile'],
  },
  {
    title: 'Libraries',
    desc: 'Modular shelving, reading tables, carrels, lounge seating, and digital study pods for modern libraries.',
    icon: '📚',
    features: ['Modular shelving', 'Study carrels', 'Reading tables', 'Digital pods'],
  },
  {
    title: 'Office Setups',
    desc: 'Executive desks, conference tables, workstations, and visitor seating for administrative and faculty offices.',
    icon: '💼',
    features: ['Executive desks', 'Conference tables', 'Workstations', 'Visitor seating'],
  },
  {
    title: 'Hostels & Dormitories',
    desc: 'Beds, wardrobes, study tables, and storage units designed for compact, comfortable living spaces.',
    icon: '🛏️',
    features: ['Space-saving beds', 'Built-in wardrobes', 'Study tables', 'Storage units'],
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="container-site">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="section-label">Our Solutions</span>
          <h2 className="section-title text-navy mb-4">Comprehensive Institutional Furniture</h2>
          <p className="text-slate/60 text-lg">End-to-end furniture solutions tailored for every type of educational and professional environment.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="card reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="font-display text-xl font-bold text-navy mb-3">{s.title}</h3>
              <p className="text-slate/60 text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm text-slate/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
