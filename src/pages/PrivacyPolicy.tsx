
import React from 'react';
import { Shield, Eye, Lock, Globe, FileText } from 'lucide-react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Shield,
      title: 'Data Protection',
      content: 'Cipher Forge is designed with privacy at its core. All encryption and decryption operations are performed locally in your browser. We do not store, transmit, or have access to your messages or passwords.',
    },
    {
      icon: Lock,
      title: 'Local Processing',
      content: 'Your sensitive data never leaves your device. All cryptographic operations happen in your browser using client-side JavaScript, ensuring complete privacy and security.',
    },
    {
      icon: Eye,
      title: 'No Tracking',
      content: 'We do not use analytics, tracking pixels, or any form of user monitoring. Your usage patterns, messages, and personal information remain completely private.',
    },
    {
      icon: Globe,
      title: 'No Data Collection',
      content: 'Cipher Forge does not collect personal information, usage statistics, or any data that could identify you. We operate on a zero-knowledge principle.',
    },
    {
      icon: FileText,
      title: 'Open Source Commitment',
      content: 'Our encryption algorithms are based on well-established cryptographic standards. The application is designed to be transparent and trustworthy.',
    },
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="max-w-4xl mx-auto px-2 md:px-4 py-4 md:py-8">
          <div className="mb-6 md:mb-8 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-brand">Privacy Policy</h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Your privacy is our priority. Learn how Cipher Forge protects your data.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {sections.map((section, index) => (
              <div key={index} className="cipher-card animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <section.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 cipher-card bg-primary/5 border-primary/20">
            <div className="text-center">
              <Shield className="w-8 h-8 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                Complete Privacy Guaranteed
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                With Cipher Forge, your messages stay between you and your intended recipient. Always.
              </p>
            </div>
          </div>

          <div className="mt-6 md:mt-8 text-center text-xs md:text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default PrivacyPolicy;
