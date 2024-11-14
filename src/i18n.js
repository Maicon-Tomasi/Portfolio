import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importação dos arquivos de tradução
import translationEN from './locales/en/translation.json';
import translationPT from './locales/pt/translation.json';

// Configuração do i18next
i18n
  .use(initReactI18next) // passa o i18next para o react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN, // arquivo de traduções em inglês
      },
      pt: {
        translation: translationPT, // arquivo de traduções em português
      },
    },
    lng: 'pt', // idioma padrão
    fallbackLng: 'en', // idioma de fallback, caso a tradução não seja encontrada
    interpolation: {
      escapeValue: false, // necessário para o React
    },
  });

export default i18n;
