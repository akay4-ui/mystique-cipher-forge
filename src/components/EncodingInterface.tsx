
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { AdvancedEncryption } from '@/utils/advancedEncryption';
import { encodeMessage, decodeMessage } from '@/utils/encodingUtils';
import { Shield, Lock, Unlock, Copy, X } from 'lucide-react';

const EncodingInterface = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');
  const [encodingMethod, setEncodingMethod] = useState('text');
  const [useAdvancedSecurity, setUseAdvancedSecurity] = useState(true);

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
        // Use advanced 7-layer encryption with user fingerprint
        const userFingerprint = await generateUserFingerprint(user);
        const enhancedPassword = `${password}_${userFingerprint}`;
        
        if (mode === 'encode') {
          const encrypted = await AdvancedEncryption.encrypt(message, enhancedPassword);
          processedResult = encodingMethod === 'emoji' 
            ? AdvancedEncryption.hideInEmojis(encrypted.encryptedData)
            : `${encrypted.encryptedData}|${encrypted.salt}|${encrypted.iv}|${encrypted.hmac}`;
          
          // Save to history
          saveToHistory(message, processedResult, 'encode', encodingMethod);
          
          toast({
            title: "Advanced Encryption Complete",
            description: "Message secured with 7-layer encryption + user signature!",
          });
        } else {
          // Decode advanced encryption
          if (encodingMethod === 'emoji') {
            const extractedData = AdvancedEncryption.extractFromEmojis(message);
            const parts = extractedData.split('|');
            if (parts.length === 4) {
              processedResult = await AdvancedEncryption.decrypt(parts[0], enhancedPassword, parts[1], parts[2], parts[3]);
            } else {
              throw new Error('Invalid encrypted format');
            }
          } else {
            const parts = message.split('|');
            if (parts.length === 4) {
              processedResult = await AdvancedEncryption.decrypt(parts[0], enhancedPassword, parts[1], parts[2], parts[3]);
            } else {
              throw new Error('Invalid encrypted format');
            }
          }
          
          saveToHistory(message, processedResult, 'decode', encodingMethod);
          
          toast({
            title: "Advanced Decryption Complete",
            description: "Message verified with 7-layer security + user signature!",
          });
        }
      } else {
        // Use basic encoding - fix emoji handling
        if (mode === 'encode') {
          processedResult = encodeMessage(message, password, encodingMethod);
          saveToHistory(message, processedResult, 'encode', encodingMethod);
          toast({
            title: "Message Encoded",
            description: `Successfully encoded using ${encodingMethod} cipher!`,
          });
        } else {
          processedResult = decodeMessage(message, password, encodingMethod);
          saveToHistory(message, processedResult, 'decode', encodingMethod);
          toast({
            title: "Message Decoded",
            description: "Your secret message has been revealed!",
          });
        }
      }
      
      setResult(processedResult);
    } catch (error) {
      console.error('Processing error:', error);
      toast({
        title: "Processing Failed",
        description: "Invalid format, password, or corrupted data",
        variant: "destructive",
      });
    }
  };

  const generateUserFingerprint = async (user: any): Promise<string> => {
    // Generate a unique fingerprint based on user data
    const userString = `${user.id}_${user.email}_${navigator.userAgent}`;
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
    localStorage.setItem('cipherHistory', JSON.stringify(existing.slice(0, 50))); // Keep last 50
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

  if (!user) {
    return (
      <div className="cipher-card text-center">
        <Shield className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">Authentication Required</h3>
        <p className="text-muted-foreground">Please sign in to access encryption features</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Mode Selection */}
      <div className="cipher-card">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <button
            onClick={() => setMode('encode')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              mode === 'encode' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            <Lock className="w-4 h-4 mr-2 inline" />
            Encode
          </button>
          <button
            onClick={() => setMode('decode')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              mode === 'decode' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            <Unlock className="w-4 h-4 mr-2 inline" />
            Decode
          </button>
        </div>
      </div>

      {/* Input Form */}
      <div className="cipher-card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">
            {mode === 'encode' ? 'Message to Encode' : 'Message to Decode'}
          </h3>
          {/* Quick Action Icons */}
          <div className="flex space-x-2">
            {result && (
              <button
                onClick={() => copyToClipboard(result)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors bg-background border border-border rounded-lg hover:shadow-sm"
                title="Copy Result"
              >
                <Copy className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={clearAll}
              className="p-2 text-muted-foreground hover:text-destructive transition-colors bg-background border border-border rounded-lg hover:shadow-sm"
              title="Clear All"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              {mode === 'encode' ? 'Your Secret Message' : 'Encoded Message'}
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="cipher-input w-full h-32 resize-none"
              placeholder={mode === 'encode' ? 'Enter your secret message...' : 'Paste encoded message...'}
              style={{ fontSize: encodingMethod === 'emoji' && mode === 'decode' ? '18px' : '14px' }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="cipher-input w-full"
              placeholder="Enter encryption password..."
            />
          </div>

          {/* Encoding Method */}
          <div>
            <label className="block text-sm font-medium mb-2">Output Format</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="text"
                  checked={encodingMethod === 'text'}
                  onChange={(e) => setEncodingMethod(e.target.value)}
                  className="mr-2"
                />
                Text
              </label>
              <label className="flex items-center">
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

          <button
            onClick={handleProcess}
            className="mobile-button w-full flex items-center justify-center"
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
            <h3 className="text-lg font-semibold">
              {mode === 'encode' ? 'Encrypted Result' : 'Decrypted Message'}
            </h3>
            <button
              onClick={() => copyToClipboard(result)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors bg-background border border-border rounded-lg hover:shadow-sm"
              title="Copy Result"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
          
          <div className="bg-muted rounded-lg p-4">
            <p className="text-sm text-foreground break-all" style={{ fontSize: encodingMethod === 'emoji' ? '18px' : '14px' }}>
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
            <h4 className="font-medium text-green-700 dark:text-green-300">
              Enhanced Security Active
            </h4>
            <p className="text-sm text-green-600 dark:text-green-400">
              Your messages are protected with {useAdvancedSecurity ? '7-layer encryption + user fingerprint signature' : 'basic password encoding'}. 
              Only you can decrypt messages encrypted with your account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EncodingInterface;
