
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import { supabase } from '../integrations/supabase/client';
import './Login.css';

const Login = () => {
  const { user, loading, signInWithGoogle, signInWithEmail } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState(null);
  const [authSuccess, setAuthSuccess] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  // Get the page the user was trying to access
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const handleGoogleSignIn = async () => {
    try {
      setAuthError(null);
      await signInWithGoogle();
    } catch (error) {
      console.error("Sign in error:", error);
      setAuthError("Failed to sign in with Google. Please try again.");
    }
  };

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setAuthError(null);
    setAuthSuccess(null);
    setIsSubmitting(true);

    try {
      const { error } = await signInWithEmail(email, password);
      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setAuthError(error.message || "Authentication failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setAuthError(null);
    setAuthSuccess(null);
    setIsSubmitting(true);
    
    if (!email) {
      setAuthError("Please enter your email address.");
      setIsSubmitting(false);
      return;
    }
    
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      
      if (error) {
        throw error;
      }
      
      setResetSuccess(true);
      setAuthSuccess("Password reset instructions sent to your email.");
    } catch (error) {
      console.error("Password reset error:", error);
      setAuthError(error.message || "Failed to send reset instructions. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleForgotPassword = () => {
    setIsForgotPassword(!isForgotPassword);
    setAuthError(null);
    setAuthSuccess(null);
    setResetSuccess(false);
  };

  if (loading) {
    return (
      <AuthLayout>
        <div className="loading-spinner"></div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout 
      title={isForgotPassword ? "Reset Password" : "Welcome Back"}
      subtitle={isForgotPassword 
        ? "Enter your email to receive password reset instructions" 
        : "Sign in to your account to continue"
      }
    >
      {authError && <div className="auth-error">{authError}</div>}
      {authSuccess && <div className="auth-success">{authSuccess}</div>}

      <div className="auth-card-content">
        {isForgotPassword ? (
          <form className="auth-form" onSubmit={handleForgotPassword}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                id="email"
                type="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button 
              type="submit" 
              className="auth-btn"
              disabled={isSubmitting || !email}
            >
              {isSubmitting ? 'Processing...' : 'Send Reset Instructions'}
            </button>
            
            {resetSuccess && (
              <p className="text-sm text-center mt-4 text-green-600">
                Check your email for the reset link
              </p>
            )}
            
            <div className="text-center mt-4">
              <button 
                type="button" 
                className="text-cake-pink hover:underline text-sm"
                onClick={toggleForgotPassword}
              >
                Back to Sign In
              </button>
            </div>
          </form>
        ) : (
          <>
            <form className="auth-form" onSubmit={handleEmailAuth}>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  id="password"
                  type="password"
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>
              
              <div className="flex justify-end mb-4">
                <button 
                  type="button" 
                  className="text-cake-pink hover:underline text-sm"
                  onClick={toggleForgotPassword}
                >
                  Forgot password?
                </button>
              </div>

              <button 
                type="submit" 
                className="auth-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Sign In'}
              </button>
            </form>

            <div className="auth-divider">
              <span className="auth-divider-text">OR</span>
            </div>
            
            <button 
              className="google-signin-button" 
              onClick={handleGoogleSignIn}
              disabled={isSubmitting}
            >
              <img 
                src="https://developers.google.com/identity/images/g-logo.png" 
                alt="Google logo" 
                className="google-logo"
              />
              Sign in with Google
            </button>
          </>
        )}
      </div>
    </AuthLayout>
  );
};

export default Login;
