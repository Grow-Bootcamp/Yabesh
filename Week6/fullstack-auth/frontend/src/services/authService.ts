const API_URL = 'http://localhost:3000/api';

export interface LoginResponse {
  message: string;
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
  };
}

export async function login (email: string, password: string): Promise<LoginResponse> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password}),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Login Failed');
  }

  return data as LoginResponse;
} 

export async function logout(): Promise<void> {
  const response = await fetch(`${API_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Failed to log out from the server');
  }

  localStorage.removeItem('token');
  localStorage.removeItem('user');
}