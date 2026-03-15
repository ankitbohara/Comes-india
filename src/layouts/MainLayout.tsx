import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import { WHATSAPP_GENERAL } from '../services/whatsapp';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Navbar />
    <main style={{ paddingTop: 'var(--nav-h)' }}>{children}</main>
    <Footer />
    <WhatsAppButton message={WHATSAPP_GENERAL} variant="icon" />
  </>
);

export default MainLayout;
