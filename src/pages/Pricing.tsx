
import React from 'react';
import { Shield, ArrowLeft, Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-dark-gradient">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center text-cipher-accent hover:text-cipher-primary transition-colors duration-300 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold font-cipher text-white mb-4">Pricing Plans</h1>
          <p className="text-gray-400 text-lg">Choose the perfect plan for your encryption needs</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Free Plan */}
          <div className="cipher-card">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
              <div className="text-4xl font-bold text-cipher-accent mb-4">$0<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-400">Perfect for personal use</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                Basic text encoding/decoding
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                All world languages support
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                Emoji cipher method
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                Basic password protection
              </li>
            </ul>
            <Button className="w-full premium-button">Get Started Free</Button>
          </div>

          {/* Pro Plan */}
          <div className="cipher-card border-2 border-cipher-accent relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-cipher-primary to-cipher-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <div className="text-4xl font-bold text-cipher-accent mb-4">$9<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-400">For professionals and teams</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                Everything in Free
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                Advanced encryption algorithms
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                File encryption support
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                Batch processing
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                Priority support
              </li>
            </ul>
            <Button className="w-full premium-button">Upgrade to Pro</Button>
          </div>

          {/* Enterprise Plan */}
          <div className="cipher-card">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-cipher-accent mb-4">$29<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-400">For large organizations</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                Everything in Pro
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                API access
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                Custom encryption methods
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                Team management
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                24/7 dedicated support
              </li>
            </ul>
            <Button className="w-full premium-button">Contact Sales</Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="cipher-card">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-cipher-accent mb-2">Can I upgrade or downgrade anytime?</h3>
              <p className="text-gray-300">Yes, you can change your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cipher-accent mb-2">Is there a free trial for paid plans?</h3>
              <p className="text-gray-300">We offer a 14-day free trial for all paid plans. No credit card required.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cipher-accent mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
