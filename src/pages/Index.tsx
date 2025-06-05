
import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AnimatedTaglines from '@/components/AnimatedTaglines';
import EncodingForm from '@/components/EncodingForm';
import ResultDisplay from '@/components/ResultDisplay';
import SecureVault from '@/components/SecureVault';
import { encodeMessage, decodeMessage } from '@/utils/encodingUtils';
import { AdvancedEncryption } from '@/utils/advancedEncryption';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, LogIn, Lock } from 'lucide-react';
import { SignInButton } from '@clerk/clerk-react';

const Index = () => {
  const { user, isLoaded } = useUser();
  const { t } = useLanguage();
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');
  const [encodingMethod, setEncodingMethod] = useState('text');
  const { toast } = useToast();

  // Add debug logging to understand authentication state
  useEffect(() => {
    console.log('Authentication state:', { isLoaded, user: !!user, userId: user?.id });
  }, [isLoaded, user]);

  const handleProcess = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to use encryption features",
        variant: "destructive",
      });
      return;
    }

    if (!message.trim() || !password.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter both message and password",
        variant: "destructive",
      });
      return;
    }

    let processedResult;
    
    try {
      // Enhanced encryption for all logged-in users
      if (mode === 'encode') {
        const encrypted = await AdvancedEncryption.encrypt(message, password);
        processedResult = encodingMethod === 'emoji' 
          ? AdvancedEncryption.hideInEmojis(encrypted.encryptedData)
          : `${encrypted.encryptedData}|${encrypted.salt}|${encrypted.iv}|${encrypted.hmac}`;
        
        toast({
          title: "Military-Grade Encryption Complete",
          description: "Message secured with advanced 9-layer encryption!",
        });

        // Save to history
        const history = JSON.parse(localStorage.getItem('cipher_history') || '[]');
        history.unshift({
          id: Date.now(),
          type: 'encode',
          method: encodingMethod,
          timestamp: new Date().toISOString(),
          messagePreview: message.substring(0, 50) + (message.length > 50 ? '...' : '')
        });
        localStorage.setItem('cipher_history', JSON.stringify(history.slice(0, 50)));
      } else {
        // Decode enhanced encryption
        if (encodingMethod === 'emoji') {
          const extractedData = AdvancedEncryption.extractFromEmojis(message);
          const parts = extractedData.split('|');
          if (parts.length === 4) {
            processedResult = await AdvancedEncryption.decrypt(parts[0], password, parts[1], parts[2], parts[3]);
          } else {
            throw new Error('Invalid encrypted format');
          }
        } else {
          const parts = message.split('|');
          if (parts.length === 4) {
            processedResult = await AdvancedEncryption.decrypt(parts[0], password, parts[1], parts[2], parts[3]);
          } else {
            throw new Error('Invalid encrypted format');
          }
        }
        
        toast({
          title: "Decryption Complete",
          description: "Message verified with military-grade security!",
        });

        // Save to history
        const history = JSON.parse(localStorage.getItem('cipher_history') || '[]');
        history.unshift({
          id: Date.now(),
          type: 'decode',
          method: encodingMethod,
          timestamp: new Date().toISOString(),
          messagePreview: 'Decoded message'
        });
        localStorage.setItem('cipher_history', JSON.stringify(history.slice(0, 50)));
      }
    } catch (error) {
      console.error('Encryption error:', error);
      toast({
        title: "Encryption Failed",
        description: "Invalid format or password",
        variant: "destructive",
      });
      return;
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

  // Show loading state while Clerk is initializing
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Shield className="w-8 h-8 text-primary mx-auto mb-4 animate-spin" />
          <p className="text-muted-foreground">Loading Cipher Forge...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {user ? (
        // Authenticated user interface
        <div className="max-w-6xl mx-auto px-2 md:px-4 py-4">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-green-500 mr-2" />
              <h1 className="text-2xl md:text-3xl font-bold text-foreground font-brand">
                Welcome back, {user.firstName || user.emailAddresses[0]?.emailAddress?.split('@')[0]}
              </h1>
            </div>
            <p className="text-muted-foreground">
              Military-grade 9-layer encryption at your fingertips
            </p>
          </div>

          {/* Main encryption interface */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-6 items-start mb-8">
            <div className="animate-fade-in">
              <EncodingForm
                mode={mode}
                setMode={setMode}
                message={message}
                setMessage={setMessage}
                password={password}
                setPassword={setPassword}
                encodingMethod={encodingMethod}
                setEncodingMethod={setEncodingMethod}
                onProcess={handleProcess}
                onClear={clearAll}
              />
            </div>

            <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
              <ResultDisplay
                mode={mode}
                result={result}
                encodingMethod={encodingMethod}
                onCopy={copyToClipboard}
              />
            </div>
          </div>

          {/* Secure Vault */}
          <SecureVault />
        </div>
      ) : (
        // Non-authenticated user interface
        <div className="max-w-6xl mx-auto px-2 md:px-4 py-4">
          <HeroSection />
          
          {/* Animated Taglines */}
          <AnimatedTaglines />

          {/* Sign-in prompt */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center">
              <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Unlock Military-Grade Security
              </h3>
              <p className="text-muted-foreground mb-6">
                Sign in to access our advanced 9-layer encryption system that's virtually unbreakable. 
                Only authenticated users can encode and decode messages.
              </p>
              <SignInButton 
                mode="modal"
                appearance={{
                  elements: {
                    modalContent: "sm:max-w-md w-full mx-auto",
                    card: "w-full max-w-sm mx-auto",
                    rootBox: "w-full",
                    formButtonPrimary: "w-full bg-primary hover:bg-primary/90 text-primary-foreground",
                    formFieldInput: "w-full",
                    socialButtonsBlockButton: "w-full",
                    dividerLine: "bg-border",
                    dividerText: "text-muted-foreground text-xs",
                    formHeaderTitle: "text-foreground text-xl",
                    formHeaderSubtitle: "text-muted-foreground",
                    socialButtonsProviderIcon: "w-4 h-4",
                    footer: "hidden",
                    formFieldLabel: "text-foreground",
                    identityPreviewText: "text-foreground",
                    identityPreviewEditButton: "text-primary"
                  },
                  layout: {
                    socialButtonsVariant: "blockButton",
                    socialButtonsPlacement: "bottom"
                  }
                }}
              >
                <button className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-medium">
                  <LogIn className="w-5 h-5 mr-2" />
                  {t('auth.sign-in')} / {t('auth.sign-up')}
                </button>
              </SignInButton>
            </div>
          </div>

          {/* Feature preview for non-authenticated users */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="cipher-card text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Military-Grade Encryption</h3>
                <p className="text-sm text-muted-foreground">9-layer security system with AES-256 encryption</p>
              </div>
              <div className="cipher-card text-center">
                <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Secure Vault</h3>
                <p className="text-sm text-muted-foreground">Store and manage your encrypted messages safely</p>
              </div>
              <div className="cipher-card text-center">
                <LogIn className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">User Authentication</h3>
                <p className="text-sm text-muted-foreground">Secure access with advanced user verification</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Index;
