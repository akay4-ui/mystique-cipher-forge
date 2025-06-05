
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import EncodingInterface from '@/components/EncodingInterface';
import SecureVault from '@/components/SecureVault';
import { Shield, LogIn } from 'lucide-react';

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
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
                Welcome back, {user.email?.split('@')[0]}
              </h1>
            </div>
            <p className="text-muted-foreground">
              You now have access to military-grade 7-layer encryption with user fingerprint
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Encode/Decode Messages</h2>
              <EncodingInterface />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Secure Vault</h2>
              <SecureVault />
            </div>
          </div>
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
                Sign in to access our advanced 7-layer encryption system with user fingerprint signature
              </p>
              <Link
                to="/auth"
                className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Sign In / Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Index;
