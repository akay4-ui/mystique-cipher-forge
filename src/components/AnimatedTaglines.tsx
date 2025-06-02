
import React, { useState, useEffect } from 'react';

const AnimatedTaglines: React.FC = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const taglines = [
    "Universal Language Support 🌍",
    "200+ Emoji Collection 😊",
    "Military-Grade Security 🛡️"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentTagline((prev) => (prev + 1) % taglines.length);
        setIsVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-12 flex items-center justify-center mb-6">
      <div
        className={`text-center transition-all duration-300 ${
          isVisible 
            ? 'opacity-100 transform scale-100' 
            : 'opacity-0 transform scale-95'
        }`}
      >
        <p className="text-sm md:text-base font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
          {taglines[currentTagline]}
        </p>
      </div>
    </div>
  );
};

export default AnimatedTaglines;
