
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';
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
      <div className="auth-container">
        <div className="auth-card">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
            <div style={{ 
              border: '4px solid rgba(229, 143, 184, 0.3)',
              borderRadius: '50%',
              borderTop: '4px solid #E58FB8',
              width: '40px',
              height: '40px',
              animation: 'spin 1s linear infinite'
            }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">
          {authMode === 'login' ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="auth-description">
          {authMode === 'login' 
            ? "Log in to your account to continue" 
            : "Create a new account to get started"
          }
        </p>

        <div className="auth-tabs">
          <button 
            className={`auth-tab ${authMode === 'login' ? 'active' : ''}`}
            onClick={() => switchMode('login')}
          >
            Log In
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
              placeholder="Enter your email"
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
              placeholder="Enter your password"
            />
          </div>

          {authMode === 'login' && (
            <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
              <Link 
                to="/forgot-password" 
                className="forgot-password-link"
              >
                Forgot your password?
              </Link>
            </div>
          )}

          <button 
            type="submit" 
            className="auth-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : authMode === 'login' ? 'Log In' : 'Sign Up'}
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
          Log in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
