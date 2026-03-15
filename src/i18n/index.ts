import en from './en';
import hi from './hi';
import ta from './ta';
import mr from './mr';
import te from './te';
import type { Language, LanguageOption } from '../types';

export const translations: Record<Language, Record<string, string>> = { en, hi, ta, mr, te };

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'en', label: 'English',  nativeLabel: 'English' },
  { code: 'hi', label: 'Hindi',    nativeLabel: 'हिंदी'   },
  { code: 'ta', label: 'Tamil',    nativeLabel: 'தமிழ்'   },
  { code: 'mr', label: 'Marathi',  nativeLabel: 'मराठी'   },
  { code: 'te', label: 'Telugu',   nativeLabel: 'తెలుగు'  },
];

export function translate(lang: Language, key: string): string {
  return translations[lang]?.[key] ?? translations['en'][key] ?? key;
}
