import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../store/AppContext';
import { LANGUAGE_OPTIONS } from '../../i18n';
import type { Language } from '../../types';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useApp();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGE_OPTIONS.find(l => l.code === language)!;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative', userSelect: 'none' }}>
      <button className="lang-btn" onClick={() => setOpen(o => !o)}>
        🌐 {current.nativeLabel}
        <span style={{ fontSize: '.55rem', opacity: .5 }}>{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="lang-menu">
          {LANGUAGE_OPTIONS.map(opt => (
            <button
              key={opt.code}
              className={`lang-item${language === opt.code ? ' selected' : ''}`}
              onClick={() => { setLanguage(opt.code as Language); setOpen(false); }}
            >
              <span>{opt.nativeLabel}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.58rem', opacity: .4 }}>
                {opt.code.toUpperCase()}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
