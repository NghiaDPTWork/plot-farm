import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, Mail, Lock } from 'lucide-react';
import { LoginFormState } from '../model/types';
import './Auth.css';

export const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormState>({ username: '', password: '' });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8081/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Invalid username or password');
      }

      // Store token and redirect
      const token = data.accessToken || data.token;
      if (token) {
        localStorage.setItem('token', token);
      }
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card">
      <div className="auth-header">
        <div className="auth-logo">
          <Leaf size={32} />
        </div>
        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-subtitle">Sign in to manage your smart farm</p>
      </div>

      {error && <div className="auth-message error">{error}</div>}

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <div className="input-wrapper">
            <input
              type="text"
              id="username"
              name="username"
              className="auth-input"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <Mail className="input-icon" size={18} />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <div className="input-wrapper">
            <input
              type="password"
              id="password"
              name="password"
              className="auth-input"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <Lock className="input-icon" size={18} />
          </div>
        </div>

        <div className="options-row">
          <label className="remember-me">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <a href="#" className="forgot-password">Forgot password?</a>
        </div>

        <button type="submit" className="auth-button" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <div className="auth-footer">
        Don't have an account? <Link to="/signup">Create one now</Link>
      </div>
    </div>
  );
};

export default LoginForm;
