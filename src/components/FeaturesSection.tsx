
import React from 'react';
import { Lock, Sparkles, Shield } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-16">
      <div className="cipher-card text-center animate-fade-in hover:scale-105 transition-transform duration-300">
        <Lock className="w-12 h-12 text-cipher-primary mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Universal Support</h3>
        <p className="text-gray-400">Works with all 210+ world languages including Arabic, Chinese, Urdu, Hindi, and Unicode characters</p>
      </div>
      <div className="cipher-card text-center animate-fade-in hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.1s'}}>
        <Sparkles className="w-12 h-12 text-cipher-accent mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">200+ Emojis</h3>
        <p className="text-gray-400">Choose emoji encoding with 200+ emojis from WhatsApp, Facebook, and all major platforms</p>
      </div>
      <div className="cipher-card text-center animate-fade-in hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.2s'}}>
        <Shield className="w-12 h-12 text-cipher-secondary mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Military Grade</h3>
        <p className="text-gray-400">Advanced encryption with password protection. No data stored, everything happens locally</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
