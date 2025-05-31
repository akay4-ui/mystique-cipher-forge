
import React from 'react';
import { Shield, Github, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cipher-darker/80 backdrop-blur-lg border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-cipher-accent mr-2" />
              <span className="text-xl font-bold font-cipher text-white">Cipher Forge</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Secure message encryption for the modern world. Transform your communications into unbreakable codes.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-cipher-accent transition-colors duration-300">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-cipher-accent transition-colors duration-300">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-gray-400 hover:text-cipher-accent transition-colors duration-300">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-cipher-accent transition-colors duration-300">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-400 hover:text-cipher-accent transition-colors duration-300">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cipher-accent transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-gray-400 hover:text-cipher-accent transition-colors duration-300">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/api" className="text-gray-400 hover:text-cipher-accent transition-colors duration-300">
                  API Reference
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-cipher-accent transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-cipher-accent transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-400 hover:text-cipher-accent transition-colors duration-300">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-400 hover:text-cipher-accent transition-colors duration-300">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Cipher Forge. All rights reserved. Built with security in mind.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cipher-accent transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cipher-accent transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cipher-accent transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
