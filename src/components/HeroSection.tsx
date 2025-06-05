
import React from 'react';
import AnimatedTaglines from './AnimatedTaglines';

const HeroSection: React.FC = () => {
  return (
    <div className="text-center mb-6 md:mb-8 animate-fade-in">
      <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6">
        Transform your messages into unbreakable secret codes
      </p>
      
      <AnimatedTaglines />
      
      <div className="flex items-center justify-center space-x-2 mb-4 mt-4">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-xs md:text-sm text-muted-foreground font-medium">
          Advanced 7-Layer Encryption Active
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
