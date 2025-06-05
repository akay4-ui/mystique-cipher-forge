
import React from 'react';
import { Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <div className="text-center mb-8 md:mb-12">
      <div className="flex items-center justify-center mb-4 md:mb-6">
        <Shield className="w-10 h-10 md:w-12 md:h-12 text-primary mr-3" />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-brand">
          {t('app.title')}
        </h1>
      </div>
      
      <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
        {t('app.description')}
      </p>
    </div>
  );
};

export default HeroSection;
