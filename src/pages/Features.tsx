
import React from 'react';
import { Shield, ArrowLeft, Globe, Zap, Lock, Sparkles, Eye, Copy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-4xl mx-auto px-2 md:px-4 py-4 md:py-8">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 mb-4 md:mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center mb-4">
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-primary mr-2 md:mr-3" />
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-brand text-foreground">Features</h1>
          </div>
          <p className="text-muted-foreground text-sm md:text-base">Discover all the powerful features of Cipher Forge</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
          <div className="cipher-card">
            <Globe className="w-8 h-8 md:w-12 md:h-12 text-primary mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">Universal Language Support</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Encode and decode messages in all 210+ world languages. Our Unicode-aware algorithm supports 
              Arabic, Chinese, Russian, Hindi, and every other language on Earth.
            </p>
          </div>

          <div className="cipher-card">
            <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-primary mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">Multiple Encoding Methods</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Choose between advanced text cipher for serious encryption or fun emoji cipher for 
              casual conversations. Each method offers unique advantages.
            </p>
          </div>

          <div className="cipher-card">
            <Lock className="w-8 h-8 md:w-12 md:h-12 text-primary mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">Password Protection</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Every message is protected by your custom password. Only those with the exact password 
              can decode your secret messages.
            </p>
          </div>

          <div className="cipher-card">
            <Zap className="w-8 h-8 md:w-12 md:h-12 text-primary mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">Lightning Fast</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Process messages instantly with our optimized algorithms. No waiting, no delays - 
              your encoded messages are ready in milliseconds.
            </p>
          </div>

          <div className="cipher-card">
            <Eye className="w-8 h-8 md:w-12 md:h-12 text-primary mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">Privacy First</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              All processing happens locally in your browser. We never store your messages, passwords, 
              or any personal data on our servers.
            </p>
          </div>

          <div className="cipher-card">
            <Copy className="w-8 h-8 md:w-12 md:h-12 text-primary mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">Easy Sharing</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              One-click copy functionality makes sharing your encoded messages effortless. 
              Works across all platforms and messaging apps.
            </p>
          </div>
        </div>

        {/* Detailed Features */}
        <div className="cipher-card">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Why Choose Cipher Forge?</h2>
          <div className="space-y-3 md:space-y-4 text-muted-foreground text-sm md:text-base">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
              <p><strong className="text-foreground">Military-Grade Security:</strong> Advanced encryption algorithms protect your most sensitive communications.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
              <p><strong className="text-foreground">Cross-Platform Compatibility:</strong> Works seamlessly on desktop, mobile, and tablet devices.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
              <p><strong className="text-foreground">No Registration Required:</strong> Start encoding messages immediately without any sign-up process.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
              <p><strong className="text-foreground">Offline Capable:</strong> Once loaded, the app works without an internet connection.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Features;
