import React from 'react';
import { useApp } from '../../store/AppContext';
import { SERVICES, PROCESS_STEPS } from '../../api/services';

const ServicesSection: React.FC = () => {
  const { t } = useApp();
  return (
    <>
      <section id="services" className="section-pad">
        <div className="container">
          <div className="label-tag">{t('sv.lbl')}</div>
          <h2 className="section-title">{t('sv.t1')}<br/><span>{t('sv.t2')}</span></h2>
          <div className="svc-grid">
            {SERVICES.map(s => (
              <div key={s.id} className="svc-card">
                <div className="svc-img-wrap">
                  <img className="svc-img" src={s.image} alt={s.title} />
                </div>
                <div className="svc-body">
                  <div className="svc-num">{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <ul style={{ listStyle: 'none' }}>
                    {s.bullets.map(b => <li key={b} className="proc-li">{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-pad process-bg">
        <div className="container">
          <div className="label-tag">{t('pc.lbl')}</div>
          <h2 className="section-title">{t('pc.t1')}<br/><span>{t('pc.t2')}</span></h2>
          <div className="proc-grid">
            {PROCESS_STEPS.map((s, i) => (
              <div key={s.num} className="proc-step" style={{ borderRight: i < PROCESS_STEPS.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div className="proc-n">{s.num}</div>
                <h4>{s.title}</h4>
                {s.items.map(it => <div key={it} className="proc-li">{it}</div>)}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
