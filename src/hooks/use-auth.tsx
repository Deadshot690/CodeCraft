
'use client';

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { getAuth, onAuthStateChanged, User, signOut as firebaseSignOut } from 'firebase/auth';
import { clientApp } from '@/lib/firebase/client';
import { Loader2 } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const auth = getAuth(clientApp);

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({ user: null, loading: true, signOut: async () => {} });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        // If user is logged in, and they are on login/signup, redirect them
        if (pathname === '/login' || pathname === '/signup') {
          router.push('/');
        }
      } else {
        // if user is not logged in and not on an auth page, redirect
        if (pathname !== '/login' && pathname !== '/signup') {
          router.push('/login');
        }
      }
    });

    return () => unsubscribe();
  }, [user, pathname, router]);


  const signOut = async () => {
    await firebaseSignOut(auth);
    // After signing out, redirect to login
    router.push('/login');
  };

  const value = { user, loading, signOut };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
