import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import EncodingForm from '@/components/EncodingForm';
import ResultDisplay from '@/components/ResultDisplay';
import SecureVault from '@/components/SecureVault';
import { encodeMessage, decodeMessage } from '@/utils/encodingUtils';
import { AdvancedEncryption } from '@/utils/advancedEncryption';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, LogIn } from 'lucide-react';
import { SignInButton } from '@clerk/clerk-react';

const Index = () => {
  const { user, isLoaded } = useUser();
  const { t } = useLanguage();
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');
  const [encodingMethod, setEncodingMethod] = useState('text');
  const [useAdvancedSecurity, setUseAdvancedSecurity] = useState(false);
  const { toast } = useToast();

  const handleProcess = async () => {
    if (!message.trim() || !password.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter both message and password",
        variant: "destructive",
      });
      return;
    }

    let processedResult;
    
    if (useAdvancedSecurity && user) {
      // Use 7-layer advanced encryption for logged-in users
      try {
        if (mode === 'encode') {
          const encrypted = await AdvancedEncryption.encrypt(message, password);
          processedResult = encodingMethod === 'emoji' 
            ? AdvancedEncryption.hideInEmojis(encrypted.encryptedData)
            : `${encrypted.encryptedData}|${encrypted.salt}|${encrypted.iv}|${encrypted.hmac}`;
          
          toast({
            title: "Advanced Encryption Complete",
            description: "Message secured with military-grade 7-layer encryption!",
          });
        } else {
          // Decode advanced encryption
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
            title: "Advanced Decryption Complete",
            description: "Message verified with 7-layer security!",
          });
        }
      } catch (error) {
        toast({
          title: "Advanced Encryption Failed",
          description: "Invalid format or password for advanced encryption",
          variant: "destructive",
        });
        return;
      }
    } else {
      // Use basic encoding for non-logged users or when advanced is disabled
      if (mode === 'encode') {
        processedResult = encodeMessage(message, password, encodingMethod);
        toast({
          title: "Message Encoded",
          description: `Successfully encoded using ${encodingMethod} cipher!`,
        });
      } else {
        processedResult = decodeMessage(message, password, encodingMethod);
        toast({
          title: "Message Decoded",
          description: "Your secret message has been revealed!",
        });
      }
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

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Shield className="w-8 h-8 text-primary mx-auto mb-4 animate-spin" />
          <p className="text-muted-foreground">Loading...</p>
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
                Welcome back, {user.emailAddresses[0]?.emailAddress}
              </h1>
            </div>
            <p className="text-muted-foreground">
              You now have access to military-grade 7-layer encryption
            </p>
          </div>

          {/* Security Level Toggle */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="cipher-card">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">Security Level</h3>
                  <p className="text-sm text-muted-foreground">
                    {useAdvancedSecurity 
                      ? '7-Layer Military-Grade Encryption (Recommended)' 
                      : 'Basic Encoding (Compatible with non-users)'
                    }
                  </p>
                </div>
                <button
                  onClick={() => setUseAdvancedSecurity(!useAdvancedSecurity)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    useAdvancedSecurity ? 'bg-green-500' : 'bg-muted'
                  } relative`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                    useAdvancedSecurity ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>
            </div>
          </div>

          {/* Secure Vault */}
          <SecureVault />
        </div>
      ) : (
        // Non-authenticated user interface
        <div className="max-w-6xl mx-auto px-2 md:px-4 py-4">
          <HeroSection />

          {/* Sign-in prompt */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground mb-2">
                Unlock Military-Grade Security
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sign in to access our advanced 7-layer encryption system that's virtually unbreakable
              </p>
              <SignInButton mode="modal">
                <button className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  <LogIn className="w-4 h-4 mr-2" />
                  {t('auth.sign-in')} / {t('auth.sign-up')}
                </button>
              </SignInButton>
            </div>
          </div>

          {/* Basic encoding interface */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-6 items-start">
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
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Index;
