import React from 'react'

const CTA = () => {
  const wa = 'https://wa.me/6287778086123?text=Halo%20Men%20Parfume%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut'
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <h3>Siap memilih aroma yang cocok?</h3>
          <p className="muted">Klik tombol di bawah untuk menghubungi kami via WhatsApp dan dapatkan prefill pesan.</p>
        </div>
        <a className="btn primary large" href={wa} target="_blank" rel="noreferrer">Hubungi via WhatsApp</a>
      </div>
    </section>
  )
}

export default CTA
