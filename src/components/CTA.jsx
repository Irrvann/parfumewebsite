import React from 'react'

const CTA = () => {
  const wa = 'https://wa.me/6287778086123?text=Halo%20Men%20Parfume...'
  
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box">
          <div className="cta-content">
            <h3>Masih bingung memilih?</h3>
            <p>Konsultasikan kepribadian dan aktivitasmu, kami akan merekomendasikan aroma yang paling tepat.</p>
          </div>
          <a className="btn white" href={wa} target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp"></i> Chat WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA