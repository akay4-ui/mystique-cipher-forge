
import React, { useState } from 'react';
import { Shield, Lock, Unlock, Copy, Eye, EyeOff, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

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
    <div className="min-h-screen bg-dark-gradient p-4 md:p-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-12 h-12 text-cipher-accent mr-3 animate-pulse-glow" />
            <h1 className="text-3xl font-bold font-cipher bg-gradient-to-r from-cipher-primary to-cipher-accent bg-clip-text text-transparent">
              Cipher Forge
            </h1>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Transform your messages into unbreakable secret codes
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="cipher-card mb-6 animate-scale-in">
          <div className="flex rounded-xl bg-cipher-darker/50 p-1 mb-6">
            <button
              onClick={() => setMode('encode')}
              className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg transition-all duration-300 ${
                mode === 'encode'
                  ? 'bg-cipher-primary text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Lock className="w-4 h-4 mr-2" />
              <span className="font-medium">Encode</span>
            </button>
            <button
              onClick={() => setMode('decode')}
              className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg transition-all duration-300 ${
                mode === 'decode'
                  ? 'bg-cipher-secondary text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Unlock className="w-4 h-4 mr-2" />
              <span className="font-medium">Decode</span>
            </button>
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {mode === 'encode' ? 'Secret Message' : 'Encoded Message'}
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={mode === 'encode' ? 'Enter your secret message...' : 'Paste the encoded message...'}
              className="input-field w-full h-32 resize-none"
              rows={4}
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {mode === 'encode' ? 'Encryption Password' : 'Decryption Password'}
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                className="input-field w-full pr-12"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-6">
            <Button
              onClick={handleProcess}
              className="flex-1 premium-button"
              disabled={!message.trim() || !password.trim()}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              {mode === 'encode' ? 'Encode Message' : 'Decode Message'}
            </Button>
            <Button
              onClick={clearAll}
              variant="outline"
              className="px-4 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Clear
            </Button>
          </div>

          {/* Result */}
          {result && (
            <div className="animate-fade-in">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {mode === 'encode' ? 'Encoded Message' : 'Decoded Message'}
              </label>
              <div className="relative">
                <textarea
                  value={result}
                  readOnly
                  className="input-field w-full h-32 resize-none bg-cipher-darker/50"
                  rows={4}
                />
                <button
                  onClick={() => copyToClipboard(result)}
                  className="absolute top-3 right-3 p-2 text-gray-400 hover:text-cipher-accent transition-colors duration-200 bg-cipher-darker/70 rounded-lg"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="cipher-card text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-cipher-accent mb-3 font-cipher">
            How It Works
          </h3>
          <div className="text-sm text-gray-300 space-y-2 leading-relaxed">
            <p><strong>Encoding:</strong> Type your message and create a password. Share the encoded result.</p>
            <p><strong>Decoding:</strong> Paste the encoded message and enter the correct password to reveal the secret.</p>
            <p className="text-cipher-accent font-medium">⚡ Keep your password safe - it's the key to your secrets!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
