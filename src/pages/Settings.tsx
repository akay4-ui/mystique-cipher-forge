
import React, { useState } from 'react';
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
  const [useAdvancedSecurity, setUseAdvancedSecurity] = useState(true);
  const [autoDeleteHistory, setAutoDeleteHistory] = useState(false);
  const [showNotifications, setShowNotifications] = useState(true);
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'General', icon: SettingsIcon },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'history', label: 'History', icon: History },
  ];

  const generalSettings = [
    {
      icon: theme === 'light' ? Moon : Sun,
      title: 'Theme',
      description: `Switch to ${theme === 'light' ? 'dark' : 'light'} mode for better viewing`,
      action: toggleTheme,
      toggle: true,
      value: theme === 'dark',
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Get notified about encoding/decoding completion',
      toggle: true,
      value: showNotifications,
      action: () => setShowNotifications(!showNotifications),
    },
    {
      icon: Globe,
      title: 'Language',
      description: 'Choose your preferred language',
      value: 'English',
    },
  ];

  const securitySettings = user ? [
    {
      icon: Shield,
      title: '7-Layer Encryption',
      description: 'Use military-grade encryption with user fingerprint signature (Recommended)',
      toggle: true,
      value: useAdvancedSecurity,
      action: () => setUseAdvancedSecurity(!useAdvancedSecurity),
    },
    {
      icon: Lock,
      title: 'Auto-clear Data',
      description: 'Automatically clear messages after encoding/decoding',
      toggle: true,
      value: autoDeleteHistory,
      action: () => setAutoDeleteHistory(!autoDeleteHistory),
    },
    {
      icon: Download,
      title: 'Export Data',
      description: 'Download your encoding history and secure messages',
    },
  ] : [
    {
      icon: Shield,
      title: 'Sign In Required',
      description: 'Sign in to access advanced security settings',
      info: true,
    },
  ];

  const aboutSettings = [
    {
      icon: Palette,
      title: 'Version',
      description: 'Cipher Forge v2.1.0 - Enhanced with user fingerprint',
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
      description: 'Military-grade algorithms with user signature ensure maximum privacy',
      info: true,
    },
  ];

  const legalSettings = [
    {
      icon: FileText,
      title: 'Privacy Policy',
      description: 'We respect your privacy and do not store any decrypted data',
      link: '/privacy-policy',
    },
    {
      icon: FileText,
      title: 'Terms of Service',
      description: 'Simple terms: Use responsibly and respect others',
    },
  ];

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

        {/* Tabs */}
        <div className="flex space-x-4 mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap flex items-center space-x-2 transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'general' && (
          <div className="space-y-6">
            <SettingsSection title="Preferences" items={generalSettings} />
            <SettingsSection title="About Cipher Forge" items={aboutSettings} />
            <SettingsSection title="Legal" items={legalSettings} />
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-6">
            <SettingsSection title="Security & Privacy" items={securitySettings} />
            {user && (
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
            )}
          </div>
        )}

        {activeTab === 'history' && (
          <HistoryManager />
        )}
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
