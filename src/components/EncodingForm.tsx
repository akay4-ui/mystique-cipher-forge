
import React, { useState } from 'react';
import { Lock, Unlock, Eye, EyeOff, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface EncodingFormProps {
  mode: 'encode' | 'decode';
  setMode: (mode: 'encode' | 'decode') => void;
  message: string;
  setMessage: (message: string) => void;
  password: string;
  setPassword: (password: string) => void;
  encodingMethod: string;
  setEncodingMethod: (method: string) => void;
  onProcess: () => void;
  onClear: () => void;
}

const EncodingForm: React.FC<EncodingFormProps> = ({
  mode,
  setMode,
  message,
  setMessage,
  password,
  setPassword,
  encodingMethod,
  setEncodingMethod,
  onProcess,
  onClear
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="cipher-card animate-scale-in">
      {/* Mode Toggle - Improved mobile layout */}
      <div className="flex rounded-xl bg-cipher-darker/50 p-1 mb-6 md:mb-8">
        <button
          onClick={() => setMode('encode')}
          className={`flex-1 flex items-center justify-center py-3 md:py-4 px-4 md:px-6 rounded-lg transition-all duration-500 ${
            mode === 'encode'
              ? 'bg-gradient-to-r from-cipher-primary to-cipher-primary/80 text-white shadow-xl transform scale-105'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Lock className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
          <span className="font-semibold text-sm md:text-lg">Encode</span>
        </button>
        <button
          onClick={() => setMode('decode')}
          className={`flex-1 flex items-center justify-center py-3 md:py-4 px-4 md:px-6 rounded-lg transition-all duration-500 ${
            mode === 'decode'
              ? 'bg-gradient-to-r from-cipher-secondary to-cipher-secondary/80 text-white shadow-xl transform scale-105'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Unlock className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
          <span className="font-semibold text-sm md:text-lg">Decode</span>
        </button>
      </div>

      {/* Encoding Method Selection - Better mobile spacing */}
      <div className="mb-6 md:mb-8">
        <label className="block text-xs md:text-sm font-semibold text-gray-300 mb-2 md:mb-3 uppercase tracking-wider">
          Encoding Method
        </label>
        <Select value={encodingMethod} onValueChange={setEncodingMethod}>
          <SelectTrigger className="input-field h-12 md:h-auto text-sm md:text-base">
            <SelectValue placeholder="Select encoding method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="text">🔤 Text Cipher (All Languages)</SelectItem>
            <SelectItem value="emoji">😀 Emoji Cipher (WhatsApp & All Platforms)</SelectItem>
          </SelectContent>
        </Select>
        {encodingMethod === 'emoji' && (
          <p className="text-xs text-gray-400 mt-2 leading-relaxed">
            ✨ Converts any language to emojis using 200+ emojis from all platforms
          </p>
        )}
      </div>

      {/* Message Input - Enhanced mobile experience */}
      <div className="mb-6 md:mb-8">
        <label className="block text-xs md:text-sm font-semibold text-gray-300 mb-2 md:mb-3 uppercase tracking-wider">
          {mode === 'encode' ? 'Secret Message' : 'Encoded Message'}
        </label>
        <div className="relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={mode === 'encode' 
              ? (encodingMethod === 'emoji' 
                ? 'Enter your message in any language (Arabic, Chinese, Urdu, etc.) - will become emojis...' 
                : 'Enter your secret message in any language...')
              : (encodingMethod === 'emoji'
                ? 'Paste the emoji encoded message...'
                : 'Paste the encoded message...')
            }
            className="input-field w-full h-32 md:h-40 resize-none text-sm md:text-lg leading-relaxed placeholder:text-xs md:placeholder:text-sm"
            rows={6}
          />
          <div className="absolute bottom-2 md:bottom-3 right-2 md:right-3 text-xs text-gray-500 bg-cipher-darker/80 px-2 py-1 rounded">
            {message.length} chars
          </div>
        </div>
      </div>

      {/* Password Input - Mobile optimized */}
      <div className="mb-6 md:mb-8">
        <label className="block text-xs md:text-sm font-semibold text-gray-300 mb-2 md:mb-3 uppercase tracking-wider">
          {mode === 'encode' ? 'Encryption Password' : 'Decryption Password'}
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password..."
            className="input-field w-full h-12 md:h-auto pr-12 text-sm md:text-lg"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cipher-accent transition-all duration-300 hover:scale-110 p-1"
          >
            {showPassword ? <EyeOff className="w-4 h-4 md:w-5 md:h-5" /> : <Eye className="w-4 h-4 md:w-5 md:h-5" />}
          </button>
        </div>
      </div>

      {/* Action Buttons - Mobile stacked layout */}
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
        <Button
          onClick={onProcess}
          className="flex-1 premium-button text-sm md:text-lg py-3 md:py-4 h-12 md:h-auto order-2 sm:order-1"
          disabled={!message.trim() || !password.trim()}
        >
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
          {mode === 'encode' ? 'Encode Message' : 'Decode Message'}
        </Button>
        <Button
          onClick={onClear}
          variant="outline"
          className="px-4 md:px-6 py-3 md:py-4 h-12 md:h-auto border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white hover:border-gray-500 transition-all duration-300 text-sm md:text-base order-1 sm:order-2"
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default EncodingForm;
