
import React from 'react';
import { Globe, Smile, ShieldCheck } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-16">
      <div className="feature-card animate-fade-in">
        <Globe className="w-8 h-8 md:w-12 md:h-12 text-primary mx-auto mb-4" />
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">Universal Support</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Works with all 210+ world languages including Arabic, Chinese, Urdu, Hindi, and Unicode characters
        </p>
      </div>
      
      <div className="feature-card animate-fade-in" style={{animationDelay: '0.1s'}}>
        <Smile className="w-8 h-8 md:w-12 md:h-12 text-primary mx-auto mb-4" />
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">200+ Emojis</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Choose emoji encoding with 200+ emojis from WhatsApp, Facebook, and all major platforms
        </p>
      </div>
      
      <div className="feature-card animate-fade-in" style={{animationDelay: '0.2s'}}>
        <ShieldCheck className="w-8 h-8 md:w-12 md:h-12 text-primary mx-auto mb-4" />
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">Military Grade</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Advanced encryption with password protection. No data stored, everything happens locally
        </p>
      </div>
    </div>
  );
};

export default FeaturesSection;
