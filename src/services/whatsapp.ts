const WA_NUMBER = '918306665561';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string): void {
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
}

export const WHATSAPP_GENERAL = 'Hello COMES India! I would like to know more about your products and services.';
