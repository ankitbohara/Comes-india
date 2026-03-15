import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import { FAQS } from '../../api/services';

const FaqSection: React.FC = () => {
  const { t } = useApp();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="faq" className="section-pad">
      <div className="container">
        <div className="label-tag">{t('fq.lbl')}</div>
        <h2 className="section-title">{t('fq.t1')} <span>{t('fq.t2')}</span></h2>
        <div className="faq-wrap">
          {FAQS.map((f, i) => (
            <div key={i} className="faq-item">
              <button className={`faq-q${openIdx === i ? ' open' : ''}`} onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                <span>{f.q}</span>
                <span className={`faq-icon${openIdx === i ? ' open' : ''}`}>+</span>
              </button>
              <div className={`faq-body${openIdx === i ? ' open' : ''}`}>{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
