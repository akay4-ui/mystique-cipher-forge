
import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Settings, HelpCircle, Home } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { title: 'Home', path: '/', icon: Home },
    { title: 'Features', path: '/features', icon: HelpCircle },
    { title: 'Settings', path: '/settings', icon: Settings },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Theme Toggle on the left */}
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

          {/* Desktop Navigation - only visible on larger screens */}
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

          {/* Mobile Menu Button - only visible on mobile */}
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
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 shadow-2xl z-40 transform transition-all duration-300 md:hidden backdrop-blur-xl border-l-2 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backgroundColor: theme === 'dark' 
            ? 'rgba(15, 23, 42, 0.98)' 
            : 'rgba(241, 245, 249, 0.98)',
          borderColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.15)',
        }}
      >
        <div className="p-6 pt-20">
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={toggleMenu}
                className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'hover:bg-primary/10 text-foreground hover:text-primary'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
