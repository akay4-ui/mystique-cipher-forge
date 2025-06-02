
import React from 'react';
import { Shield, Mail, FileText, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Mobile Layout */}
        <div className="md:hidden text-center space-y-6">
          <div className="flex items-center justify-center">
            <Shield className="w-6 h-6 text-primary mr-2" />
            <span className="text-lg font-bold font-brand text-foreground">Cipher Forge</span>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed">
            Secure message encryption for the modern world
          </p>

          <div className="flex justify-center space-x-6">
            <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
              <HelpCircle className="w-5 h-5" />
            </Link>
            <a href="mailto:support@cipherforge.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
              <FileText className="w-5 h-5" />
            </Link>
          </div>

          <div className="text-muted-foreground text-xs">
            © 2024 Cipher Forge. All rights reserved.
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-primary mr-2" />
              <span className="text-xl font-bold font-brand text-foreground">Cipher Forge</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Secure message encryption for the modern world. Transform your communications into unbreakable codes.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/settings" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Settings
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@cipherforge.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Contact Support
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <HelpCircle className="w-5 h-5" />
              </Link>
              <a href="mailto:support@cipherforge.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <FileText className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section - Desktop */}
        <div className="hidden md:block border-t border-border mt-8 pt-8">
          <div className="text-center text-muted-foreground text-sm">
            © 2024 Cipher Forge. All rights reserved. Built with security in mind.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
