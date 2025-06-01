import React, { useState, useEffect } from 'react';
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
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleVisibility = () => {
      setIsVisible(true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(handleVisibility, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="min-h-screen bg-dark-gradient overflow-x-hidden">
      {/* Parallax Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-cipher-primary/10 via-transparent to-cipher-secondary/10 transition-transform duration-1000"
          style={{
            transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})`
          }}
        />
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-cipher-accent/5 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translateY(${scrollY * 0.5}px) rotate(${scrollY * 0.1}deg)`
          }}
        />
        <div 
          className="absolute top-40 right-10 w-24 h-24 bg-cipher-primary/5 rounded-full blur-2xl animate-pulse"
          style={{
            transform: `translateY(${scrollY * -0.3}px) rotate(${scrollY * -0.1}deg)`
          }}
        />
      </div>

      {/* Hero Section with Parallax */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-cipher-primary/20 via-transparent to-cipher-secondary/20 transition-transform duration-1000"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        />
        <div className={`relative max-w-7xl mx-auto px-4 py-8 md:py-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div 
            style={{
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          >
            <HeroSection />
          </div>

          {/* Main App Container with Scroll Animations */}
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left Column - Input with slide-in effect */}
              <div 
                className={`transition-all duration-1000 delay-200 ${
                  scrollY > 50 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{
                  transform: `translateY(${scrollY * 0.05}px)`
                }}
              >
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

              {/* Right Column - Result with slide-in effect */}
              <div 
                className={`transition-all duration-1000 delay-400 ${
                  scrollY > 50 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{
                  transform: `translateY(${scrollY * -0.05}px)`
                }}
              >
                <ResultDisplay
                  mode={mode}
                  result={result}
                  encodingMethod={encodingMethod}
                  onCopy={copyToClipboard}
                />
              </div>
            </div>

            {/* Features Section with Staggered Animation */}
            <div 
              className={`transition-all duration-1000 delay-600 ${
                scrollY > 200 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{
                transform: `translateY(${scrollY * 0.02}px)`
              }}
            >
              <FeaturesSection />
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Mobile Scroll Indicator */}
      <div className="fixed bottom-6 right-6 lg:hidden z-50">
        <div 
          className="w-12 h-12 rounded-full bg-cipher-primary/20 backdrop-blur-lg border border-cipher-primary/30 flex items-center justify-center transition-all duration-300"
          style={{
            transform: `scale(${1 + Math.sin(scrollY * 0.01) * 0.1}) rotate(${scrollY * 0.5}deg)`,
            opacity: scrollY > 100 ? 0.8 : 0.4
          }}
        >
          <div className="w-2 h-2 bg-cipher-accent rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Index;
