
import React from 'react';
import { Shield, ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <div className="flex items-center justify-center mb-6">
        <div className="relative">
          <Shield className="w-12 h-12 md:w-16 md:h-16 text-primary" />
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-brand text-foreground ml-4">
          Cipher Forge
        </h1>
      </div>
      <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
        Transform your messages into unbreakable secret codes with military-grade encryption. 
        Supports all languages worldwide! 🌍
      </p>
      <div className="flex justify-center">
        <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
      </div>
    </div>
  );
};

export default HeroSection;
