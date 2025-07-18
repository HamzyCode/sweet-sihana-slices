
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './Login.css';

const Login = () => {
  const { user, loading, signInWithGoogle, signIn, signUp } = useAuth();
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
    if (user && !loading) {
      console.log('User authenticated, redirecting to:', from);
      navigate(from, { replace: true });
    }
  }, [user, loading, navigate, from]);

  const handleGoogleSignIn = async () => {
    try {
      setAuthError(null);
      setIsSubmitting(true);
      console.log('Starting Google sign in...');
      const { error } = await signInWithGoogle();
      if (error) throw error;
    } catch (error) {
      console.error("Google sign in error:", error);
      if (error.message?.includes('invalid') || error.message?.includes('path')) {
        setAuthError("Google sign-in configuration issue. Please contact support or try email login.");
      } else {
        setAuthError("Failed to sign in with Google. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setAuthError(null);
    setAuthSuccess(null);
    setIsSubmitting(true);

    try {
      console.log(`Starting ${authMode} for:`, email);
      
      if (authMode === 'login') {
        const { error } = await signIn(email, password);
        if (error) {
          throw error;
        }
        console.log('Email login successful');
      } else {
        const { error } = await signUp(email, password);
        if (error) {
          throw error;
        }
        console.log('Email signup successful');
        setAuthSuccess("Account created successfully! Please check your email to confirm your registration.");
        setAuthMode('login');
      }
    } catch (error) {
      console.error("Authentication error:", error);
      let errorMessage = "Authentication failed. Please try again.";
      
      if (error.message?.includes('Invalid login credentials')) {
        errorMessage = "Invalid email or password. Please check your credentials.";
      } else if (error.message?.includes('User already registered')) {
        errorMessage = "This email is already registered. Try logging in instead.";
      } else if (error.message?.includes('Password should be at least')) {
        errorMessage = "Password should be at least 6 characters long.";
      }
      
      setAuthError(errorMessage);
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
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="auth-container">
            <div className="auth-card">
              <div className="loading-spinner-container">
                <div className="loading-spinner"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-8">
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
      </main>
      <Footer />
    </div>
  );
};

export default Login;
