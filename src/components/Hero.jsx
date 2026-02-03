import React from 'react'

const Hero = () => {
  const wa = 'https://wa.me/6287778086123?text=Halo%20Men%20Parfume%2C%20saya%20tertarik%20membeli'

  return (
    <section className="hero-section">
      <div className="container hero-inner">
        <div>
          <h1 className="brand">Men Parfume</h1>
          <p className="tagline">Parfume berkarakter—unik, tahan lama, dan beda dari yang lain.</p>
          <a className="btn primary" href={wa} target="_blank" rel="noreferrer">Beli Sekarang</a>
        </div>
        <div className="hero-image" aria-hidden>
          {/* decorative area */}
        </div>
      </div>
    </section>
  )
}

export default Hero
