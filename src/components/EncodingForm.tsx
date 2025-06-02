
import React, { useState } from 'react';
import { Lock, Unlock, Eye, EyeOff, Sparkles, Eraser } from 'lucide-react';
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
      {/* Mode Toggle */}
      <div className="mode-toggle mb-6">
        <button
          onClick={() => setMode('encode')}
          className={`mode-toggle-button ${mode === 'encode' ? 'active' : ''}`}
        >
          <Lock className="w-4 h-4 mr-2" />
          <span className="font-medium">Encode</span>
        </button>
        <button
          onClick={() => setMode('decode')}
          className={`mode-toggle-button ${mode === 'decode' ? 'active' : ''}`}
        >
          <Unlock className="w-4 h-4 mr-2" />
          <span className="font-medium">Decode</span>
        </button>
      </div>

      {/* Encoding Method Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-foreground mb-3">
          Encoding Method
        </label>
        <Select value={encodingMethod} onValueChange={setEncodingMethod}>
          <SelectTrigger className="cipher-input">
            <SelectValue placeholder="Select encoding method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="text">🔤 Text Cipher (All Languages)</SelectItem>
            <SelectItem value="emoji">😀 Emoji Cipher (Fun & Visual)</SelectItem>
          </SelectContent>
        </Select>
        {encodingMethod === 'emoji' && (
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            ✨ Converts any language to emojis using 200+ emojis from all platforms
          </p>
        )}
      </div>

      {/* Message Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-foreground mb-3">
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
            className="cipher-input w-full h-32 resize-none"
            rows={6}
          />
          <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
            {message.length} chars
          </div>
        </div>
      </div>

      {/* Password Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-foreground mb-3">
          {mode === 'encode' ? 'Encryption Password' : 'Decryption Password'}
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter a strong password..."
            className="cipher-input w-full pr-12"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onProcess}
          className="mobile-button flex-1 flex items-center justify-center"
          disabled={!message.trim() || !password.trim()}
        >
          <Sparkles className="w-4 h-4 mr-2" />
          {mode === 'encode' ? 'Encode Message' : 'Decode Message'}
        </button>
        <button
          onClick={onClear}
          className="mobile-button-secondary flex items-center justify-center sm:w-auto"
        >
          <Eraser className="w-4 h-4 mr-2" />
          Clear
        </button>
      </div>
    </div>
  );
};

export default EncodingForm;
