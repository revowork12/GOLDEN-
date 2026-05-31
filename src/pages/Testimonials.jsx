import React, { useEffect } from 'react';

const HERO_BG = 'linear-gradient(135deg, rgba(30,29,25,0.85) 0%, rgba(42,40,36,0.85) 100%), url(/frames/end-landscape.webp) center/cover no-repeat';

const reviews = [
  {
    name: 'Anand Krishnan',
    location: 'Kollam',
    rating: 5,
    text: 'We commissioned Qalimoz for a complete living room makeover — custom L-shaped sofa, TV unit, and coffee table. The team understood exactly what we wanted. The craftsmanship is outstanding, and the sofa fits our space perfectly. Highly recommend their custom furniture services in Kollam.',
    product: 'Custom Living Room Set'
  },
  {
    name: 'Priya Nair',
    location: 'Thiruvananthapuram',
    rating: 5,
    text: 'Qalimoz designed and built custom wardrobes for all three bedrooms in our new home. The attention to detail is remarkable — from the internal storage layout to the finish quality. They even added ventilated sections for Kerala\'s humidity, which was something we hadn\'t thought of. Truly professional custom furniture makers.',
    product: 'Custom Wardrobes'
  },
  {
    name: 'Rahul Menon',
    location: 'Karunagappally',
    rating: 5,
    text: 'The custom dining table Qalimoz built for us is the centerpiece of our home. Solid teak with a live edge finish — absolutely stunning. They took the time to show us wood samples and helped us choose the perfect size for our space. Delivery and installation were seamless.',
    product: 'Custom Dining Table'
  },
  {
    name: 'Sara Thomas',
    location: 'Kayamkulam',
    rating: 5,
    text: 'From initial consultation to final installation, working with Qalimoz was a great experience. They custom built a queen-size bed frame with storage and matching bedside tables for our master bedroom. The pieces are solid, beautifully finished, and exactly what we wanted. Fair pricing for the quality you get.',
    product: 'Custom Bedroom Set'
  },
  {
    name: 'Vijay Kumar',
    location: 'Kollam',
    rating: 5,
    text: 'I had a tricky corner space in my living room that no ready-made furniture could fit. Qalimoz designed a custom corner sofa unit that maximized every inch. They visited my home for measurements, created a 3D design, and delivered exactly what was shown. The craftsmanship is world-class.',
    product: 'Custom Corner Sofa'
  },
  {
    name: 'Deepa Suresh',
    location: 'Thiruvananthapuram',
    rating: 5,
    text: 'Qalimoz handled the complete interior design for our 3BHK apartment — furniture, wardrobes, kitchen cabinets, and TV units. The team was professional, communicative, and delivered on time. Every piece is custom made and fits our space perfectly. Couldn\'t be happier with the result.',
    product: 'Complete Home Interior'
  },
  {
    name: 'Joseph Mathew',
    location: 'Kollam',
    rating: 5,
    text: 'The custom recliner sofa Qalimoz built is incredibly comfortable. I have back issues and they adjusted the seat depth, cushion firmness, and recline angle to my exact requirements. The quality of the leather and stitching is excellent. Worth every rupee.',
    product: 'Custom Recliner Sofa'
  },
  {
    name: 'Aishwarya Rajan',
    location: 'Karunagappally',
    rating: 5,
    text: 'We wanted a custom dressing table with specific drawer configurations and mirror placement. Qalimoz delivered exactly what we envisioned. The finish is flawless and the wood quality is outstanding. They also gave us great advice on maintaining the furniture in Kerala\'s climate.',
    product: 'Custom Dressing Table'
  },
  {
    name: 'Sandeep Pillai',
    location: 'Kayamkulam',
    rating: 5,
    text: 'Ordered a custom TV unit and bookshelf for my home office. Qalimoz designed both pieces to complement each other, with cable management built into the TV unit. The team was responsive on WhatsApp throughout the process and delivered ahead of schedule.',
    product: 'Custom TV Unit & Bookshelf'
  },
  {
    name: 'Meera Nambiar',
    location: 'Kollam',
    rating: 4,
    text: 'Qalimoz built a custom shoe rack and entryway cabinet for our home. Great quality and the design consultation was thorough. The only reason for 4 stars instead of 5 is that the delivery was a few days later than initially promised. But the end result is beautiful and well worth the wait.',
    product: 'Custom Entryway Cabinet'
  },
  {
    name: 'Arun Zachariah',
    location: 'Thiruvananthapuram',
    rating: 5,
    text: 'After years of buying ready-made furniture that never quite fit or lasted, we decided to go custom with Qalimoz. Best decision we made. Our entire living room is now furnished with custom pieces that fit like they were built with the house — because they were. The quality difference is night and day.',
    product: 'Full Living Room Furniture'
  },
  {
    name: 'Lakshmi Varrier',
    location: 'Kollam',
    rating: 5,
    text: 'Qalimoz designed and installed custom kitchen cabinets for our home renovation. The modular layout maximizes storage, the PU finish is holding up beautifully against Kollam\'s humidity, and the hardware is smooth and quiet. Excellent custom cabinetry work.',
    product: 'Custom Kitchen Cabinets'
  }
];

