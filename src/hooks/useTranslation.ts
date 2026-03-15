import { useApp } from '../store/AppContext';

export function useTranslation() {
  const { t, language, setLanguage } = useApp();
  return { t, language, setLanguage };
}
