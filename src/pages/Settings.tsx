import React from 'react';
import { Shield, Moon, Sun, Globe, HelpCircle, FileText, Bell, Lock, Palette, Download, ArrowLeft, ChevronDown, History, Trash2, Clock } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useUser } from '@clerk/clerk-react';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const { currentLanguage, languages, changeLanguage, t } = useLanguage();
  const { user } = useUser();
  const [showLanguages, setShowLanguages] = React.useState(false);
  const [showHistory, setShowHistory] = React.useState(false);

  // Get encryption history
  const [history, setHistory] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cipher_history') || '[]');
    } catch {
      return [];
    }
  });

  const clearHistory = () => {
    localStorage.removeItem('cipher_history');
    setHistory([]);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const settingsSections = [
    {
      title: 'Preferences',
      items: [
        {
          icon: theme === 'light' ? Moon : Sun,
          title: 'Theme',
          description: `Switch to ${theme === 'light' ? 'dark' : 'light'} mode for better viewing`,
          action: toggleTheme,
          toggle: true,
        },
        {
          icon: Bell,
          title: 'Notifications',
          description: 'Get notified about encoding/decoding completion',
          toggle: true,
        },
        {
          icon: Globe,
          title: 'Language',
          description: 'Choose your preferred language',
          value: currentLanguage.name,
          customAction: () => setShowLanguages(!showLanguages),
        },
      ],
    },
    ...(user ? [{
      title: 'History',
      items: [
        {
          icon: History,
          title: 'Encryption History',
          description: `${history.length} encryption/decoding operations recorded`,
          customAction: () => setShowHistory(!showHistory),
        },
        {
          icon: Trash2,
          title: 'Clear History',
          description: 'Remove all encryption history records',
          action: clearHistory,
        },
      ],
    }] : []),
    {
      title: 'Security & Privacy',
      items: [
        {
          icon: Shield,
          title: 'Data Security',
          description: 'Your data is encrypted locally and never stored on our servers',
          info: true,
        },
        {
          icon: Lock,
          title: 'Auto-clear Data',
          description: 'Automatically clear messages after encoding/decoding',
          toggle: true,
        },
        {
          icon: Download,
          title: 'Export Data',
          description: 'Download your encryption history (when available)',
        },
      ],
    },
    {
      title: 'About Cipher Forge',
      items: [
        {
          icon: Palette,
          title: 'Version',
          description: 'Cipher Forge v2.0.1 - Latest update',
          info: true,
        },
        {
          icon: Globe,
          title: 'Universal Support',
          description: 'Works with all world languages including Arabic, Chinese, Urdu, Hindi',
          info: true,
        },
        {
          icon: HelpCircle,
          title: 'Advanced Encryption',
          description: 'Military-grade algorithms ensure your messages stay private',
          info: true,
        },
      ],
    },
    {
      title: 'Legal',
      items: [
        {
          icon: FileText,
          title: 'Privacy Policy',
          description: 'We respect your privacy and do not store any data',
          link: '/privacy-policy',
        },
        {
          icon: FileText,
          title: 'Terms of Service',
          description: 'Simple terms: Use responsibly and respect others',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-4xl mx-auto px-2 md:px-4 py-4 md:py-8">
        <div className="mb-6 md:mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 mb-4 md:mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-brand">{t('settings')}</h1>
            <p className="text-muted-foreground text-sm md:text-base">
              Manage your preferences and learn more about Cipher Forge
            </p>
          </div>
        </div>

        <div className="space-y-4 md:space-y-8">
          {settingsSections.map((section) => (
            <div key={section.title} className="cipher-card">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                {section.title}
              </h2>
              <div className="space-y-3 md:space-y-4">
                {section.items.map((item, index) => (
                  <div key={index}>
                    <div
                      className={`flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl transition-colors ${
                        item.action || item.link || item.customAction
                          ? 'hover:bg-muted cursor-pointer'
                          : 'bg-muted/50'
                      }`}
                      onClick={item.action || item.customAction || (item.link ? () => window.location.href = item.link : undefined)}
                    >
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-foreground mb-1 text-sm md:text-base">
                            {item.title}
                          </h3>
                          {item.toggle && (
                            <div className="flex-shrink-0 ml-2">
                              <div className={`w-10 h-5 md:w-12 md:h-6 rounded-full transition-colors ${
                                theme === 'dark' ? 'bg-primary' : 'bg-muted'
                              } relative`}>
                                <div className={`w-4 h-4 md:w-5 md:h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                                  theme === 'dark' ? 'translate-x-5 md:translate-x-6' : 'translate-x-0.5'
                                }`} />
                              </div>
                            </div>
                          )}
                          {item.value && (
                            <div className="flex items-center space-x-2">
                              <span className="text-xs md:text-sm text-muted-foreground bg-muted px-2 py-1 rounded flex items-center">
                                {item.title === 'Language' && currentLanguage.flag} {item.value}
                                {item.customAction && <ChevronDown className="w-3 h-3 ml-1" />}
                              </span>
                            </div>
                          )}
                        </div>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Language Dropdown */}
                    {item.title === 'Language' && showLanguages && (
                      <div className="mt-2 p-2 bg-muted rounded-lg">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {languages.map((lang) => (
                            <button
                              key={lang.code}
                              onClick={() => {
                                changeLanguage(lang.code);
                                setShowLanguages(false);
                              }}
                              className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                                currentLanguage.code === lang.code
                                  ? 'bg-primary text-primary-foreground'
                                  : 'hover:bg-background'
                              }`}
                            >
                              <span>{lang.flag}</span>
                              <span className="text-sm">{lang.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* History Dropdown */}
                    {item.title === 'Encryption History' && showHistory && (
                      <div className="mt-2 p-4 bg-muted rounded-lg">
                        <div className="space-y-3 max-h-64 overflow-y-auto">
                          {history.length === 0 ? (
                            <p className="text-center text-muted-foreground py-4">No encryption history yet</p>
                          ) : (
                            history.map((entry: any) => (
                              <div key={entry.id} className="flex items-center justify-between p-3 bg-background rounded-lg">
                                <div className="flex items-center space-x-3">
                                  <div className={`p-2 rounded-full ${entry.type === 'encode' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                                    {entry.type === 'encode' ? <Lock className="w-4 h-4" /> : <Shield className="w-4 h-4" />}
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-foreground">
                                      {entry.type === 'encode' ? 'Encoded' : 'Decoded'} - {entry.method}
                                    </p>
                                    <p className="text-xs text-muted-foreground">{entry.messagePreview}</p>
                                  </div>
                                </div>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {formatDate(entry.timestamp)}
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Settings;
