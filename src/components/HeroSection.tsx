
import React from 'react';
import { Shield, ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <div className="flex items-center justify-center mb-6">
        <div className="relative">
          <Shield className="w-16 h-16 md:w-20 md:h-20 text-cipher-accent animate-pulse-glow" />
          <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 bg-cipher-accent/20 rounded-full blur-xl animate-pulse"></div>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-cipher bg-gradient-to-r from-cipher-primary via-cipher-accent to-cipher-secondary bg-clip-text text-transparent ml-4">
          Cipher Forge
        </h1>
      </div>
      <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        Transform your messages into unbreakable secret codes with military-grade encryption. Supports all languages worldwide! 🌍
      </p>
      <div className="flex justify-center mt-8">
        <ChevronDown className="w-6 h-6 text-cipher-accent animate-bounce" />
      </div>
    </div>
  );
};

export default HeroSection;
