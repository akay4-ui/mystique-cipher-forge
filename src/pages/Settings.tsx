import React, { useState, useEffect } from 'react';
import { Shield, Moon, Sun, Globe, HelpCircle, FileText, Bell, Lock, Palette, Download, ArrowLeft, History, Trash2, Settings as SettingsIcon } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HistoryManager from '@/components/HistoryManager';
import { Switch } from '@/components/ui/switch';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  const [useAdvancedSecurity, setUseAdvancedSecurity] = useState(false);
  const [autoDeleteHistory, setAutoDeleteHistory] = useState(false);
  const [showNotifications, setShowNotifications] = useState(true);
  const [showHistory, setShowHistory] = useState(false);

  // Load settings from localStorage
  useEffect(() => {
    const advancedSecurity = localStorage.getItem('useAdvancedSecurity') === 'true';
    const autoDelete = localStorage.getItem('autoDeleteHistory') === 'true';
    const notifications = localStorage.getItem('showNotifications') !== 'false';
    
    setUseAdvancedSecurity(advancedSecurity);
    setAutoDeleteHistory(autoDelete);
    setShowNotifications(notifications);
  }, []);

  const handleAdvancedSecurityToggle = () => {
    const newValue = !useAdvancedSecurity;
    setUseAdvancedSecurity(newValue);
    localStorage.setItem('useAdvancedSecurity', newValue.toString());
  };

  const handleAutoDeleteToggle = () => {
    const newValue = !autoDeleteHistory;
    setAutoDeleteHistory(newValue);
    localStorage.setItem('autoDeleteHistory', newValue.toString());
  };

  const handleNotificationsToggle = () => {
    const newValue = !showNotifications;
    setShowNotifications(newValue);
    localStorage.setItem('showNotifications', newValue.toString());
  };

  const allSettings = [
    // Theme & Interface
    {
      icon: theme === 'light' ? Moon : Sun,
      title: 'Theme',
      description: `Switch to ${theme === 'light' ? 'dark' : 'light'} mode for better viewing`,
      action: toggleTheme,
      toggle: true,
      value: theme === 'dark',
      category: 'interface'
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Get notified about encoding/decoding completion',
      toggle: true,
      value: showNotifications,
      action: handleNotificationsToggle,
      category: 'interface'
    },
    {
      icon: Globe,
      title: 'Language',
      description: 'Choose your preferred language',
      value: 'English',
      category: 'interface'
    },

    // Security Settings (conditionally shown)
    ...(user ? [
      {
        icon: Shield,
        title: 'Advanced Military-Grade Security',
        description: 'Use 9-layer encryption with AES-256-GCM, user fingerprint signature, and HMAC-SHA512 authentication (Recommended)',
        toggle: true,
        value: useAdvancedSecurity,
        action: handleAdvancedSecurityToggle,
        category: 'security'
      },
      {
        icon: Lock,
        title: 'Auto-clear Data',
        description: 'Automatically clear messages after encoding/decoding',
        toggle: true,
        value: autoDeleteHistory,
        action: handleAutoDeleteToggle,
        category: 'security'
      },
      {
        icon: Download,
        title: 'Export Data',
        description: 'Download your encoding history and secure messages',
        category: 'security'
      },
      {
        icon: History,
        title: 'View History',
        description: 'Manage your encryption history and clear data',
        action: () => setShowHistory(!showHistory),
        category: 'security'
      }
    ] : [
      {
        icon: Shield,
        title: 'Sign In Required',
        description: 'Sign in to access advanced security settings',
        info: true,
        category: 'security'
      }
    ]),

    // About Settings
    {
      icon: Palette,
      title: 'Version',
      description: 'Cipher Forge v2.1.0 - Enhanced with 9-layer encryption',
      info: true,
      category: 'about'
    },
    {
      icon: Globe,
      title: 'Universal Support',
      description: 'Works with all world languages including Arabic, Chinese, Urdu, Hindi',
      info: true,
      category: 'about'
    },
    {
      icon: HelpCircle,
      title: 'Advanced Encryption',
      description: 'Military-grade algorithms with user signature ensure maximum privacy',
      info: true,
      category: 'about'
    },

    // Legal Settings
    {
      icon: FileText,
      title: 'Privacy Policy',
      description: 'We respect your privacy and do not store any decrypted data',
      link: '/privacy-policy',
      category: 'legal'
    },
    {
      icon: FileText,
      title: 'Terms of Service',
      description: 'Simple terms: Use responsibly and respect others',
      category: 'legal'
    }
  ];

  if (showHistory && user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="max-w-6xl mx-auto px-2 md:px-4 py-4 md:py-8">
          <div className="mb-6 md:mb-8">
            <button 
              onClick={() => setShowHistory(false)}
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 mb-4 md:mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Settings
            </button>
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-brand">Encryption History</h1>
              <p className="text-muted-foreground text-sm md:text-base">
                Manage your encryption history and data
              </p>
            </div>
          </div>

          <HistoryManager />
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-6xl mx-auto px-2 md:px-4 py-4 md:py-8">
        <div className="mb-6 md:mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 mb-4 md:mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-brand">Settings</h1>
            <p className="text-muted-foreground text-sm md:text-base">
              Manage your preferences and security settings
            </p>
          </div>
        </div>

        {/* All Settings in One Section */}
        <div className="space-y-6">
          {/* Interface Settings */}
          <SettingsSection 
            title="Interface & Preferences" 
            items={allSettings.filter(item => item.category === 'interface')} 
          />

          {/* Security Settings (only if signed in) */}
          {user && (
            <>
              <SettingsSection 
                title="Security & Privacy" 
                items={allSettings.filter(item => item.category === 'security')} 
              />
              
              {/* User Fingerprint Info */}
              <div className="cipher-card">
                <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                  User Fingerprint
                </h2>
                <div className="bg-muted/50 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Enhanced Security Active
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Your account: <span className="font-mono">{user.email}</span><br/>
                        Each message you encrypt includes your unique fingerprint signature.<br/>
                        This ensures only messages encrypted with your account can be decrypted properly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Sign in prompt for non-authenticated users */}
          {!user && (
            <SettingsSection 
              title="Security & Privacy" 
              items={allSettings.filter(item => item.category === 'security')} 
            />
          )}

          {/* About Settings */}
          <SettingsSection 
            title="About Cipher Forge" 
            items={allSettings.filter(item => item.category === 'about')} 
          />

          {/* Legal Settings */}
          <SettingsSection 
            title="Legal" 
            items={allSettings.filter(item => item.category === 'legal')} 
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

interface SettingSectionProps {
  title: string;
  items: any[];
}

const SettingsSection: React.FC<SettingSectionProps> = ({ title, items }) => {
  return (
    <div className="cipher-card">
      <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
        {title}
      </h2>
      <div className="space-y-3 md:space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl transition-colors ${
              item.action || item.link
                ? 'hover:bg-muted cursor-pointer'
                : 'bg-muted/50'
            }`}
            onClick={item.action || (item.link ? () => window.location.href = item.link : undefined)}
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
                  <Switch
                    checked={item.value}
                    onCheckedChange={item.action}
                  />
                )}
                {item.value && !item.toggle && (
                  <span className="text-xs md:text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                    {item.value}
                  </span>
                )}
              </div>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
