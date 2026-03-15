import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../features/products/ProductCard';
import { PRODUCTS } from '../api/products';
import { useApp } from '../store/AppContext';

const ProductsPage: React.FC = () => {
  const { t } = useApp();
  return (
    <div style={{ background: 'var(--white)', minHeight: '100vh' }}>
      <div style={{ background: 'var(--gray1)', borderBottom: '1px solid var(--border)', padding: '3rem 0' }}>
        <div className="container">
          <div className="label-tag">{t('pr.lbl')}</div>
          <h1 className="section-title">{t('pr.t1')} <span>{t('pr.t2')}</span></h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, fontSize: '1rem', lineHeight: 1.7 }}>
            Every head is 100% original COMES Italy — imported and serviced by our certified engineers across India.
          </p>
        </div>
      </div>
      <div className="container section-pad">
        <div className="prod-grid">
          {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
