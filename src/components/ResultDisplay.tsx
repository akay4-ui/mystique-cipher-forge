
import React from 'react';
import { Shield, Copy } from 'lucide-react';

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
    <div className="cipher-card animate-scale-in">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-cipher-accent mb-2 font-cipher">
          {mode === 'encode' ? 'Encoded Result' : 'Decoded Result'}
        </h3>
        <p className="text-gray-400">
          {result ? `Your ${encodingMethod === 'emoji' ? 'emoji ' : ''}message is ready!` : 'Result will appear here...'}
        </p>
      </div>

      {result ? (
        <div className="animate-fade-in">
          <div className="relative">
            <textarea
              value={result}
              readOnly
              className="input-field w-full h-40 resize-none bg-cipher-darker/50 text-lg leading-relaxed"
              rows={6}
              style={{ fontSize: encodingMethod === 'emoji' ? '24px' : '16px' }}
            />
            <button
              onClick={() => onCopy(result)}
              className="absolute top-4 right-4 p-3 text-gray-400 hover:text-cipher-accent transition-all duration-300 bg-cipher-darker/70 rounded-lg hover:bg-cipher-darker/90 hover:scale-110"
            >
              <Copy className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
            <p className="text-green-300 text-sm font-medium">
              ✅ Successfully {mode === 'encode' ? 'encoded' : 'decoded'} using {encodingMethod === 'emoji' ? 'emoji cipher (200+ emojis)' : 'text cipher'}! Share this with confidence.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-40 border-2 border-dashed border-gray-600 rounded-xl">
          <div className="text-center">
            <Shield className="w-12 h-12 text-gray-600 mx-auto mb-3" />
            <p className="text-gray-500">Enter your message and password to get started</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultDisplay;
