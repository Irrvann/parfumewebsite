import React from 'react'

const SocialProof = () => {
  const reviews = [
    { text: "Aromanya mewah, mirip parfum jutaan. Tahan lama banget dipakai kerja seharian.", author: "Raka D." },
    { text: "Packaging aman, pengiriman cepat. Wanginya laki banget tapi nggak nyengat.", author: "Dimas A." },
    { text: "Repeat order ke-3 kalinya. Pasangan saya suka banget sama wanginya.", author: "Budi S." },
  ]

  return (
    <section className="social-section">
      <div className="container">
        <div className="section-header center">
          <h2>Loved by Men</h2>
        </div>
        <div className="proof-grid">
          {reviews.map((rev, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="stars">★★★★★</div>
              <blockquote className="proof">"{rev.text}"</blockquote>
              <div className="author">— {rev.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof