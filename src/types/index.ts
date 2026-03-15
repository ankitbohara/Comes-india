export type Language = 'en' | 'hi' | 'ta' | 'mr' | 'te';

export interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  category: string;
  specs: ProductSpec[];
  features: string[];
  applications: string[];
  whatsappMessage: string;
}

export interface Service {
  id: string;
  num: string;
  title: string;
  description: string;
  image: string;
  bullets: string[];
}

export interface ProcessStep {
  num: string;
  title: string;
  items: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}
