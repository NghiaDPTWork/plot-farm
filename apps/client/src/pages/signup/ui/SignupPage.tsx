import React from 'react';
import { SignupForm } from '../../../features/auth';

export const SignupPage: React.FC = () => {
  return (
    <div className="auth-container">
      <SignupForm />
    </div>
  );
};

export default SignupPage;
