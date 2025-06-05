
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
    'app.description': 'Transform your messages into unbreakable codes with military-grade encryption. Support for all world languages including Arabic, Chinese, Urdu, Hindi and more.',
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
    'app.description': '使用军用级加密将您的消息转换为不可破解的代码。支持包括阿拉伯语、中文、乌尔都语、印地语等在内的所有世界语言。',
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
    'app.description': 'حوّل رسائلك إلى رموز غير قابلة للكسر باستخدام التشفير العسكري. دعم لجميع لغات العالم بما في ذلك العربية والصينية والأردية والهندية والمزيد.',
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
    'app.description': 'सैन्य-ग्रेड एन्क्रिप्शन के साथ अपने संदेशों को अटूट कोड में बदलें। अरबी, चीनी, उर्दू, हिंदी और अधिक सहित सभी विश्व भाषाओं के लिए समर्थन।',
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
    'app.description': 'Transforma tus mensajes en códigos irrompibles con cifrado de grado militar. Soporte para todos los idiomas del mundo incluyendo árabe, chino, urdu, hindi y más.',
    'nav.how-it-works': 'Cómo Funciona',
    'nav.features': 'Características',
    'auth.sign-in': 'Iniciar Sesión',
    'auth.sign-up': 'Registrarse',
    'settings': 'Configuración',
    'tagline1': 'Soporte Universal de Idiomas',
    'tagline2': 'Colección de 200+ Emojis',
    'tagline3': 'Seguridad de Grado Militar'
  },
  fr: {
    'app.title': 'Forge de Chiffrement',
    'app.subtitle': 'Encodage et Décodage Sécurisé de Messages',
    'app.description': 'Transformez vos messages en codes incassables avec un chiffrement de grade militaire. Support pour toutes les langues du monde y compris l\'arabe, le chinois, l\'ourdou, l\'hindi et plus.',
    'nav.how-it-works': 'Comment Ça Marche',
    'nav.features': 'Fonctionnalités',
    'auth.sign-in': 'Se Connecter',
    'auth.sign-up': 'S\'inscrire',
    'settings': 'Paramètres',
    'tagline1': 'Support Universel des Langues',
    'tagline2': 'Collection de 200+ Emojis',
    'tagline3': 'Sécurité de Grade Militaire'
  },
  de: {
    'app.title': 'Cipher Forge',
    'app.subtitle': 'Sichere Nachrichtenverschlüsselung und -entschlüsselung',
    'app.description': 'Verwandeln Sie Ihre Nachrichten in unknackbare Codes mit militärtauglicher Verschlüsselung. Unterstützung für alle Weltsprachen einschließlich Arabisch, Chinesisch, Urdu, Hindi und mehr.',
    'nav.how-it-works': 'Wie Es Funktioniert',
    'nav.features': 'Funktionen',
    'auth.sign-in': 'Anmelden',
    'auth.sign-up': 'Registrieren',
    'settings': 'Einstellungen',
    'tagline1': 'Universelle Sprachunterstützung',
    'tagline2': '200+ Emoji-Sammlung',
    'tagline3': 'Militärtaugliche Sicherheit'
  },
  ja: {
    'app.title': 'サイファーフォージ',
    'app.subtitle': '安全なメッセージの暗号化と復号化',
    'app.description': '軍事グレードの暗号化で、あなたのメッセージを破ることができないコードに変換します。アラビア語、中国語、ウルドゥー語、ヒンディー語などを含む世界のすべての言語をサポート。',
    'nav.how-it-works': '仕組み',
    'nav.features': '機能',
    'auth.sign-in': 'サインイン',
    'auth.sign-up': 'サインアップ',
    'settings': '設定',
    'tagline1': 'ユニバーサル言語サポート',
    'tagline2': '200+ 絵文字コレクション',
    'tagline3': '軍事グレードセキュリティ'
  },
  ko: {
    'app.title': '사이퍼 포지',
    'app.subtitle': '안전한 메시지 인코딩 및 디코딩',
    'app.description': '군사급 암호화로 메시지를 깨뜨릴 수 없는 코드로 변환하세요. 아랍어, 중국어, 우르두어, 힌디어 등을 포함한 모든 세계 언어를 지원합니다.',
    'nav.how-it-works': '작동 방식',
    'nav.features': '기능',
    'auth.sign-in': '로그인',
    'auth.sign-up': '회원가입',
    'settings': '설정',
    'tagline1': '범용 언어 지원',
    'tagline2': '200+ 이모지 컬렉션',
    'tagline3': '군사급 보안'
  },
  pt: {
    'app.title': 'Forja de Cifra',
    'app.subtitle': 'Codificação e Decodificação Segura de Mensagens',
    'app.description': 'Transforme suas mensagens em códigos inquebráveis com criptografia de grau militar. Suporte para todos os idiomas do mundo incluindo árabe, chinês, urdu, hindi e mais.',
    'nav.how-it-works': 'Como Funciona',
    'nav.features': 'Recursos',
    'auth.sign-in': 'Entrar',
    'auth.sign-up': 'Cadastrar',
    'settings': 'Configurações',
    'tagline1': 'Suporte Universal de Idiomas',
    'tagline2': 'Coleção de 200+ Emojis',
    'tagline3': 'Segurança de Grau Militar'
  },
  ru: {
    'app.title': 'Кузница Шифров',
    'app.subtitle': 'Безопасное кодирование и декодирование сообщений',
    'app.description': 'Превратите ваши сообщения в неломаемые коды с шифрованием военного уровня. Поддержка всех языков мира включая арабский, китайский, урду, хинди и другие.',
    'nav.how-it-works': 'Как Это Работает',
    'nav.features': 'Возможности',
    'auth.sign-in': 'Войти',
    'auth.sign-up': 'Регистрация',
    'settings': 'Настройки',
    'tagline1': 'Универсальная Поддержка Языков',
    'tagline2': 'Коллекция 200+ Эмодзи',
    'tagline3': 'Безопасность Военного Уровня'
  },
  ur: {
    'app.title': 'سائفر فورج',
    'app.subtitle': 'محفوظ پیغام انکوڈنگ اور ڈیکوڈنگ',
    'app.description': 'فوجی درجے کی انکرپشن کے ساتھ اپنے پیغامات کو ناقابل شکست کوڈز میں تبدیل کریں۔ عربی، چینی، اردو، ہندی اور مزید سمیت تمام عالمی زبانوں کی سپورٹ۔',
    'nav.how-it-works': 'یہ کیسے کام کرتا ہے',
    'nav.features': 'خصوصیات',
    'auth.sign-in': 'سائن ان',
    'auth.sign-up': 'سائن اپ',
    'settings': 'ترتیبات',
    'tagline1': 'عالمگیر زبان کی سپورٹ',
    'tagline2': '200+ ایموجی کلیکشن',
    'tagline3': 'فوجی درجے کی سیکیورٹی'
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
