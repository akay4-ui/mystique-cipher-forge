
import React from 'react';
import { Lock, Unlock, Shield, Smartphone, Globe, Zap, ArrowLeft, Vault, Users, Fingerprint } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HowItWorks = () => {
  const steps = [
    {
      icon: Users,
      title: 'Sign In Required',
      description: 'Create an account to access military-grade encryption with your unique fingerprint signature.',
      color: 'from-blue-500 to-purple-600',
    },
    {
      icon: Globe,
      title: 'Choose Your Method',
      description: 'Select between Text Cipher (traditional) or Emoji Cipher (visual patterns) for encoding your messages.',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Lock,
      title: 'Enter & Encrypt',
      description: 'Type your message and password. Our 7-layer encryption system processes it with your fingerprint.',
      color: 'from-green-500 to-blue-600',
    },
    {
      icon: Zap,
      title: 'Share Securely',
      description: 'Copy your encrypted message and share it. Only you can decode it with the right password.',
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: Vault,
      title: 'Secure Vault',
      description: 'Store and manage your encrypted messages in your personal secure vault with full history.',
      color: 'from-teal-500 to-green-600',
    },
  ];

  const securityLayers = [
    {
      layer: 1,
      title: 'Password Strengthening',
      description: 'PBKDF2 with 100,000 iterations',
      icon: Lock,
    },
    {
      layer: 2,
      title: 'AES-256-GCM Encryption',
      description: 'Military-grade symmetric encryption',
      icon: Shield,
    },
    {
      layer: 3,
      title: 'Random IV Generation',
      description: 'Unique initialization vector per message',
      icon: Zap,
    },
    {
      layer: 4,
      title: 'HMAC Authentication',
      description: 'Message integrity verification',
      icon: Fingerprint,
    },
    {
      layer: 5,
      title: 'Key Rotation',
      description: 'Dynamic key management system',
      icon: Unlock,
    },
    {
      layer: 6,
      title: 'Steganography',
      description: 'Hide data in emoji patterns',
      icon: Globe,
    },
    {
      layer: 7,
      title: 'User Fingerprint',
      description: 'Unique signature per user account',
      icon: Users,
    },
  ];

  const features = [
    {
      icon: Shield,
      title: '7-Layer Security System',
      description: 'Advanced multi-layer encryption with user fingerprinting for maximum security',
    },
    {
      icon: Globe,
      title: 'Universal Language Support',
      description: 'Works with all languages including Arabic, Chinese, Urdu, Hindi, and 200+ emojis',
    },
    {
      icon: Vault,
      title: 'Secure Personal Vault',
      description: 'Store, manage, and export your encrypted messages with full history tracking',
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Perfect experience on all devices with responsive design',
    },
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="max-w-6xl mx-auto px-2 md:px-4 py-4 md:py-8">
          <div className="mb-8 md:mb-12">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 mb-4 md:mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4 font-brand">How It Works</h1>
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
                Transform your messages into unbreakable codes with our advanced 7-layer encryption system
              </p>
            </div>
          </div>

          {/* Steps Section */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 text-center">Simple 5-Step Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="cipher-card hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="text-center">
                    <div className={`inline-flex p-3 md:p-4 rounded-full bg-gradient-to-r ${step.color} mb-4`}>
                      <step.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="mb-2 text-xs md:text-sm font-medium text-primary">
                      Step {index + 1}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Layers Section */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 text-center">7-Layer Security System</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {securityLayers.map((layer, index) => (
                <div 
                  key={index} 
                  className="cipher-card hover:shadow-lg transition-all duration-300 animate-fade-in border-l-4 border-l-primary"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {layer.layer}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <layer.icon className="w-4 h-4 text-primary" />
                        <h3 className="text-sm md:text-base font-semibold text-foreground">
                          {layer.title}
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        {layer.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 text-center">Why Choose Cipher Forge?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="cipher-card text-center hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{animationDelay: `${(index + 7) * 0.1}s`}}
                >
                  <div className="p-3 bg-primary/10 rounded-lg inline-flex mb-4">
                    <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Security Notice */}
          <div className="cipher-card bg-primary/5 border-primary/20 text-center">
            <Lock className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
              Your Privacy is Protected
            </h3>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              All encryption happens locally in your browser with your unique fingerprint signature. 
              Your messages never leave your device unencrypted, ensuring complete privacy and security.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default HowItWorks;
