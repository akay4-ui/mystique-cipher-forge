
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AnimatedTaglines: React.FC = () => {
  const { t } = useLanguage();
  const [currentTagline, setCurrentTagline] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayText, setDisplayText] = useState('');

  const taglines = [
    { key: 'tagline1', emoji: "🌍" },
    { key: 'tagline2', emoji: "😊" },
    { key: 'tagline3', emoji: "🛡️" }
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = t(taglines[currentTagline].key);
    
    if (currentChar < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev + currentText[currentChar]);
        setCurrentChar(prev => prev + 1);
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setCurrentChar(0);
        setDisplayText('');
        setCurrentTagline((prev) => (prev + 1) % taglines.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [currentChar, currentTagline, t]);

  return (
    <div className="h-12 md:h-14 flex items-center justify-center">
      <p className="text-base md:text-lg lg:text-xl font-medium flex items-center gap-2">
        <span className="animate-bounce">
          {taglines[currentTagline].emoji}
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
          {displayText}
        </span>
        <span className="animate-pulse">|</span>
      </p>
    </div>
  );
};

export default AnimatedTaglines;
