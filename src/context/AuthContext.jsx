
import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '../integrations/supabase/client';
import { checkIsAdmin, ensureAdminSetup } from '../integrations/supabase/helper';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Setting up auth state listener...');
    
    // Set up the auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, currentSession) => {
        console.log('Auth state changed:', event, currentSession?.user?.email);
        
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        
        if (currentSession?.user) {
          // Defer admin checks to avoid potential RLS issues
          setTimeout(async () => {
            try {
              // If this is the specific admin email, ensure admin role first
              if (currentSession.user.email === 'hamzaademi460@gmail.com') {
                console.log('Admin email detected, ensuring admin setup...');
                await ensureAdminSetup('hamzaademi460@gmail.com');
                setIsAdmin(true);
              } else {
                // Check if user is admin for other users
                const adminStatus = await checkIsAdmin(currentSession.user.id);
                setIsAdmin(adminStatus);
              }
            } catch (error) {
              console.error('Error checking admin status:', error);
              setIsAdmin(false);
            }
          }, 100);
        } else {
          setIsAdmin(false);
        }
        setLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(async ({ data: { session: currentSession } }) => {
      console.log('Initial session check:', currentSession?.user?.email);
      
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      
      if (currentSession?.user) {
        // Defer admin checks to avoid potential RLS issues
        setTimeout(async () => {
          try {
            // If this is the specific admin email, ensure admin role first
            if (currentSession.user.email === 'hamzaademi460@gmail.com') {
              console.log('Admin email detected in initial session, ensuring admin setup...');
              await ensureAdminSetup('hamzaademi460@gmail.com');
              setIsAdmin(true);
            } else {
              // Check if user is admin for other users
              const adminStatus = await checkIsAdmin(currentSession.user.id);
              setIsAdmin(adminStatus);
            }
          } catch (error) {
            console.error('Error checking admin status in initial session:', error);
            setIsAdmin(false);
          }
        }, 100);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      console.log('Attempting Google sign in...');
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        },
      });
      
      if (error) {
        console.error('Error signing in with Google:', error);
        throw error;
      }
    } catch (error) {
      console.error('Unexpected error during Google sign-in:', error);
      throw error;
    }
  };

  const signInWithEmail = async (email, password) => {
    try {
      console.log('Attempting email sign in for:', email);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) {
        console.error('Email sign in error:', error);
        throw error;
      }
      
      console.log('Email sign in successful:', data.user?.email);
      return { data, error: null };
    } catch (error) {
      console.error('Error signing in with email:', error);
      return { data: null, error };
    }
  };

  const signUpWithEmail = async (email, password) => {
    try {
      console.log('Attempting email sign up for:', email);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin,
        },
      });
      
      if (error) {
        console.error('Email sign up error:', error);
        throw error;
      }
      
      console.log('Email sign up successful:', data.user?.email);
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
      console.log('Signing out...');
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
