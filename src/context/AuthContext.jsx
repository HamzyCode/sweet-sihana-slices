
import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '../integrations/supabase/client';
import { checkIsAdmin, setAdminForEmail } from '../integrations/supabase/helper';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up the auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        
        if (currentSession?.user) {
          // Check if user is admin
          const adminStatus = await checkIsAdmin(currentSession.user.id);
          setIsAdmin(adminStatus);
          
          // If this is the specific admin email, ensure admin role
          if (currentSession.user.email === 'hamzaademi460@gmail.com') {
            await setAdminForEmail('hamzaademi460@gmail.com');
            setIsAdmin(true);
          }
        } else {
          setIsAdmin(false);
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(async ({ data: { session: currentSession } }) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      
      if (currentSession?.user) {
        const adminStatus = await checkIsAdmin(currentSession.user.id);
        setIsAdmin(adminStatus);
        
        // If this is the specific admin email, ensure admin role
        if (currentSession.user.email === 'hamzaademi460@gmail.com') {
          await setAdminForEmail('hamzaademi460@gmail.com');
          setIsAdmin(true);
        }
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        },
      });
      
      if (error) {
        console.error('Error signing in with Google:', error);
      }
    } catch (error) {
      console.error('Unexpected error during Google sign-in:', error);
    }
  };

  const signInWithEmail = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) {
        throw error;
      }
      
      return { data, error: null };
    } catch (error) {
      console.error('Error signing in with email:', error);
      return { data: null, error };
    }
  };

  const signUpWithEmail = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      
      if (error) {
        throw error;
      }
      
      return { data, error: null };
    } catch (error) {
      console.error('Error signing up with email:', error);
      return { data: null, error };
    }
  };

  const resetPassword = async (email) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      
      if (error) {
        throw error;
      }
      
      return { error: null };
    } catch (error) {
      console.error('Error resetting password:', error);
      return { error };
    }
  };

  const updatePassword = async (newPassword) => {
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });
      
      if (error) {
        throw error;
      }
      
      return { error: null };
    } catch (error) {
      console.error('Error updating password:', error);
      return { error };
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Error signing out:', error);
      }
    } catch (error) {
      console.error('Unexpected error during sign-out:', error);
    }
  };

  const value = {
    user,
    session,
    isAdmin,
    loading,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    resetPassword,
    updatePassword,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
