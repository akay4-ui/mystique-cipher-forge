
import { useUser, useAuth as useClerkAuth } from '@clerk/clerk-react';

export const useAuth = () => {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerkAuth();

  return {
    user: user ? {
      id: user.id,
      email: user.emailAddresses[0]?.emailAddress || '',
      user_metadata: {
        full_name: user.fullName || '',
        username: user.username || ''
      }
    } : null,
    session: user ? { user } : null,
    loading: !isLoaded,
    signOut: () => signOut()
  };
};
