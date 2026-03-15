import { useCallback } from 'react';
import { openWhatsApp } from '../services/whatsapp';

export function useWhatsApp() {
  const enquire = useCallback((message: string) => openWhatsApp(message), []);
  return { enquire };
}
