import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../store/AppContext';
import { LANGUAGE_OPTIONS } from '../i18n';
import type { Language } from '../types';

const LOGO_URI = "data:image/png;base64,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";

function LanguageSwitcher() {
  const { language, setLanguage } = useApp();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGE_OPTIONS.find(l => l.code === language)!;

  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button className="lang-btn" onClick={() => setOpen(o => !o)}>
        🌐 {current.nativeLabel} <span style={{ opacity: 0.5, fontSize: '.55rem' }}>{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="lang-menu">
          {LANGUAGE_OPTIONS.map(opt => (
            <button key={opt.code} className={`lang-item${language === opt.code ? ' selected' : ''}`}
              onClick={() => { setLanguage(opt.code as Language); setOpen(false); }}>
              <span>{opt.nativeLabel}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.58rem', opacity: .4 }}>{opt.code.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const Navbar: React.FC = () => {
  const { t } = useApp();
  const location = useLocation();
  const [mob, setMob] = useState(false);

  const links = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.about', path: '/#about' },
    { key: 'nav.products', path: '/products' },
    { key: 'nav.services', path: '/#services' },
    { key: 'nav.contact', path: '/#contact' },
  ];

  useEffect(() => setMob(false), [location]);

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <Link to="/"><img src={LOGO_URI} alt="COMES India" style={{ height: 48, width: 'auto', objectFit: 'contain', cursor: 'pointer' }} /></Link>
          <ul className="nav-links">
            {links.map(l => (
              <li key={l.key}>
                <Link to={l.path} className={`nav-link${location.pathname === l.path.split('#')[0] && !l.path.includes('#') ? ' active' : ''}`}>{t(l.key)}</Link>
              </li>
            ))}
          </ul>
          <div className="nav-right">
            <LanguageSwitcher />
            <Link to="/#contact" className="btn-red" style={{ padding: '.5rem 1.3rem', fontSize: '.75rem' }}>{t('nav.cta')}</Link>
            <button className="hamburger" onClick={() => setMob(o => !o)} aria-label="Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--black)" strokeWidth="2">
                {mob ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></>}
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {mob && (
        <div style={{ position: 'fixed', top: 'var(--nav-h)', left: 0, right: 0, background: 'var(--white)', zIndex: 99, borderBottom: '1px solid var(--border)', padding: '1.5rem', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
          {links.map(l => <Link key={l.key} to={l.path} className="nav-link" style={{ fontSize: '.95rem', padding: '.5rem 0' }}>{t(l.key)}</Link>)}
          <div style={{ paddingTop: '.5rem' }}><LanguageSwitcher /></div>
        </div>
      )}
    </>
  );
};

export default Navbar;
