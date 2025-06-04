
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { AdvancedEncryption } from '@/utils/advancedEncryption';
import { Shield, Lock, Unlock, Save, Trash2, Eye, EyeOff } from 'lucide-react';

interface SecureMessage {
  id: string;
  title: string;
  encrypted_content: string;
  salt: string;
  iv: string;
  hmac: string;
  key_version: number;
  created_at: string;
}

const SecureVault = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [messages, setMessages] = useState<SecureMessage[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [decryptedMessages, setDecryptedMessages] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      fetchMessages();
    }
  }, [user]);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('secure_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast({
        title: "Error",
        description: "Failed to fetch messages",
        variant: "destructive",
      });
    }
  };

  const saveMessage = async () => {
    if (!title.trim() || !content.trim() || !password.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields including the encryption password",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      // Use advanced 7-layer encryption
      const encrypted = await AdvancedEncryption.encrypt(content, password);

      const { error } = await supabase
        .from('secure_messages')
        .insert({
          user_id: user?.id,
          title,
          encrypted_content: encrypted.encryptedData,
          salt: encrypted.salt,
          iv: encrypted.iv,
          hmac: encrypted.hmac,
          encryption_method: 'aes-256-gcm-7layer'
        });

      if (error) throw error;

      toast({
        title: "Message Secured!",
        description: "Your message has been encrypted with 7-layer security and saved",
      });

      setTitle('');
      setContent('');
      setPassword('');
      fetchMessages();
    } catch (error) {
      console.error('Error saving message:', error);
      toast({
        title: "Encryption Failed",
        description: "Failed to encrypt and save message",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const decryptMessage = async (message: SecureMessage, decryptPassword: string) => {
    try {
      const decrypted = await AdvancedEncryption.decrypt(
        message.encrypted_content,
        decryptPassword,
        message.salt,
        message.iv,
        message.hmac
      );

      setDecryptedMessages(prev => ({ ...prev, [message.id]: decrypted }));
      
      toast({
        title: "Message Decrypted",
        description: "Successfully decrypted with 7-layer verification",
      });
    } catch (error) {
      console.error('Decryption error:', error);
      toast({
        title: "Decryption Failed",
        description: "Invalid password or corrupted data",
        variant: "destructive",
      });
    }
  };

  const deleteMessage = async (id: string) => {
    try {
      const { error } = await supabase
        .from('secure_messages')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Message Deleted",
        description: "Secure message has been permanently removed",
      });

      fetchMessages();
      setDecryptedMessages(prev => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
    } catch (error) {
      console.error('Error deleting message:', error);
      toast({
        title: "Delete Failed",
        description: "Failed to delete message",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-2 md:px-4 py-4">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <Shield className="w-8 h-8 text-primary mr-2" />
          <h1 className="text-2xl md:text-3xl font-bold text-foreground font-brand">
            Secure Vault
          </h1>
        </div>
        <p className="text-muted-foreground">
          Military-grade 7-layer encryption for your most sensitive messages
        </p>
      </div>

      {/* Create New Message */}
      <div className="cipher-card mb-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Lock className="w-5 h-5 mr-2" />
          Create Secure Message
        </h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="cipher-input w-full"
              placeholder="Message title..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="cipher-input w-full h-32 resize-none"
              placeholder="Your secret message..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Encryption Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="cipher-input w-full pr-12"
                placeholder="Strong encryption password..."
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            onClick={saveMessage}
            disabled={loading}
            className="mobile-button flex items-center justify-center"
          >
            <Save className="w-4 h-4 mr-2" />
            {loading ? 'Encrypting...' : 'Encrypt & Save'}
          </button>
        </div>
      </div>

      {/* Saved Messages */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center">
          <Shield className="w-5 h-5 mr-2" />
          Secure Messages ({messages.length})
        </h2>
        
        {messages.map((message) => (
          <MessageCard
            key={message.id}
            message={message}
            decryptedContent={decryptedMessages[message.id]}
            onDecrypt={decryptMessage}
            onDelete={deleteMessage}
          />
        ))}

        {messages.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <Shield className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No secure messages yet. Create your first encrypted message above.</p>
          </div>
        )}
      </div>
    </div>
  );
};

interface MessageCardProps {
  message: SecureMessage;
  decryptedContent?: string;
  onDecrypt: (message: SecureMessage, password: string) => void;
  onDelete: (id: string) => void;
}

const MessageCard: React.FC<MessageCardProps> = ({ 
  message, 
  decryptedContent, 
  onDecrypt, 
  onDelete 
}) => {
  const [decryptPassword, setDecryptPassword] = useState('');
  const [showDecryptPassword, setShowDecryptPassword] = useState(false);

  return (
    <div className="cipher-card">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-foreground">{message.title}</h3>
          <p className="text-xs text-muted-foreground">
            Created: {new Date(message.created_at).toLocaleString()}
          </p>
          <p className="text-xs text-muted-foreground">
            Security: 7-Layer AES-256-GCM with HMAC
          </p>
        </div>
        <button
          onClick={() => onDelete(message.id)}
          className="text-destructive hover:text-destructive/80 p-1"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {!decryptedContent ? (
        <div className="space-y-3">
          <div className="relative">
            <input
              type={showDecryptPassword ? 'text' : 'password'}
              value={decryptPassword}
              onChange={(e) => setDecryptPassword(e.target.value)}
              className="cipher-input w-full pr-12"
              placeholder="Enter decryption password..."
            />
            <button
              onClick={() => setShowDecryptPassword(!showDecryptPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showDecryptPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <button
            onClick={() => onDecrypt(message, decryptPassword)}
            disabled={!decryptPassword.trim()}
            className="mobile-button-secondary flex items-center justify-center"
          >
            <Unlock className="w-4 h-4 mr-2" />
            Decrypt Message
          </button>
        </div>
      ) : (
        <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-4">
          <p className="text-green-700 dark:text-green-300 text-sm font-medium mb-2">
            ✅ Successfully decrypted with 7-layer verification
          </p>
          <div className="bg-background border border-border rounded-lg p-3">
            <p className="text-foreground whitespace-pre-wrap">{decryptedContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecureVault;
