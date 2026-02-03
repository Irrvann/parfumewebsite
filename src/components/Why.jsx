import React from 'react'

const Why = () => {
  return (
    <section className="why-section">
      <div className="container">
        <h2>Mengapa Men Parfume?</h2>
        <ul className="why-list">
          <li>
            <i className="fas fa-star icon" aria-hidden></i>
            <div>
              <strong>Karakter kuat</strong>
              <p className="muted">Setiap wangi memiliki karakter tersendiri yang mudah dikenali.</p>
            </div>
          </li>
          <li>
            <i className="fas fa-leaf icon" aria-hidden></i>
            <div>
              <strong>Bahan berkualitas</strong>
              <p className="muted">Formula yang tahan lama dengan bahan pilihan.</p>
            </div>
          </li>
          <li>
            <i className="fas fa-thumbs-up icon" aria-hidden></i>
            <div>
              <strong>Dipercaya konsumen</strong>
              <p className="muted">Ulasan positif dan repeat order dari pelanggan.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Why
