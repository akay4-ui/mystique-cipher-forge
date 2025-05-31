
import React from 'react';
import { Shield, ArrowLeft, Lock, Eye, Server, Key } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const Security = () => {
  return (
    <div className="min-h-screen bg-dark-gradient">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-cipher-accent hover:text-cipher-primary transition-colors duration-300 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 text-cipher-accent mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold font-cipher text-white">Security</h1>
          </div>
          <p className="text-gray-400">Your privacy and security are our top priorities</p>
        </div>

        {/* Security Features */}
        <div className="space-y-8">
          <div className="cipher-card">
            <div className="flex items-center mb-4">
              <Lock className="w-8 h-8 text-cipher-primary mr-3" />
              <h2 className="text-2xl font-semibold text-white">Encryption Standards</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>
                Cipher Forge uses advanced cryptographic algorithms to ensure your messages remain secure:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Unicode-aware character encoding for global language support</li>
                <li>Password-based key derivation for enhanced security</li>
                <li>Base64 encoding for safe text transmission</li>
                <li>Client-side processing to prevent data interception</li>
              </ul>
            </div>
          </div>

          <div className="cipher-card">
            <div className="flex items-center mb-4">
              <Eye className="w-8 h-8 text-cipher-accent mr-3" />
              <h2 className="text-2xl font-semibold text-white">Privacy Protection</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>We implement strict privacy measures:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>No message storage on our servers</li>
                <li>No password logging or retention</li>
                <li>No user tracking or analytics cookies</li>
                <li>All processing happens in your browser</li>
                <li>No third-party data sharing</li>
              </ul>
            </div>
          </div>

          <div className="cipher-card">
            <div className="flex items-center mb-4">
              <Server className="w-8 h-8 text-cipher-secondary mr-3" />
              <h2 className="text-2xl font-semibold text-white">Infrastructure Security</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>Our platform is built with security in mind:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>HTTPS encryption for all communications</li>
                <li>Regular security audits and updates</li>
                <li>Secure hosting with industry-leading providers</li>
                <li>DDoS protection and monitoring</li>
              </ul>
            </div>
          </div>

          <div className="cipher-card">
            <div className="flex items-center mb-4">
              <Key className="w-8 h-8 text-yellow-400 mr-3" />
              <h2 className="text-2xl font-semibold text-white">Best Practices</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>Follow these recommendations for maximum security:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use strong, unique passwords for each message</li>
                <li>Share passwords through secure, separate channels</li>
                <li>Avoid using predictable password patterns</li>
                <li>Clear your browser cache after sensitive operations</li>
                <li>Verify the website URL before entering sensitive data</li>
              </ul>
            </div>
          </div>

          <div className="cipher-card bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Security Disclaimer</h2>
            <p className="text-gray-300">
              While Cipher Forge implements strong security measures, no system is 100% secure. 
              For extremely sensitive information, consider using additional security layers and 
              consult with cybersecurity professionals.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Security;
