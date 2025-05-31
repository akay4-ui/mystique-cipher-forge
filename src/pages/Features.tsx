
import React from 'react';
import { Shield, ArrowLeft, Globe, Zap, Lock, Sparkles, Eye, Copy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const Features = () => {
  return (
    <div className="min-h-screen bg-dark-gradient">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-cipher-accent hover:text-cipher-primary transition-colors duration-300 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center mb-4">
            <Sparkles className="w-8 h-8 text-cipher-accent mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold font-cipher text-white">Features</h1>
          </div>
          <p className="text-gray-400">Discover all the powerful features of Cipher Forge</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="cipher-card">
            <Globe className="w-12 h-12 text-cipher-primary mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Universal Language Support</h3>
            <p className="text-gray-300">
              Encode and decode messages in all 210+ world languages. Our Unicode-aware algorithm supports 
              Arabic, Chinese, Russian, Hindi, and every other language on Earth.
            </p>
          </div>

          <div className="cipher-card">
            <Sparkles className="w-12 h-12 text-cipher-accent mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Multiple Encoding Methods</h3>
            <p className="text-gray-300">
              Choose between advanced text cipher for serious encryption or fun emoji cipher for 
              casual conversations. Each method offers unique advantages.
            </p>
          </div>

          <div className="cipher-card">
            <Lock className="w-12 h-12 text-cipher-secondary mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Password Protection</h3>
            <p className="text-gray-300">
              Every message is protected by your custom password. Only those with the exact password 
              can decode your secret messages.
            </p>
          </div>

          <div className="cipher-card">
            <Zap className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
            <p className="text-gray-300">
              Process messages instantly with our optimized algorithms. No waiting, no delays - 
              your encoded messages are ready in milliseconds.
            </p>
          </div>

          <div className="cipher-card">
            <Eye className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Privacy First</h3>
            <p className="text-gray-300">
              All processing happens locally in your browser. We never store your messages, passwords, 
              or any personal data on our servers.
            </p>
          </div>

          <div className="cipher-card">
            <Copy className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Easy Sharing</h3>
            <p className="text-gray-300">
              One-click copy functionality makes sharing your encoded messages effortless. 
              Works across all platforms and messaging apps.
            </p>
          </div>
        </div>

        {/* Detailed Features */}
        <div className="cipher-card">
          <h2 className="text-2xl font-bold text-white mb-6">Why Choose Cipher Forge?</h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-cipher-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
              <p><strong className="text-white">Military-Grade Security:</strong> Advanced encryption algorithms protect your most sensitive communications.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-cipher-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
              <p><strong className="text-white">Cross-Platform Compatibility:</strong> Works seamlessly on desktop, mobile, and tablet devices.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-cipher-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
              <p><strong className="text-white">No Registration Required:</strong> Start encoding messages immediately without any sign-up process.</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-cipher-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
              <p><strong className="text-white">Offline Capable:</strong> Once loaded, the app works without an internet connection.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Features;
