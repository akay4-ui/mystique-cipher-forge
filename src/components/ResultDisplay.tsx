
import React from 'react';
import { Shield, Copy, CheckCircle } from 'lucide-react';

interface ResultDisplayProps {
  mode: 'encode' | 'decode';
  result: string;
  encodingMethod: string;
  onCopy: (text: string) => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({
  mode,
  result,
  encodingMethod,
  onCopy
}) => {
  return (
    <div className="result-container animate-scale-in">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 font-brand">
          {mode === 'encode' ? 'Encoded Result' : 'Decoded Result'}
        </h3>
        <p className="text-muted-foreground text-sm md:text-base">
          {result ? `Your ${encodingMethod === 'emoji' ? 'emoji ' : ''}message is ready!` : 'Result will appear here...'}
        </p>
      </div>

      {result ? (
        <div className="animate-fade-in">
          <div className="relative">
            <textarea
              value={result}
              readOnly
              className="cipher-input w-full h-32 md:h-40 resize-none bg-muted/50"
              rows={6}
              style={{ fontSize: encodingMethod === 'emoji' ? '20px' : '14px' }}
            />
            <button
              onClick={() => onCopy(result)}
              className="absolute top-3 right-3 p-2 text-muted-foreground hover:text-foreground transition-colors bg-background border border-border rounded-lg hover:shadow-sm"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
          <div className="mt-4 p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
              <p className="text-green-700 dark:text-green-300 text-sm font-medium">
                Successfully {mode === 'encode' ? 'encoded' : 'decoded'} using {encodingMethod === 'emoji' ? 'emoji cipher' : 'text cipher'}!
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-32 md:h-40 border-2 border-dashed border-border rounded-xl">
          <div className="text-center">
            <Shield className="w-8 h-8 md:w-12 md:h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground text-sm">Enter your message and password to get started</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultDisplay;
