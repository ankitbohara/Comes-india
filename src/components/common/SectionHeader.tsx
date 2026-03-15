import React from 'react';

interface Props {
  label: string;
  title: React.ReactNode;
  sub?: string;
}

const SectionHeader: React.FC<Props> = ({ label, title, sub }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <div className="label-tag">{label}</div>
    <h2 className="section-title">{title}</h2>
    {sub && <p style={{ color: 'var(--muted)', maxWidth: 520, fontSize: '1rem', lineHeight: 1.7 }}>{sub}</p>}
  </div>
);

export default SectionHeader;
