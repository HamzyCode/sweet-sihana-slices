
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import { supabase } from '../integrations/supabase/client';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we have a hash in the URL (this means the user came from the reset link)
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    
    // If there's no access_token, the user didn't come here correctly
    if (!params.get("access_token")) {
      setError("Invalid password reset link. Please request a new password reset.");
    }
  }, []);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsSubmitting(true);
    
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setIsSubmitting(false);
      return;
    }
    
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setIsSubmitting(false);
      return;
    }
    
    try {
      const { error } = await supabase.auth.updateUser({ password });
      
      if (error) {
        throw error;
      }
      
      setSuccess("Your password has been successfully reset!");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
      
    } catch (error) {
      console.error("Password reset error:", error);
      setError(error.message || "Failed to reset password. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout 
      title="Set New Password"
      subtitle="Please enter your new password below"
    >
      {error && <div className="auth-error">{error}</div>}
      {success && <div className="auth-success">{success}</div>}

      <form className="auth-form" onSubmit={handlePasswordReset}>
        <div className="form-group">
          <label htmlFor="password" className="form-label">New Password</label>
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

        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
          <input
            id="confirmPassword"
            type="password"
            className="form-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>

        <button 
          type="submit" 
          className="auth-btn"
          disabled={isSubmitting || !password || !confirmPassword}
        >
          {isSubmitting ? 'Processing...' : 'Reset Password'}
        </button>
      </form>
      
      <div className="text-center mt-4">
        <button 
          type="button" 
          className="text-cake-pink hover:underline text-sm"
          onClick={() => navigate("/login")}
        >
          Back to Sign In
        </button>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
