
import React from 'react';
import { Shield, ArrowLeft, Lock, Unlock, Key, Send, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Choose Your Mode",
      description: "Select whether you want to encode a new message or decode a received one.",
      color: "text-cipher-primary"
    },
    {
      icon: <Key className="w-8 h-8" />,
      title: "Enter Your Content",
      description: "Type your secret message or paste the encoded text you received.",
      color: "text-cipher-accent"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Set Password",
      description: "Create a strong password for encoding or enter the password to decode.",
      color: "text-cipher-secondary"
    },
    {
      icon: <Send className="w-8 h-8" />,
      title: "Process & Share",
      description: "Get your encoded message to share or reveal the decoded secret.",
      color: "text-green-400"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-gradient">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center text-cipher-accent hover:text-cipher-primary transition-colors duration-300 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-cipher bg-gradient-to-r from-cipher-primary to-cipher-accent bg-clip-text text-transparent mb-4">
              How It Works
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Secure message encryption made simple. Follow these easy steps to protect your communications.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="cipher-card text-center hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className={`${step.color} mb-4 flex justify-center`}>
                {step.icon}
              </div>
              <div className="text-sm text-cipher-accent font-semibold mb-2">STEP {index + 1}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12">
          {/* Encoding Process */}
          <div className="cipher-card">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-cipher-primary mr-3" />
                  <h2 className="text-3xl font-bold text-white font-cipher">Encoding Messages</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    When you want to send a secret message, our encoding process transforms your plain text 
                    into an encrypted format that only someone with the correct password can decode.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cipher-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Type your secret message in the input field
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cipher-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Create a strong, memorable password
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cipher-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Click "Encode Message" to generate encrypted text
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cipher-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Share the encoded message and password separately
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="bg-cipher-darker/50 rounded-xl p-6 border border-cipher-primary/30">
                  <div className="text-cipher-primary text-sm font-semibold mb-2">EXAMPLE INPUT</div>
                  <div className="bg-cipher-darker/80 rounded-lg p-4 mb-4">
                    <div className="text-gray-300 text-sm">Message: "Meet me at the secret location"</div>
                    <div className="text-gray-300 text-sm">Password: "SecureKey123"</div>
                  </div>
                  <div className="text-cipher-accent text-sm font-semibold mb-2">ENCODED OUTPUT</div>
                  <div className="bg-cipher-darker/80 rounded-lg p-4 font-mono text-xs text-gray-400 break-all">
                    VGhpcyBpcyBhbiBlbmNvZGVkIG1lc3NhZ2U=
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decoding Process */}
          <div className="cipher-card">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="bg-cipher-darker/50 rounded-xl p-6 border border-cipher-secondary/30">
                    <div className="text-cipher-secondary text-sm font-semibold mb-2">ENCODED INPUT</div>
                    <div className="bg-cipher-darker/80 rounded-lg p-4 mb-4 font-mono text-xs text-gray-400 break-all">
                      VGhpcyBpcyBhbiBlbmNvZGVkIG1lc3NhZ2U=
                    </div>
                    <div className="text-cipher-accent text-sm font-semibold mb-2">DECODED OUTPUT</div>
                    <div className="bg-cipher-darker/80 rounded-lg p-4">
                      <div className="text-green-300 text-sm">"Meet me at the secret location"</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <Unlock className="w-6 h-6 text-cipher-secondary mr-3" />
                  <h2 className="text-3xl font-bold text-white font-cipher">Decoding Messages</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    When you receive an encoded message, our decoding process reverses the encryption 
                    to reveal the original secret message using the correct password.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cipher-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Paste the encoded message you received
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cipher-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Enter the password provided by the sender
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cipher-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Click "Decode Message" to reveal the secret
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cipher-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      View the original message securely
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="cipher-card">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white font-cipher mb-4">Security Features</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Your security is our priority. Here's how we protect your sensitive information.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Eye className="w-12 h-12 text-cipher-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No Storage</h3>
                <p className="text-gray-400 text-sm">Messages are processed locally in your browser and never stored on our servers.</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-cipher-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Strong Encryption</h3>
                <p className="text-gray-400 text-sm">Advanced algorithms ensure your messages remain secure and unreadable.</p>
              </div>
              <div className="text-center">
                <Key className="w-12 h-12 text-cipher-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Password Protection</h3>
                <p className="text-gray-400 text-sm">Only those with the correct password can decode your secret messages.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;
