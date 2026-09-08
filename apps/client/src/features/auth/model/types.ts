export interface LoginFormState {
  username: string;
  password: string;
}

export interface SignupFormState {
  username: string;
  email: string;
  password: string;
  role: 'USER' | 'FARMER';
}

export interface StatusState {
  type: 'success' | 'error' | '';
  message: string;
}
