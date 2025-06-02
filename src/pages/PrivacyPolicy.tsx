
import React from 'react';
import { Shield, Lock, Eye, Server } from 'lucide-react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Eye,
      title: 'What We Collect',
      content: 'We do not collect, store, or transmit any of your personal messages, passwords, or encrypted data. All encryption happens locally in your browser.'
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: 'Your data never leaves your device. All encryption and decryption processes are performed client-side using advanced cryptographic algorithms.'
    },
    {
      icon: Server,
      title: 'No Server Storage',
      content: 'We do not have servers that store your data. This website is a static application that runs entirely in your browser for maximum privacy.'
    },
    {
      icon: Shield,
      title: 'Your Rights',
      content: 'Since we don\'t collect your data, there\'s nothing for us to delete, modify, or share. Your privacy is inherently protected by our architecture.'
    }
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your privacy is our priority. Learn how Cipher Forge protects your data through our privacy-by-design architecture.
            </p>
          </div>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <div key={index} className="cipher-card">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-foreground mb-3">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cipher-card mt-8">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Questions?
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this privacy policy, please contact us.
              </p>
              <a
                href="mailto:privacy@cipherforge.com"
                className="mobile-button inline-flex items-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default PrivacyPolicy;
