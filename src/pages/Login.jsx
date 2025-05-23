
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import './Login.css';

const Login = () => {
  const { user, loading, signInWithGoogle, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    if (user && isAdmin) {
      navigate('/admin');
    } else if (user && !isAdmin) {
      navigate('/');
    }
  }, [user, isAdmin, navigate]);

  const handleGoogleSignIn = async () => {
    try {
      setAuthError(null);
      await signInWithGoogle();
    } catch (error) {
      console.error("Sign in error:", error);
      setAuthError("Failed to sign in. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="loading-spinner"></div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="login-container">
          <div className="login-card">
            <h2 className="login-title">Sign In to Sihana's Cake</h2>
            <p className="login-description">
              Please sign in to access your account and manage the website content.
            </p>
            
            {authError && <div className="auth-error">{authError}</div>}
            
            <button 
              className="google-signin-button" 
              onClick={handleGoogleSignIn}
              disabled={loading}
            >
              <img 
                src="https://developers.google.com/identity/images/g-logo.png" 
                alt="Google logo" 
                className="google-logo"
              />
              Sign in with Google
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
