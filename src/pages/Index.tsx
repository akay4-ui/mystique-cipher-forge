
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import EncodingForm from '@/components/EncodingForm';
import ResultDisplay from '@/components/ResultDisplay';
import FeaturesSection from '@/components/FeaturesSection';
import { encodeMessage, decodeMessage } from '@/utils/encodingUtils';

const Index = () => {
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');
  const [encodingMethod, setEncodingMethod] = useState('text');
  const { toast } = useToast();

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
      processedResult = encodeMessage(message, password, encodingMethod);
      toast({
        title: "Message Encoded",
        description: `Your secret message has been successfully encoded using ${encodingMethod === 'emoji' ? 'emoji cipher' : 'text cipher'}!`,
      });
    } else {
      processedResult = decodeMessage(message, password, encodingMethod);
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
          <HeroSection />

          {/* Main App Container */}
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left Column - Input */}
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

              {/* Right Column - Result */}
              <ResultDisplay
                mode={mode}
                result={result}
                encodingMethod={encodingMethod}
                onCopy={copyToClipboard}
              />
            </div>

            <FeaturesSection />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
