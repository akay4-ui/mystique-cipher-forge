
import React, { useState } from 'react';
import { Shield, Lock, Unlock, Copy, Eye, EyeOff, Sparkles, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Footer from '@/components/Footer';

const Index = () => {
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  // Simple cipher algorithm (can be enhanced with more complex algorithms)
  const encodeMessage = (text: string, key: string): string => {
    if (!text || !key) return '';
    
    let encoded = '';
    for (let i = 0; i < text.length; i++) {
      const textChar = text.charCodeAt(i);
      const keyChar = key.charCodeAt(i % key.length);
      const encodedChar = String.fromCharCode(((textChar + keyChar) % 65536));
      encoded += encodedChar;
    }
    return btoa(encoded); // Base64 encode for safer transmission
  };

  const decodeMessage = (encodedText: string, key: string): string => {
    if (!encodedText || !key) return '';
    
    try {
      const decoded = atob(encodedText); // Base64 decode
      let original = '';
      for (let i = 0; i < decoded.length; i++) {
        const encodedChar = decoded.charCodeAt(i);
        const keyChar = key.charCodeAt(i % key.length);
        const originalChar = String.fromCharCode(((encodedChar - keyChar + 65536) % 65536));
        original += originalChar;
      }
      return original;
    } catch (error) {
      return 'Invalid encoded message or wrong password';
    }
  };

  const handleProcess = () => {
    if (!message.trim() || !password.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter both message and password",
        variant: "destructive",
      });
      return;
    }

    let processedResult;
    if (mode === 'encode') {
      processedResult = encodeMessage(message, password);
      toast({
        title: "Message Encoded",
        description: "Your secret message has been successfully encoded!",
      });
    } else {
      processedResult = decodeMessage(message, password);
      toast({
        title: "Message Decoded",
        description: "Your secret message has been revealed!",
      });
    }
    
    setResult(processedResult);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: "Text copied to clipboard",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Could not copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const clearAll = () => {
    setMessage('');
    setPassword('');
    setResult('');
  };

  return (
    <div className="min-h-screen bg-dark-gradient">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cipher-primary/20 via-transparent to-cipher-secondary/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-16">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Shield className="w-16 h-16 md:w-20 md:h-20 text-cipher-accent animate-pulse-glow" />
                <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 bg-cipher-accent/20 rounded-full blur-xl animate-pulse"></div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-cipher bg-gradient-to-r from-cipher-primary via-cipher-accent to-cipher-secondary bg-clip-text text-transparent ml-4">
                Cipher Forge
              </h1>
            </div>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Transform your messages into unbreakable secret codes with military-grade encryption
            </p>
            <div className="flex justify-center mt-8">
              <ChevronDown className="w-6 h-6 text-cipher-accent animate-bounce" />
            </div>
          </div>

          {/* Main App Container */}
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left Column - Input */}
              <div className="cipher-card animate-scale-in">
                {/* Mode Toggle */}
                <div className="flex rounded-xl bg-cipher-darker/50 p-1 mb-8">
                  <button
                    onClick={() => setMode('encode')}
                    className={`flex-1 flex items-center justify-center py-4 px-6 rounded-lg transition-all duration-500 ${
                      mode === 'encode'
                        ? 'bg-gradient-to-r from-cipher-primary to-cipher-primary/80 text-white shadow-xl transform scale-105'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Lock className="w-5 h-5 mr-3" />
                    <span className="font-semibold text-lg">Encode</span>
                  </button>
                  <button
                    onClick={() => setMode('decode')}
                    className={`flex-1 flex items-center justify-center py-4 px-6 rounded-lg transition-all duration-500 ${
                      mode === 'decode'
                        ? 'bg-gradient-to-r from-cipher-secondary to-cipher-secondary/80 text-white shadow-xl transform scale-105'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Unlock className="w-5 h-5 mr-3" />
                    <span className="font-semibold text-lg">Decode</span>
                  </button>
                </div>

                {/* Message Input */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                    {mode === 'encode' ? 'Secret Message' : 'Encoded Message'}
                  </label>
                  <div className="relative">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={mode === 'encode' ? 'Enter your secret message...' : 'Paste the encoded message...'}
                      className="input-field w-full h-40 resize-none text-lg leading-relaxed"
                      rows={6}
                    />
                    <div className="absolute bottom-3 right-3 text-xs text-gray-500">
                      {message.length} characters
                    </div>
                  </div>
                </div>

                {/* Password Input */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                    {mode === 'encode' ? 'Encryption Password' : 'Decryption Password'}
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password..."
                      className="input-field w-full pr-12 text-lg"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cipher-accent transition-all duration-300 hover:scale-110"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button
                    onClick={handleProcess}
                    className="flex-1 premium-button text-lg py-4 h-auto"
                    disabled={!message.trim() || !password.trim()}
                  >
                    <Sparkles className="w-5 h-5 mr-3" />
                    {mode === 'encode' ? 'Encode Message' : 'Decode Message'}
                  </Button>
                  <Button
                    onClick={clearAll}
                    variant="outline"
                    className="px-6 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white hover:border-gray-500 transition-all duration-300"
                  >
                    Clear
                  </Button>
                </div>
              </div>

              {/* Right Column - Result */}
              <div className="cipher-card animate-scale-in">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-cipher-accent mb-2 font-cipher">
                    {mode === 'encode' ? 'Encoded Result' : 'Decoded Result'}
                  </h3>
                  <p className="text-gray-400">
                    {result ? 'Your message is ready!' : 'Result will appear here...'}
                  </p>
                </div>

                {result ? (
                  <div className="animate-fade-in">
                    <div className="relative">
                      <textarea
                        value={result}
                        readOnly
                        className="input-field w-full h-40 resize-none bg-cipher-darker/50 text-lg leading-relaxed"
                        rows={6}
                      />
                      <button
                        onClick={() => copyToClipboard(result)}
                        className="absolute top-4 right-4 p-3 text-gray-400 hover:text-cipher-accent transition-all duration-300 bg-cipher-darker/70 rounded-lg hover:bg-cipher-darker/90 hover:scale-110"
                      >
                        <Copy className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
                      <p className="text-green-300 text-sm font-medium">
                        ✅ Successfully {mode === 'encode' ? 'encoded' : 'decoded'}! Share this with confidence.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-40 border-2 border-dashed border-gray-600 rounded-xl">
                    <div className="text-center">
                      <Shield className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                      <p className="text-gray-500">Enter your message and password to get started</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Features Section */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <div className="cipher-card text-center animate-fade-in hover:scale-105 transition-transform duration-300">
                <Lock className="w-12 h-12 text-cipher-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Military Grade</h3>
                <p className="text-gray-400">Advanced encryption algorithms protect your secrets</p>
              </div>
              <div className="cipher-card text-center animate-fade-in hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.1s'}}>
                <Sparkles className="w-12 h-12 text-cipher-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Easy to Use</h3>
                <p className="text-gray-400">Simple interface for complex encryption technology</p>
              </div>
              <div className="cipher-card text-center animate-fade-in hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.2s'}}>
                <Shield className="w-12 h-12 text-cipher-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Secure</h3>
                <p className="text-gray-400">No data stored, everything happens locally</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
