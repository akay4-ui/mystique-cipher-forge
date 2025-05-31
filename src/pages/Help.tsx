
import React from 'react';
import { Shield, ArrowLeft, MessageSquare, Mail, Book } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const Help = () => {
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
            <MessageSquare className="w-8 h-8 text-cipher-accent mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold font-cipher text-white">Help Center</h1>
          </div>
          <p className="text-gray-400">Find answers to common questions and get support</p>
        </div>

        {/* Help Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="cipher-card">
            <Book className="w-12 h-12 text-cipher-primary mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Getting Started</h3>
            <p className="text-gray-300 mb-4">
              Learn the basics of using Cipher Forge to encode and decode your messages.
            </p>
            <Link to="/how-it-works" className="text-cipher-accent hover:text-cipher-primary transition-colors">
              View Tutorial →
            </Link>
          </div>

          <div className="cipher-card">
            <Mail className="w-12 h-12 text-cipher-accent mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Contact Support</h3>
            <p className="text-gray-300 mb-4">
              Need personalized help? Our support team is here to assist you.
            </p>
            <Link to="/contact" className="text-cipher-accent hover:text-cipher-primary transition-colors">
              Contact Us →
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="cipher-card">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-cipher-accent mb-2">How secure is Cipher Forge?</h3>
              <p className="text-gray-300">
                Cipher Forge uses advanced encryption algorithms and processes everything locally in your browser. 
                We never store your messages or passwords on our servers.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-cipher-accent mb-2">What languages are supported?</h3>
              <p className="text-gray-300">
                Cipher Forge supports all 210+ world languages through Unicode-aware encoding. You can encode 
                messages in Arabic, Chinese, Russian, Hindi, and any other language.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-cipher-accent mb-2">What's the difference between text and emoji cipher?</h3>
              <p className="text-gray-300">
                Text cipher uses advanced cryptographic algorithms for serious encryption, while emoji cipher 
                converts your message into fun emojis for casual conversations.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-cipher-accent mb-2">Can I decode messages without the password?</h3>
              <p className="text-gray-300">
                No, the password is required to decode messages. This ensures that only authorized recipients 
                can read your secret messages.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-cipher-accent mb-2">Is there a character limit for messages?</h3>
              <p className="text-gray-300">
                The free version supports messages up to 10,000 characters. Pro and Enterprise plans have 
                higher limits or no limits at all.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-cipher-accent mb-2">Does Cipher Forge work offline?</h3>
              <p className="text-gray-300">
                Yes! Once the page is loaded, Cipher Forge works completely offline since all processing 
                happens in your browser.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Help;
