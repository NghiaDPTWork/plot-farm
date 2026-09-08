export interface SignupDTO {
  username: string;
  email: string;
  password: string;
  role?: string;
}

export interface SigninDTO {
  username: string;
  password: string;
}

export interface AuthResponse {
  id: number;
  username: string;
  email: string;
  role: string;
  accessToken: string;
}
