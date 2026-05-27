import React from 'react';

const steps = [
  { num: '01', title: 'Consult', desc: 'We discuss your vision, requirements, and budget in detail.' },
  { num: '02', title: 'Design', desc: 'Our team creates detailed designs and 3D visualizations.' },
  { num: '03', title: 'Craft', desc: 'Skilled artisans bring the design to life with precision.' },
  { num: '04', title: 'Install', desc: 'We deliver and install everything to your complete satisfaction.' },
];

export default function Process() {
  return (
    <section className="process" id="process" aria-label="Our process" itemScope itemType="https://schema.org/HowTo">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Our Process</div>
          <h2>How We Work</h2>
        </div>
        <div className="process-steps" itemProp="step" itemScope itemType="https://schema.org/ItemList">
          {steps.map((s, i) => (
            <div key={i} className={`process-step reveal`} style={{ transitionDelay: `${i * 120}ms` }} itemProp="itemListElement" itemScope itemType="https://schema.org/HowToStep">
              <meta itemProp="position" content={String(i + 1)} />
              <div className="process-step-number" aria-hidden="true">{s.num}</div>
              <div>
                <h3 itemProp="name">{s.title}</h3>
                <p itemProp="text">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
