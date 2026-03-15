import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../features/products/HeroSection';
import AboutSection from '../features/products/AboutSection';
import ServicesSection from '../features/services/ServicesSection';
import FaqSection from '../features/services/FaqSection';
import ContactSection from '../features/services/ContactSection';
import ProductCard from '../features/products/ProductCard';
import { PRODUCTS } from '../api/products';
import { useApp } from '../store/AppContext';

const HomePage: React.FC = () => {
  const { t } = useApp();
  return (
    <>
      <HeroSection />
      <AboutSection />

      {/* Products Preview */}
      <section id="products" className="section-pad products-bg">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
            <div>
              <div className="label-tag">{t('pr.lbl')}</div>
              <h2 className="section-title">{t('pr.t1')} <span>{t('pr.t2')}</span></h2>
            </div>
            <Link to="/products" className="btn-outline" style={{ marginBottom: '1.2rem' }}>{t('pr.all')}</Link>
          </div>
          <div className="prod-grid">
            {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      <ServicesSection />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
