
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setIsSubmitting(true);

    try {
      const { error } = await resetPassword(email);
      if (error) {
        throw error;
      }
      setMessage('Check your email for a password reset link!');
    } catch (error) {
      console.error('Password reset error:', error);
      setError(error.message || 'Failed to send reset email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout 
      title="Reset Password"
      subtitle="Enter your email address and we'll send you a link to reset your password"
    >
      {error && <div className="auth-error">{error}</div>}
      {message && <div className="auth-success">{message}</div>}

      <form className="auth-form" onSubmit={handleSubmit}>
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
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>

      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <Link to="/login" style={{ color: '#E58FB8', textDecoration: 'none' }}>
          Back to Sign In
        </Link>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
