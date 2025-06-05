
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { History, Download, Trash2, Copy, Search } from 'lucide-react';

interface HistoryItem {
  id: string;
  timestamp: string;
  operation: 'encode' | 'decode';
  method: string;
  original: string;
  processed: string;
  userId: string;
}

const HistoryManager = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadHistory();
  }, [user]);

  const loadHistory = () => {
    if (!user) return;
    
    const stored = localStorage.getItem('cipherHistory');
    if (stored) {
      const allHistory = JSON.parse(stored);
      const userHistory = allHistory.filter((item: HistoryItem) => item.userId === user.id);
      setHistory(userHistory);
    }
  };

  const filteredHistory = history.filter(item =>
    item.original.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.processed.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.operation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportHistory = () => {
    if (history.length === 0) {
      toast({
        title: "No Data",
        description: "No history to export",
        variant: "destructive",
      });
      return;
    }

    const dataStr = JSON.stringify(history, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const element = document.createElement('a');
    element.href = url;
    element.download = `cipher-history-${Date.now()}.json`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    URL.revokeObjectURL(url);
    
    toast({
      title: "Export Complete",
      description: "History exported successfully",
    });
  };

  const clearHistory = () => {
    const allHistory = JSON.parse(localStorage.getItem('cipherHistory') || '[]');
    const otherUsersHistory = allHistory.filter((item: HistoryItem) => item.userId !== user?.id);
    localStorage.setItem('cipherHistory', JSON.stringify(otherUsersHistory));
    setHistory([]);
    
    toast({
      title: "History Cleared",
      description: "Your encryption history has been cleared",
    });
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

  if (!user) {
    return (
      <div className="cipher-card text-center">
        <History className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">Authentication Required</h3>
        <p className="text-muted-foreground">Please sign in to view history</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="cipher-card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold flex items-center">
            <History className="w-5 h-5 mr-2" />
            Encryption History ({history.length})
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={exportHistory}
              className="mobile-button-secondary flex items-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
            <button
              onClick={clearHistory}
              className="mobile-button-secondary flex items-center text-destructive"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search history..."
            className="cipher-input w-full pl-10"
          />
        </div>
      </div>

      {/* History Items */}
      <div className="space-y-3">
        {filteredHistory.map((item) => (
          <div key={item.id} className="cipher-card">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    item.operation === 'encode' 
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                      : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                  }`}>
                    {item.operation.toUpperCase()}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {item.method}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {new Date(item.timestamp).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <label className="text-xs font-medium text-muted-foreground">
                  {item.operation === 'encode' ? 'Original' : 'Encrypted'}:
                </label>
                <div className="flex items-center space-x-2">
                  <p className="text-sm bg-muted rounded p-2 flex-1 font-mono">
                    {item.original}
                  </p>
                  <button
                    onClick={() => copyToClipboard(item.original)}
                    className="p-1 hover:bg-muted rounded"
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground">
                  {item.operation === 'encode' ? 'Encrypted' : 'Decrypted'}:
                </label>
                <div className="flex items-center space-x-2">
                  <p className="text-sm bg-muted rounded p-2 flex-1 font-mono">
                    {item.processed}
                  </p>
                  <button
                    onClick={() => copyToClipboard(item.processed)}
                    className="p-1 hover:bg-muted rounded"
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredHistory.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <History className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>
              {searchTerm 
                ? 'No history items match your search' 
                : 'No encryption history yet. Start encrypting messages to see them here.'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryManager;
