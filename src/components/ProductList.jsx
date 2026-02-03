import React, { useEffect, useState } from 'react'
import client from '../contentfulClient'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const formatRupiah = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  useEffect(() => {
    let mounted = true
    
    // Pastikan di Contentful field imagenya sudah tipe "Media"
    client.getEntries({ content_type: 'parfumes' })
      .then((res) => {
        if (!mounted) return

        const items = res.items.map((it) => {
          const f = it.fields

          // --- LOGIC BARU UNTUK MEDIA TYPE ---
          // Mengambil URL dari object Media Contentful
          let imageUrl = 'https://via.placeholder.com/400x500?text=No+Image' // Gambar default jika kosong
          
          if (f.image && f.image.fields && f.image.fields.file) {
            // Contentful return URL tanpa "https:", jadi kita tambahkan manual
            const rawUrl = f.image.fields.file.url
            imageUrl = rawUrl.startsWith('//') ? 'https:' + rawUrl : rawUrl
            
            // OPTIMASI: Tambahkan parameter resize & format webp agar ringan
            imageUrl = `${imageUrl}?fm=webp&w=600&q=85` 
          }
          // ------------------------------------

          return {
            name: f.name || 'Unnamed Product',
            description: f.description || null,
            price: f.price || 0,
            category: f.category?.fields?.name || 'General', // Asumsi category pakai Reference
            image: imageUrl, 
            featured: !!f.featured,
          }
        })

        setProducts(items)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Contentful Error:', err)
        setLoading(false)
      })

    return () => { mounted = false }
  }, [])

  // ... (Bagian return JSX di bawah SAMA PERSIS seperti sebelumnya)
  return (
    <section className="products-section" id="products">
      <div className="container">
        <div className="section-header">
          <h2>Signature Collection</h2>
          <p className="section-sub">Pilih aroma yang merepresentasikan dirimu.</p>
        </div>

        {loading ? (
          <div className="loading-state">Memuat koleksi terbaik...</div>
        ) : (
          <div className="products-grid">
            {products.map((p, idx) => (
              <article key={idx} className={`product-card ${p.featured ? 'featured-item' : ''}`}>
                <div className="product-image-wrapper">
                  {p.featured && <span className="badge">Best Seller</span>}
                  
                  {/* Image Source sudah bersih dari logic di atas */}
                  <img src={p.image} alt={p.name} loading="lazy" />
                  
                  <div className="product-overlay">
                     <a 
                        className="btn-quick-view"
                        href={`https://wa.me/6287778086123?text=Saya%20tertarik%20${encodeURIComponent(p.name)}`}
                        target="_blank" rel="noreferrer"
                     >
                       Beli Sekarang
                     </a>
                  </div>
                </div>

                <div className="product-details">
                  <span className="category">{p.category}</span>
                  <h3>{p.name}</h3>
                  <div className="price">{formatRupiah(p.price)}</div>
                  <div className="desc-preview">
                    {p.description && documentToReactComponents(p.description)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductList