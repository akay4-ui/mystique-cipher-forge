
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { AdvancedEncryption } from '@/utils/advancedEncryption';
import { encodeMessage, decodeMessage } from '@/utils/encodingUtils';
import { Shield, Lock, Unlock, Copy, X, Share2 } from 'lucide-react';

const EncodingInterface = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');
  const [encodingMethod, setEncodingMethod] = useState('text');
  const [useAdvancedSecurity, setUseAdvancedSecurity] = useState(false);

  const handleProcess = async () => {
    if (!message.trim() || !password.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter both message and password",
        variant: "destructive",
      });
      return;
    }

    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to use encryption features",
        variant: "destructive",
      });
      return;
    }

    let processedResult;
    
    try {
      if (useAdvancedSecurity) {
        // Use advanced 9-layer encryption with user fingerprint
        const userFingerprint = await generateUserFingerprint(user);
        const enhancedPassword = `${password}_${userFingerprint}`;
        
        if (mode === 'encode') {
          const encrypted = await AdvancedEncryption.encrypt(message, enhancedPassword);
          processedResult = encodingMethod === 'emoji' 
            ? AdvancedEncryption.hideInEmojis(`${encrypted.encryptedData}|${encrypted.salt}|${encrypted.iv}|${encrypted.hmac}`)
            : `${encrypted.encryptedData}|${encrypted.salt}|${encrypted.iv}|${encrypted.hmac}`;
          
          saveToHistory(message, processedResult, 'encode', encodingMethod);
          
          toast({
            title: "Advanced 9-Layer Encryption Complete",
            description: "Message secured with military-grade encryption + user signature!",
          });
        } else {
          let dataToDecrypt = message;
          
          if (encodingMethod === 'emoji') {
            dataToDecrypt = AdvancedEncryption.extractFromEmojis(message);
          }
          
          const parts = dataToDecrypt.split('|');
          if (parts.length === 4) {
            processedResult = await AdvancedEncryption.decrypt(parts[0], enhancedPassword, parts[1], parts[2], parts[3]);
          } else {
            throw new Error('Invalid encrypted format - expected 4 parts separated by |');
          }
          
          saveToHistory(message, processedResult, 'decode', encodingMethod);
          
          toast({
            title: "Advanced 9-Layer Decryption Complete",
            description: "Message verified with military-grade security + user signature!",
          });
        }
      } else {
        // Use enhanced 9-layer encoding
        if (mode === 'encode') {
          processedResult = encodeMessage(message, password, encodingMethod);
          if (processedResult.includes('failed') || processedResult.includes('Missing')) {
            throw new Error(processedResult);
          }
          saveToHistory(message, processedResult, 'encode', encodingMethod);
          toast({
            title: "9-Layer Encryption Complete",
            description: `Successfully encoded using enhanced ${encodingMethod} cipher!`,
          });
        } else {
          processedResult = decodeMessage(message, password, encodingMethod);
          if (processedResult.includes('Invalid') || processedResult.includes('failed') || processedResult.includes('Missing') || processedResult.includes('verification failed')) {
            throw new Error(processedResult);
          }
          saveToHistory(message, processedResult, 'decode', encodingMethod);
          toast({
            title: "9-Layer Decryption Complete",
            description: "Your secret message has been revealed!",
          });
        }
      }
      
      setResult(processedResult);
    } catch (error) {
      console.error('Processing error:', error);
      toast({
        title: "Processing Failed",
        description: error instanceof Error ? error.message : "Invalid format, password, or corrupted data",
        variant: "destructive",
      });
    }
  };

  const generateUserFingerprint = async (user: any): Promise<string> => {
    const userString = `${user.id}_${user.email}_${navigator.userAgent}_${screen.width}_${screen.height}`;
    const encoder = new TextEncoder();
    const data = encoder.encode(userString);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').substring(0, 16);
  };

  const saveToHistory = (original: string, processed: string, operation: string, method: string) => {
    const historyItem = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      operation,
      method,
      original: original.substring(0, 100) + (original.length > 100 ? '...' : ''),
      processed: processed.substring(0, 100) + (processed.length > 100 ? '...' : ''),
      userId: user?.id
    };
    
    const existing = JSON.parse(localStorage.getItem('cipherHistory') || '[]');
    existing.unshift(historyItem);
    localStorage.setItem('cipherHistory', JSON.stringify(existing.slice(0, 50)));
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

  const shareMessage = async () => {
    if (!result) return;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Encrypted Message',
          text: result,
        });
      } catch (error) {
        copyToClipboard(result);
      }
    } else {
      copyToClipboard(result);
    }
  };

  const clearAll = () => {
    setMessage('');
    setPassword('');
    setResult('');
  };

  if (!user) {
    return (
      <div className="cipher-card text-center">
        <Shield className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">Authentication Required</h3>
        <p className="text-muted-foreground">Please sign in to access 9-layer encryption</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Mode Selection - Reduced width */}
      <div className="cipher-card max-w-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2">
            <button
              onClick={() => setMode('encode')}
              className={`px-3 py-2 rounded-lg transition-colors text-sm ${
                mode === 'encode' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <Lock className="w-4 h-4 mr-1 inline" />
              Encode
            </button>
            <button
              onClick={() => setMode('decode')}
              className={`px-3 py-2 rounded-lg transition-colors text-sm ${
                mode === 'decode' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <Unlock className="w-4 h-4 mr-1 inline" />
              Decode
            </button>
          </div>
          
          {/* Clear icon in the red space */}
          <button
            onClick={clearAll}
            className="p-2 text-muted-foreground hover:text-destructive transition-colors bg-background border border-border rounded-lg hover:shadow-sm"
            title="Clear All"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Input Form */}
      <div className="cipher-card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold">
            {mode === 'encode' ? 'Message to Encode' : 'Message to Decode'}
          </h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              {mode === 'encode' ? 'Your Secret Message' : 'Encoded Message'}
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="cipher-input w-full h-24 resize-none text-sm"
              placeholder={mode === 'encode' ? 'Enter your secret message...' : 'Paste encoded message...'}
              style={{ fontSize: encodingMethod === 'emoji' && mode === 'decode' ? '16px' : '14px' }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="cipher-input w-full text-sm"
              placeholder="Enter encryption password..."
            />
          </div>

          {/* Encoding Method */}
          <div>
            <label className="block text-sm font-medium mb-2">Output Format</label>
            <div className="flex space-x-4">
              <label className="flex items-center text-sm">
                <input
                  type="radio"
                  value="text"
                  checked={encodingMethod === 'text'}
                  onChange={(e) => setEncodingMethod(e.target.value)}
                  className="mr-2"
                />
                Text
              </label>
              <label className="flex items-center text-sm">
                <input
                  type="radio"
                  value="emoji"
                  checked={encodingMethod === 'emoji'}
                  onChange={(e) => setEncodingMethod(e.target.value)}
                  className="mr-2"
                />
                Emoji
              </label>
            </div>
          </div>

          {/* Advanced Security Toggle */}
          <div>
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                checked={useAdvancedSecurity}
                onChange={(e) => setUseAdvancedSecurity(e.target.checked)}
                className="mr-2"
              />
              Use Advanced Military-Grade Security (with user fingerprint)
            </label>
          </div>

          <button
            onClick={handleProcess}
            className="mobile-button w-full flex items-center justify-center text-sm"
          >
            {mode === 'encode' ? <Lock className="w-4 h-4 mr-2" /> : <Unlock className="w-4 h-4 mr-2" />}
            {mode === 'encode' ? 'Encrypt Message' : 'Decrypt Message'}
          </button>
        </div>
      </div>

      {/* Result */}
      {result && (
        <div className="cipher-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold">
              {mode === 'encode' ? 'Encrypted Result' : 'Decrypted Message'}
            </h3>
            <div className="flex space-x-1">
              <button
                onClick={() => copyToClipboard(result)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors bg-background border border-border rounded-lg hover:shadow-sm"
                title="Copy"
              >
                <Copy className="w-4 h-4" />
              </button>
              <button
                onClick={shareMessage}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors bg-background border border-border rounded-lg hover:shadow-sm"
                title="Share"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="bg-muted rounded-lg p-3">
            <p className="text-sm text-foreground break-all" style={{ fontSize: encodingMethod === 'emoji' ? '16px' : '13px' }}>
              {result}
            </p>
          </div>
        </div>
      )}

      {/* Security Info */}
      <div className="cipher-card bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
        <div className="flex items-start space-x-3">
          <Shield className="w-5 h-5 text-green-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-green-700 dark:text-green-300 text-sm">
              9-Layer Military-Grade Encryption Active
            </h4>
            <p className="text-xs text-green-600 dark:text-green-400">
              Enhanced security with {useAdvancedSecurity ? 'user fingerprint, AES-256-GCM, HMAC-SHA512, anti-replay protection' : 'password-based encryption, time-based salts, anti-tamper verification'}, and expanded emoji cipher with 300+ encoding patterns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EncodingInterface;
