
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import EncodingForm from '@/components/EncodingForm';
import ResultDisplay from '@/components/ResultDisplay';
import { encodeMessage, decodeMessage } from '@/utils/encodingUtils';
import { ThemeProvider } from '@/components/ThemeProvider';

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
        description: `Successfully encoded using ${encodingMethod} cipher!`,
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
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Main App Container - Full width mobile layout */}
        <div className="max-w-6xl mx-auto px-2 md:px-4 py-4">
          <HeroSection />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-6 items-start">
            {/* Left Column - Input - Expanded for mobile */}
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

            {/* Right Column - Result - Expanded for mobile */}
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

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
