
import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Settings, HelpCircle, Home, Shield } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Theme Toggle - Left */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-foreground" />
            ) : (
              <Sun className="w-5 h-5 text-foreground" />
            )}
          </button>

          {/* Cipher Forge Logo - Center */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold font-brand text-foreground">
              Cipher Forge
            </h1>
          </Link>

          {/* Desktop Navigation - Right */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="/settings" className="text-muted-foreground hover:text-foreground transition-colors">
              Settings
            </Link>
          </nav>

          {/* Mobile Menu Button - Right */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors duration-200 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-2 pt-4">
              <Link
                to="/"
                onClick={closeMenu}
                className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 ${
                  location.pathname === '/'
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted text-foreground'
                }`}
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link
                to="/how-it-works"
                onClick={closeMenu}
                className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 ${
                  location.pathname === '/how-it-works'
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted text-foreground'
                }`}
              >
                <HelpCircle className="w-5 h-5" />
                <span>How It Works</span>
              </Link>
              <Link
                to="/features"
                onClick={closeMenu}
                className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 ${
                  location.pathname === '/features'
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted text-foreground'
                }`}
              >
                <HelpCircle className="w-5 h-5" />
                <span>Features</span>
              </Link>
              <Link
                to="/settings"
                onClick={closeMenu}
                className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 ${
                  location.pathname === '/settings'
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted text-foreground'
                }`}
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
