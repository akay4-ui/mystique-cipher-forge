
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'

// Import your Clerk Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || 'pk_test_YmVsb3ZlZC1tb25rZXktOTIuY2xlcmsuYWNjb3VudHMuZGV2JA'

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Clerk Publishable Key')
}

// Add error boundary for better debugging
const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error('Application error:', error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-bold text-red-500 mb-4">Something went wrong</h1>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-primary text-primary-foreground rounded"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ClerkProvider 
        publishableKey={PUBLISHABLE_KEY} 
        afterSignOutUrl='/'
        appearance={{
          variables: {
            colorPrimary: '#2563eb',
            colorBackground: '#ffffff',
            colorText: '#0f172a',
            colorInputBackground: '#ffffff',
            colorInputText: '#0f172a',
          },
          elements: {
            formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-sm',
            card: 'bg-white border border-gray-200 shadow-lg rounded-lg',
            headerTitle: 'text-gray-900 font-semibold',
            headerSubtitle: 'text-gray-600',
            socialButtonsBlockButton: 'border border-gray-300 hover:bg-gray-50 text-gray-700',
            formFieldInput: 'border border-gray-300 bg-white text-gray-900 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
            formFieldLabel: 'text-gray-700 font-medium',
            footerActionText: 'text-gray-500',
            footerActionLink: 'text-blue-600 hover:text-blue-800 font-medium',
            identityPreviewText: 'text-gray-900',
            identityPreviewEditButton: 'text-blue-600 hover:text-blue-800',
            formFieldSuccessText: 'text-green-600',
            formFieldErrorText: 'text-red-600',
            formFieldWarningText: 'text-yellow-600',
            modalContent: 'bg-white',
            modalCloseButton: 'text-gray-400 hover:text-gray-600'
          }
        }}
      >
        <App />
      </ClerkProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
