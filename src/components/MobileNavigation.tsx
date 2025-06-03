
import React, { useState } from 'react';
import { Menu, X, Settings, HelpCircle, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';

const MobileNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  const menuItems = [
    { title: 'Home', path: '/', icon: Home },
    { title: 'Features', path: '/features', icon: HelpCircle },
    { title: 'Settings', path: '/settings', icon: Settings },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Side Menu */}
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
    </>
  );
};

export default MobileNavigation;
