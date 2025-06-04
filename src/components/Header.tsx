
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Settings } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Shield className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <span className="text-lg md:text-xl font-bold text-foreground font-brand">
              {t('app.title')}
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              to="/how-it-works"
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
            >
              {t('nav.how-it-works')}
            </Link>
            <Link
              to="/features"
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
            >
              {t('nav.features')}
            </Link>
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-2">
            <SignedOut>
              <SignInButton 
                mode="modal"
                appearance={{
                  elements: {
                    modalContent: "sm:max-w-md",
                    card: "w-full",
                    rootBox: "w-full",
                    formButtonPrimary: "w-full bg-primary hover:bg-primary/90 text-primary-foreground",
                    formFieldInput: "w-full",
                    socialButtonsBlockButton: "w-full",
                    dividerLine: "bg-border",
                    dividerText: "text-muted-foreground text-xs",
                    formHeaderTitle: "text-foreground",
                    formHeaderSubtitle: "text-muted-foreground",
                    socialButtonsProviderIcon: "w-4 h-4",
                    footer: "hidden"
                  },
                  layout: {
                    socialButtonsVariant: "blockButton",
                    socialButtonsPlacement: "bottom"
                  }
                }}
              >
                <button className="flex items-center space-x-1 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted">
                  <span>{t('auth.sign-in')}</span>
                </button>
              </SignInButton>
            </SignedOut>
            
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                    userButtonPopoverCard: "shadow-lg border border-border",
                    userButtonPopoverActionButton: "text-foreground hover:bg-muted",
                    userButtonPopoverActionButtonText: "text-foreground"
                  }
                }}
              />
            </SignedIn>
            
            <Link
              to="/settings"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
            >
              <Settings className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
