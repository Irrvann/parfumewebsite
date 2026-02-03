import React from 'react'

const Hero = () => {
  const wa = 'https://wa.me/6287778086123?text=Halo%20Men%20Parfume%2C%20saya%20tertarik%20membeli'

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-subtitle">Premium Collection</span>
          <h1 className="brand">Men Parfume.</h1>
          <p className="tagline">Definisikan karaktermu dengan aroma yang tak terlupakan. Elegan, maskulin, dan tahan lama.</p>
          <div className="hero-actions">
            <a className="btn primary" href={wa} target="_blank" rel="noreferrer">Beli Sekarang</a>
            <a className="btn text-link" href="#products">Lihat Katalog</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero