
import React, { createContext, useContext, useState } from 'react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ur', name: 'اردو', flag: '🇵🇰' }
];

interface LanguageContextType {
  currentLanguage: Language;
  languages: Language[];
  changeLanguage: (code: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<string, string>> = {
  en: {
    'app.title': 'Cipher Forge',
    'app.subtitle': 'Secure Message Encoding & Decoding',
    'nav.how-it-works': 'How It Works',
    'nav.features': 'Features',
    'auth.sign-in': 'Sign In',
    'auth.sign-up': 'Sign Up',
    'settings': 'Settings',
    'tagline1': 'Universal Language Support',
    'tagline2': '200+ Emoji Collection',
    'tagline3': 'Military-Grade Security'
  },
  zh: {
    'app.title': '密码锻造',
    'app.subtitle': '安全消息编码和解码',
    'nav.how-it-works': '如何工作',
    'nav.features': '功能特点',
    'auth.sign-in': '登录',
    'auth.sign-up': '注册',
    'settings': '设置',
    'tagline1': '通用语言支持',
    'tagline2': '200+ 表情符号集合',
    'tagline3': '军用级安全'
  },
  ar: {
    'app.title': 'مصنع الشفرات',
    'app.subtitle': 'تشفير وفك تشفير الرسائل الآمنة',
    'nav.how-it-works': 'كيف يعمل',
    'nav.features': 'الميزات',
    'auth.sign-in': 'تسجيل الدخول',
    'auth.sign-up': 'إنشاء حساب',
    'settings': 'الإعدادات',
    'tagline1': 'دعم اللغات العالمية',
    'tagline2': 'مجموعة 200+ رموز تعبيرية',
    'tagline3': 'أمان عسكري الدرجة'
  },
  hi: {
    'app.title': 'सिफर फोर्ज',
    'app.subtitle': 'सुरक्षित संदेश एन्कोडिंग और डिकोडिंग',
    'nav.how-it-works': 'यह कैसे काम करता है',
    'nav.features': 'विशेषताएं',
    'auth.sign-in': 'साइन इन',
    'auth.sign-up': 'साइन अप',
    'settings': 'सेटिंग्स',
    'tagline1': 'सार्वभौमिक भाषा समर्थन',
    'tagline2': '200+ इमोजी संग्रह',
    'tagline3': 'सैन्य-ग्रेड सुरक्षा'
  },
  es: {
    'app.title': 'Forja de Cifrado',
    'app.subtitle': 'Codificación y Decodificación Segura de Mensajes',
    'nav.how-it-works': 'Cómo Funciona',
    'nav.features': 'Características',
    'auth.sign-in': 'Iniciar Sesión',
    'auth.sign-up': 'Registrarse',
    'settings': 'Configuración',
    'tagline1': 'Soporte Universal de Idiomas',
    'tagline2': 'Colección de 200+ Emojis',
    'tagline3': 'Seguridad de Grado Militar'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const changeLanguage = (code: string) => {
    const language = languages.find(lang => lang.code === code);
    if (language) {
      setCurrentLanguage(language);
      localStorage.setItem('cipher-language', code);
    }
  };

  const t = (key: string): string => {
    return translations[currentLanguage.code]?.[key] || translations.en[key] || key;
  };

  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('cipher-language');
    if (savedLanguage) {
      changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLanguage, languages, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
