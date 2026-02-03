import React from 'react'

const Why = () => {
  const reasons = [
    {
      icon: "fas fa-fingerprint",
      title: "Karakter Kuat",
      desc: "Setiap varian dirancang memiliki signature scent yang meninggalkan kesan mendalam."
    },
    {
      icon: "fas fa-flask",
      title: "Ingredients Premium",
      desc: "Diformulasikan dengan bibit parfum terbaik untuk ketahanan aroma hingga 12 jam."
    },
    {
      icon: "fas fa-users",
      title: "Best Seller",
      desc: "Ribuan pria telah mempercayakan aroma hariannya kepada kami. Kualitas teruji."
    }
  ]

  return (
    <section className="why-section">
      <div className="container">
        <div className="section-header center">
          <h2>The Experience</h2>
          <div className="divider"></div>
        </div>
        
        <div className="why-grid">
          {reasons.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="icon-wrapper">
                <i className={`${item.icon} icon`} aria-hidden></i>
              </div>
              <h3>{item.title}</h3>
              <p className="muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Why