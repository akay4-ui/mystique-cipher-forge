
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Shield, User } from 'lucide-react';

const UserProfile = () => {
  const { user } = useAuth();

  if (!user) return null;

  // Extract username from email (part before @)
  const username = user.email?.split('@')[0] || 'User';

  return (
    <div className="flex items-center space-x-2 px-3 py-1.5 bg-primary/10 rounded-lg">
      <Shield className="w-4 h-4 text-primary" />
      <span className="text-sm text-foreground font-medium">
        {username}
      </span>
    </div>
  );
};

export default UserProfile;
