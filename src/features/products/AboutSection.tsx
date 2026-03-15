import React from 'react';
import { useApp } from '../../store/AppContext';

const FEATURES = [
  { icon: '⚙️', tk: 'ab.f1t', dk: 'ab.f1d' },
  { icon: '🔩', tk: 'ab.f2t', dk: 'ab.f2d' },
  { icon: '🛠️', tk: 'ab.f3t', dk: 'ab.f3d' },
  { icon: '📡', tk: 'ab.f4t', dk: 'ab.f4d' },
];

const AboutSection: React.FC = () => {
  const { t } = useApp();
  return (
    <section id="about" className="section-pad">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrap">
            <img src="https://comesindia.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-03-at-9.07.48-AM.jpeg" alt="COMES India Workshop" />
            <div className="about-badge">
              <div className="about-badge-n">100%</div>
              <div className="about-badge-t">ORIGINAL<br/>COMES ITALY</div>
            </div>
          </div>
          <div>
            <div className="label-tag">{t('ab.lbl')}</div>
            <h2 className="section-title">{t('ab.t1')} <span>{t('ab.t2')}</span><br/>{t('ab.t3')}</h2>
            <p className="about-p">{t('ab.p1')}</p>
            <p className="about-p">{t('ab.p2')}</p>
            <div className="feat-grid">
              {FEATURES.map(f => (
                <div key={f.tk} className="feat-card">
                  <div style={{ fontSize: '1.5rem' }}>{f.icon}</div>
                  <h4>{t(f.tk)}</h4>
                  <p>{t(f.dk)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
