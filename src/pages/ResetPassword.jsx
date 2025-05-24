
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';

const ResetPassword = () => {
  const { updatePassword, session } = useAuth();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // If no session, redirect to login
    if (!session) {
      navigate('/login');
    }
  }, [session, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await updatePassword(password);
      if (error) {
        throw error;
      }
      navigate('/');
    } catch (error) {
      console.error('Password update error:', error);
      setError(error.message || 'Failed to update password. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!session) {
    return null; // Will redirect via useEffect
  }

  return (
    <AuthLayout 
      title="Set New Password"
      subtitle="Enter your new password below"
    >
      {error && <div className="auth-error">{error}</div>}

      <form className="auth-form" onSubmit={handleSubmit}>
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
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Updating...' : 'Update Password'}
        </button>
      </form>
    </AuthLayout>
  );
};

export default ResetPassword;
