
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
      {/* Enhanced Mode Toggle with rounded corners filling gaps */}
      <div className="bg-muted/50 rounded-2xl p-1 flex mb-6 border border-border/50">
        <button
          onClick={() => setMode('encode')}
          className={`flex-1 flex items-center justify-center py-3 px-4 rounded-xl transition-all duration-300 font-medium relative overflow-hidden ${
            mode === 'encode'
              ? 'bg-primary text-primary-foreground shadow-lg scale-[0.98] transform'
              : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
          }`}
        >
          <Lock className="w-4 h-4 mr-2" />
          <span className="font-medium">Encode</span>
          {mode === 'encode' && (
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl" />
          )}
        </button>
        <button
          onClick={() => setMode('decode')}
          className={`flex-1 flex items-center justify-center py-3 px-4 rounded-xl transition-all duration-300 font-medium relative overflow-hidden ${
            mode === 'decode'
              ? 'bg-primary text-primary-foreground shadow-lg scale-[0.98] transform'
              : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
          }`}
        >
          <Unlock className="w-4 h-4 mr-2" />
          <span className="font-medium">Decode</span>
          {mode === 'decode' && (
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl" />
          )}
        </button>
      </div>

      {/* Compact Encoding Method Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-foreground mb-2">
          Method
        </label>
        <Select value={encodingMethod} onValueChange={setEncodingMethod}>
          <SelectTrigger className="cipher-input">
            <SelectValue placeholder="Select method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="text">🔤 Text Cipher</SelectItem>
            <SelectItem value="emoji">😀 Emoji Cipher</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Compact Message Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-foreground mb-2">
          {mode === 'encode' ? 'Message' : 'Encoded Text'}
        </label>
        <div className="relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={mode === 'encode' 
              ? 'Enter your secret message...' 
              : 'Paste encoded message...'
            }
            className="cipher-input w-full h-24 resize-none text-sm"
            rows={4}
          />
          <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
            {message.length}
          </div>
        </div>
      </div>

      {/* Compact Password Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-foreground mb-2">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password..."
            className="cipher-input w-full pr-12 text-sm"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Compact Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={onProcess}
          className="mobile-button flex-1 flex items-center justify-center text-sm"
          disabled={!message.trim() || !password.trim()}
        >
          <Sparkles className="w-4 h-4 mr-2" />
          {mode === 'encode' ? 'Encode' : 'Decode'}
        </button>
        <button
          onClick={onClear}
          className="mobile-button-secondary px-4 flex items-center justify-center text-sm"
        >
          <Eraser className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default EncodingForm;
