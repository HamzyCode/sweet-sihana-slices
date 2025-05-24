
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';

const Login = () => {
  const { user, loading, signInWithGoogle, signInWithEmail, signUpWithEmail } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [authMode, setAuthMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState(null);
  const [authSuccess, setAuthSuccess] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      if (authMode === 'login') {
        const { error } = await signInWithEmail(email, password);
        if (error) {
          throw error;
        }
      } else {
        const { error } = await signUpWithEmail(email, password);
        if (error) {
          throw error;
        }
        setAuthSuccess("Account created successfully! Please check your email to confirm your registration.");
        setAuthMode('login');
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setAuthError(error.message || "Authentication failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const switchMode = (mode) => {
    setAuthError(null);
    setAuthSuccess(null);
    setAuthMode(mode);
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
      title={authMode === 'login' ? "Welcome Back" : "Create Account"}
      subtitle={authMode === 'login' 
        ? "Sign in to your account to continue" 
        : "Create a new account to get started"
      }
    >
      <div className="auth-tabs">
        <button 
          className={`auth-tab ${authMode === 'login' ? 'active' : ''}`}
          onClick={() => switchMode('login')}
        >
          Sign In
        </button>
        <button 
          className={`auth-tab ${authMode === 'signup' ? 'active' : ''}`}
          onClick={() => switchMode('signup')}
        >
          Sign Up
        </button>
      </div>

      {authError && <div className="auth-error">{authError}</div>}
      {authSuccess && <div className="auth-success">{authSuccess}</div>}

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

        <button 
          type="submit" 
          className="auth-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Processing...' : authMode === 'login' ? 'Sign In' : 'Sign Up'}
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
    </AuthLayout>
  );
};

export default Login;
