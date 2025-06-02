
import React from 'react';
import { Shield } from 'lucide-react';
import AnimatedTaglines from './AnimatedTaglines';

const HeroSection: React.FC = () => {
  return (
    <div className="text-center mb-8 animate-fade-in">
      <div className="flex items-center justify-center mb-4">
        <div className="relative">
          <Shield className="w-10 h-10 md:w-12 md:h-12 text-primary" />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold font-brand text-foreground ml-3">
          Cipher Forge
        </h1>
      </div>
      <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-4">
        Transform your messages into unbreakable secret codes
      </p>
      <AnimatedTaglines />
    </div>
  );
};

export default HeroSection;
