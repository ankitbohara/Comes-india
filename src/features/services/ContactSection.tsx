import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import WhatsAppButton from '../../components/ui/WhatsAppButton';
import { WHATSAPP_GENERAL } from '../../services/whatsapp';

const ContactSection: React.FC = () => {
  const { t } = useApp();
  const [sent, setSent] = useState(false);

  const INFO = [
    { icon: '📍', lbl: 'Address', val: () => t('ct.addr') },
    { icon: '📞', lbl: 'Phone',   val: () => '+91-83066 65561 / +91 9929765563' },
    { icon: '✉️', lbl: 'Email',   val: () => 'info@comesindia.com' },
    { icon: '🕐', lbl: 'Hours',   val: () => t('ct.hrs') },
  ];

  return (
    <section id="contact" className="section-pad contact-bg">
      <div className="container">
        <div className="label-tag">{t('ct.lbl')}</div>
        <h2 className="section-title">{t('ct.t1')}<br/><span>{t('ct.t2')}</span></h2>
        <div className="contact-grid" style={{ marginTop: '2.5rem' }}>
          <div>
            {INFO.map(item => (
              <div key={item.lbl} className="cinfo-item">
                <span className="cinfo-icon">{item.icon}</span>
                <div>
                  <div className="cinfo-label">{item.lbl}</div>
                  <div className="cinfo-val">{item.val()}</div>
                </div>
              </div>
            ))}
            <div style={{ marginTop: '1.5rem' }}>
              <WhatsAppButton message={WHATSAPP_GENERAL} label="Chat on WhatsApp" />
            </div>
          </div>

          <form onSubmit={e => { e.preventDefault(); setSent(true); }}
            style={{ background: 'var(--white)', padding: '2rem', borderRadius: 8, boxShadow: 'var(--shadow)' }}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">{t('ct.fn')}</label>
                <input className="form-input" placeholder={t('ct.fp')} required />
              </div>
              <div className="form-group">
                <label className="form-label">{t('ct.fc')}</label>
                <input className="form-input" placeholder={t('ct.fcp')} required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">{t('ct.fm')}</label>
              <input className="form-input" placeholder={t('ct.fmp')} />
            </div>
            <div className="form-group">
              <label className="form-label">{t('ct.fmsg')}</label>
              <textarea className="form-input" placeholder={t('ct.fmsgp')} required rows={4} style={{ resize: 'none' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button type="submit" className="btn-red">{t('ct.sub')}</button>
              {sent && <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.7rem', color: '#16a34a', letterSpacing: '.1em' }}>✓ {t('ct.ok')}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