function Star({ filled }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? '#C5963C' : 'none'} stroke="#C5963C" strokeWidth="1.5" style={{ display: 'inline-block' }}>
      <polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" />
    </svg>
  );
}

function Rating({ count }) {
  return (
    <div style={{ display: 'flex', gap: 2, marginBottom: 12 }}>
      {[1,2,3,4,5].map(i => <Star key={i} filled={i <= count} />)}
    </div>
  );
}

export default function Testimonials({ wa }) {
  useEffect(() => { document.title = 'Customer Reviews & Testimonials | Qalimoz Groups | Custom Furniture Kerala'; }, []);

  return (
    <main id="main" role="main" aria-label="Customer testimonials" className="page-content">
      <section className="page-hero" style={{ background: HERO_BG }}>
        <div className="container">
          <p style={{ color: '#C5963C', fontSize: 14, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>Trusted by Kerala Homeowners</p>
          <h1>What Our Customers Say</h1>
          <p className="page-subtitle">Real reviews from real customers across Kollam, Thiruvananthapuram, Karunagappally, and Kayamkulam. Over 2,000 happy families trust Qalimoz for custom furniture and interiors.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 8 }}>
              {[1,2,3,4,5].map(i => <Star key={i} filled={true} />)}
            </div>
            <p style={{ fontSize: 18, fontWeight: 600, color: '#1E1D19' }}>4.9 out of 5 — Based on 200+ reviews</p>
          </div>

          <div className="page-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))' }}>
            {reviews.map((r, i) => (
              <div key={i} className="review-card">
                <Rating count={r.rating} />
                <p className="review-text">"{r.text}"</p>
                <div className="review-footer">
                  <strong>{r.name}</strong>
                  <span>{r.location}</span>
                  <span className="review-product">{r.product}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-cta-section" style={{ background: '#F9F6DB' }}>
        <div className="container">
          <h2>Share Your Experience</h2>
          <p>Loved your custom furniture? Leave us a review on Google or share your feedback on WhatsApp. Your words help other Kerala homeowners make the right choice.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
            <a href={wa("Hi Qalimoz, I'd like to share my experience.")} className="page-cta" target="_blank" rel="noopener noreferrer" style={{ borderColor: '#C5963C', color: '#C5963C' }}>Share on WhatsApp</a>
            <a href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID" className="page-cta" target="_blank" rel="noopener noreferrer" style={{ borderColor: '#1E1D19', color: '#1E1D19', background: '#fff' }}>Write a Google Review</a>
          </div>
        </div>
      </section>

      <section className="home-button-section">
        <a href="/" className="home-button">⬅ Back to Home</a>
      </section>
    </main>
  );
}
