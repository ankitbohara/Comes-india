import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../store/AppContext';

const TICKER = Array(8).fill('COMES INDIA · AUTHORISED COMES ITALY PARTNER · STONE POLISHING HEADS · PAN INDIA SERVICE · ORIGINAL SPARE PARTS ·');

const HeroSection: React.FC = () => {
  const { t } = useApp();
  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">{t('hero.eye')}</div>
          <h1 className="hero-h1">
            {t('hero.t1')}<br/>
            <span>{t('hero.t2')}</span><br/>
            {t('hero.t3')}
          </h1>
          <p className="hero-sub">{t('hero.sub')}</p>
          <div className="hero-btns">
            <Link to="/products" className="btn-red">{t('hero.btn1')}</Link>
            <Link to="/#contact" className="btn-outline">{t('hero.btn2')}</Link>
          </div>
          <div className="hero-stats">
            {([['s1n','s1l'],['s2n','s2l'],['s3n','s3l']] as [string,string][]).map(([n,l]) => (
              <div key={l}>
                <div className="stat-n">{t(n)}</div>
                <div className="stat-l">{t(l)}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-right">
          <img src="https://comesindia.com/wp-content/uploads/2026/02/Comes-india-Banners-1920-x-800-px.jpg" alt="COMES India Machinery" />
          <div className="hero-badge">
            <div className="hero-badge-n">100%</div>
            <div className="hero-badge-t">ORIGINAL<br/>COMES ITALY</div>
          </div>
        </div>
      </section>
      <div className="ticker-bar">
        <div className="ticker-track">{TICKER.map((tx, i) => <span key={i}>{tx}</span>)}</div>
      </div>
    </>
  );
};

export default HeroSection;
