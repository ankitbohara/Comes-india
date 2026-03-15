import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductBySlug, PRODUCTS } from '../api/products';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import ProductCard from '../features/products/ProductCard';
import { useApp } from '../store/AppContext';
import { openWhatsApp } from '../services/whatsapp';

const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useApp();
  const product = getProductBySlug(slug ?? '');
  const [activeImg, setActiveImg] = useState(0);

  if (!product) return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'var(--red)' }}>Product Not Found</h2>
      <Link to="/products" className="btn-red">Browse All Products</Link>
    </div>
  );

  const related = PRODUCTS.filter(p => p.id !== product.id);

  return (
    <div style={{ background: 'var(--white)', minHeight: '100vh' }}>
      <div className="breadcrumb">
        <Link to="/" className="bc-link">Home</Link>
        <span className="bc-sep">›</span>
        <Link to="/products" className="bc-link">{t('nav.products')}</Link>
        <span className="bc-sep">›</span>
        <span className="bc-cur">{product.name}</span>
      </div>

      <div className="container">
        <div className="detail-grid">
          {/* Gallery */}
          <div>
            <div className="gallery-main">
              <img src={product.gallery[activeImg]} alt={product.name} />
            </div>
            <div className="thumb-row">
              {product.gallery.map((img, idx) => (
                <div key={idx} className={`thumb${activeImg === idx ? ' active' : ''}`} onClick={() => setActiveImg(idx)}>
                  <img src={img} alt="" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="prod-tag" style={{ marginBottom: '.6rem' }}>{t('pr.tag')}</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem,5vw,5rem)', lineHeight: .92, letterSpacing: '.02em', marginBottom: '.6rem' }}>{product.name}</h1>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '.95rem', color: 'var(--red)', letterSpacing: '.05em', marginBottom: '1.2rem' }}>{product.tagline}</p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.97rem', marginBottom: '2rem' }}>{product.description}</p>

            {/* WA CTA box */}
            <div style={{ background: 'var(--gray1)', border: '1px solid var(--border)', borderRadius: 6, padding: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', letterSpacing: '.2em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '.5rem' }}>Ready to enquire?</div>
              <p style={{ color: 'var(--black)', fontSize: '.9rem', lineHeight: 1.5, marginBottom: '1rem' }}>Chat with our technical team on WhatsApp for pricing and availability.</p>
              <WhatsAppButton message={product.whatsappMessage} label={t('pr.now')} />
            </div>

            {/* Features */}
            <div className="label-tag" style={{ marginBottom: '.8rem' }}>{t('pr.feat')}</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
              {product.features.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '.7rem', color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.5 }}>
                  <span style={{ color: 'var(--red)', flexShrink: 0, fontWeight: 700 }}>✓</span>{f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Specs + Applications */}
        <div 
        // style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}
        className="detail-specs-grid"
        >
          <div style={{ background: 'var(--gray1)', border: '1px solid var(--border)', borderRadius: 6, padding: '2rem' }}>
            <div className="label-tag" style={{ marginBottom: '1.2rem' }}>{t('pr.spec')}</div>
            <table className="spec-table">
              <tbody>
                {product.specs.map((s, i) => (
                  <tr key={s.label} className="spec-row" style={{ borderBottom: i < product.specs.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <td className="spec-l">{s.label}</td>
                    <td className="spec-v">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 6, padding: '2rem' }}>
            <div className="label-tag" style={{ marginBottom: '1.2rem' }}>{t('pr.app')}</div>
            {product.applications.map((a, i) => (
              <div key={a} className="app-item">
                <span className="app-n">{String(i + 1).padStart(2, '0')}</span>
                <span style={{ color: 'var(--black)', fontSize: '.9rem', fontWeight: 600 }}>{a}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="cta-box">
          <div>
            <h3>Ready to upgrade your polishing line?</h3>
            <p>Talk to our engineers on WhatsApp — fast response, every time.</p>
          </div>
          <button className="btn-wa" style={{ background: '#fff', color: '#25D366', fontWeight: 700 }}
            onClick={() => openWhatsApp(product.whatsappMessage)}>
            {t('pr.now')}
          </button>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div style={{ paddingBottom: '4rem' }}>
            <div className="label-tag">Other Heads</div>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>You May Also <span>Consider</span></h2>
            <div 
            // style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem' }}
            className="detail-related-grid"
            >
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media(max-width:768px){
          .detail-grid > div:first-child + div + div { grid-template-columns:1fr !important; }
          .cta-box { flex-direction:column; }
        }
      `}</style>
    </div>
  );
};

export default ProductDetailPage;
