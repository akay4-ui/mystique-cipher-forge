
import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold font-cipher text-white">Privacy Policy</h1>
          </div>
          <p className="text-gray-400">Last updated: December 2024</p>
        </div>

        {/* Content */}
        <div className="cipher-card prose prose-invert max-w-none">
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
              <p>
                At Cipher Forge, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
                and protect your information when you use our secret message encoding and decoding service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <h3 className="text-xl font-medium text-cipher-accent mb-2">Information You Provide</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Messages you choose to encode or decode</li>
                <li>Passwords used for encryption/decryption</li>
                <li>Usage analytics to improve our service</li>
              </ul>
              
              <h3 className="text-xl font-medium text-cipher-accent mb-2">Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Browser type and version</li>
                <li>Operating system information</li>
                <li>IP address (anonymized)</li>
                <li>Usage patterns and preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Process your encoding and decoding requests</li>
                <li>Improve our service functionality and security</li>
                <li>Provide customer support when needed</li>
                <li>Ensure the security and integrity of our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your data. All processing happens 
                locally in your browser, and we do not store your messages or passwords on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Services</h2>
              <p>
                We may use third-party services for analytics and performance monitoring. These services 
                are bound by their own privacy policies and data protection measures.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@cipherforge.com
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
