import React, { useEffect, useState } from 'react'
import client from '../contentfulClient'

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    let mounted = true
    client
      .getEntries({ content_type: 'parfumes' })
      .then((res) => {
        if (!mounted) return
        const items = res.items.map((it) => {
          const f = it.fields
          // Only take fields specified in the requirement
          const imageUrl = f.image && f.image.fields && f.image.fields.file && f.image.fields.file.url
            ? (f.image.fields.file.url.startsWith('//') ? 'https:' + f.image.fields.file.url : f.image.fields.file.url)
            : null
          return {
            name: f.name || '',
            description: f.description || '',
            price: f.price || '',
            category: f.category || '',
            image: imageUrl,
            featured: !!f.featured
          }
        })
        setProducts(items)
      })
      .catch((err) => {
        console.error('Contentful fetch error', err)
      })

    return () => { mounted = false }
  }, [])

  return (
    <section className="products-section">
      <div className="container">
        <h2>Produk Unggulan</h2>
        <div className="products-grid">
          {products.length === 0 && <p>Memuat produk...</p>}
          {products.map((p, idx) => (
            <article key={idx} className={`product-card ${p.featured ? 'featured' : ''}`}>
              {p.image && <img src={p.image} alt={p.name} className="product-image" />}
              <div className="product-body">
                <h3>{p.name}</h3>
                <p className="muted">{p.category}</p>
                <p className="desc">{p.description}</p>
                <div className="product-foot">
                  <div className="price">Rp {p.price}</div>
                  <a className="btn secondary" href={`https://wa.me/6287778086123?text=Saya%20tertarik%20membeli%20${encodeURIComponent(p.name)}`} target="_blank" rel="noreferrer">Beli</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductList
