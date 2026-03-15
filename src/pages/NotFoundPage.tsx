import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => (
  <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', textAlign: 'center', padding: '2rem' }}>
    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(6rem,15vw,10rem)', color: 'var(--red)', opacity: .15, lineHeight: 1 }}>404</div>
    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginTop: '-3rem', color: 'var(--black)' }}>Page Not Found</h1>
    <p style={{ color: 'var(--muted)', maxWidth: 400 }}>The page you're looking for doesn't exist.</p>
    <Link to="/" className="btn-red">Go Home</Link>
  </div>
);

export default NotFoundPage;
