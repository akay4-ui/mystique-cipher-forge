
import React, { useState, useEffect } from 'react';

const AnimatedTaglines: React.FC = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const taglines = [
    { text: "Universal Language Support", emoji: "🌍", color: "from-blue-500 to-purple-600" },
    { text: "200+ Emoji Collection", emoji: "😊", color: "from-purple-500 to-pink-600" },
    { text: "Military-Grade Security", emoji: "🛡️", color: "from-green-500 to-blue-600" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentTagline((prev) => (prev + 1) % taglines.length);
        setIsVisible(true);
        setTimeout(() => setIsAnimating(false), 400);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentTag = taglines[currentTagline];

  return (
    <div className="h-14 flex items-center justify-center mb-6 relative overflow-hidden">
      <div
        className={`text-center transition-all duration-500 ease-out ${
          isVisible 
            ? 'opacity-100 transform scale-100 translate-y-0' 
            : 'opacity-0 transform scale-90 translate-y-2'
        }`}
      >
        <div className={`relative bg-gradient-to-r ${currentTag.color} p-[2px] rounded-full overflow-hidden`}>
          <div className="bg-background rounded-full px-6 py-3 relative">
            <div className={`absolute inset-0 bg-gradient-to-r ${currentTag.color} opacity-10 rounded-full ${isAnimating ? 'animate-pulse' : ''}`} />
            <p className="text-sm md:text-base font-semibold text-foreground relative z-10 flex items-center justify-center gap-2">
              <span className={`text-lg transition-transform duration-300 ${isAnimating ? 'scale-125' : 'scale-100'}`}>
                {currentTag.emoji}
              </span>
              {currentTag.text}
            </p>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r ${currentTag.color} opacity-5 rounded-full blur-3xl transition-all duration-1000`} />
      </div>
    </div>
  );
};

export default AnimatedTaglines;
