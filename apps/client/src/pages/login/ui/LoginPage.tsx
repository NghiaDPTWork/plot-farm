import React from 'react';
import { LoginForm } from '../../../features/auth';

export const LoginPage: React.FC = () => {
  return (
    <div className="auth-container">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
