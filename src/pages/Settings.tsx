
import React from 'react';
import { Shield, Moon, Sun, Globe, HelpCircle, FileText } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();

  const settingsSections = [
    {
      title: 'Appearance',
      items: [
        {
          icon: theme === 'light' ? Moon : Sun,
          title: 'Theme',
          description: `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`,
          action: toggleTheme,
        },
      ],
    },
    {
      title: 'About',
      items: [
        {
          icon: Shield,
          title: 'Security',
          description: 'Your data is encrypted locally and never stored on our servers',
        },
        {
          icon: Globe,
          title: 'Language Support',
          description: 'Works with all world languages including Arabic, Chinese, Urdu, Hindi',
        },
        {
          icon: HelpCircle,
          title: 'How It Works',
          description: 'Advanced encryption algorithms ensure your messages stay private',
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
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
            <p className="text-muted-foreground">
              Manage your preferences and learn more about Cipher Forge
            </p>
          </div>

          <div className="space-y-8">
            {settingsSections.map((section) => (
              <div key={section.title} className="cipher-card">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-4 p-4 rounded-xl transition-colors ${
                        item.action
                          ? 'hover:bg-muted cursor-pointer'
                          : 'bg-muted/50'
                      }`}
                      onClick={item.action}
                    >
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Settings;
