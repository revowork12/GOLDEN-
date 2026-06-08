import { forwardRef } from 'react'

const Contact = forwardRef(({ wa }, ref) => {
  return (
    <section id="contact" className="section-padding bg-navy" ref={ref}>
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="section-label text-gold">Get in Touch</span>
            <h2 className="section-title text-white mb-4">Let's Build Your Ideal Space</h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Reach out to us for a free consultation. Our team will understand your requirements and provide a customized solution.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/70 text-sm font-medium">WhatsApp / Call</p>
                  <a href={wa("Hi Golden Furniture, I'm interested in your solutions.")} target="_blank" rel="noopener noreferrer" className="text-gold text-sm hover:underline">
                    +91 9XXX XXX XXX
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/70 text-sm font-medium">Email</p>
                  <a href="mailto:hello@goldenfurniture.in" className="text-gold text-sm hover:underline">
                    hello@goldenfurniture.in
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal reveal-delay-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
              <h3 className="font-display text-xl font-bold text-white mb-6">Send a Message</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Institution Name"
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                />
                <textarea
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/50 transition-colors resize-none"
                />
                <a
                  href={wa("Hi Golden Furniture, I'd like to know more about your institutional furniture solutions.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center !py-4"
                >
                  Send via WhatsApp
                  <span className="w-6 h-6 rounded-full bg-navy/15 flex items-center justify-center text-xs">⟶</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

Contact.displayName = 'Contact'
export default Contact
