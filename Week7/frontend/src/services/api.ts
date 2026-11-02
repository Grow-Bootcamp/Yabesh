const API_URL = import.meta.env.VITE_API_URL;

type TokenUpdateCallback = (token: string, user: AuthUser) => void;

let onTokenRefresh: TokenUpdateCallback | null = null;

export function setTokenRefreshCallback (callback: TokenUpdateCallback) {
  onTokenRefresh = callback;
}

// user information returned by the backend
export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

// response returned by the login and refresh
export interface AuthResponse {
  message: string;
  token: string;
  user: AuthUser;
}

// generic api response
export interface ApiResponse<T> {
  message: string;
  user: T;
}

// Login
// loginRequest() sends the user's email and password to the backend.
export const loginRequest = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',   // credentials: 'include' allows the browser to send and receive cookies, including your refresh-token cookie.
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Login failed');
  }

  return data;
};

// refresh access token using HTTP-only cookie
// refreshAccessToken() gets a new access token using the refresh cookie
export const refreshAccessToken = async(): Promise<AuthResponse> => {
  const response = await fetch(`${API_URL}/auth/refresh`, {
    method: 'POST',
    credentials: 'include',
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error (data.message || 'Token refresh failed');
  }

  return data;
};

// logout and clear the refresh-token cookie
// logoutRequest() calls backend logout and clears the refresh cookie
export const logoutRequest = async(): Promise<void> => {
  const response = await fetch(`${API_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error (data.message || 'Logout failed');
  }
};


let refreshPromise: Promise<AuthResponse> | null = null;

// prevent multiple simultaneous refresh requests
async function refreshOnce(): Promise<AuthResponse> {
  if (!refreshPromise) {
    refreshPromise = refreshAccessToken().finally(() => {
      refreshPromise = null;
    });
  }

  return refreshPromise;
}

// send an authenticated request
export async function authenticatedFetch(url: string, token: string): Promise<Response> {
  const makeRequest = (accessToken: string) => {
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: 'include',
    });
  };

  let response = await makeRequest(token);

  // if access token expired, refresh it
  if (response.status === 401) {
    const refreshed = await refreshOnce();

    // save the new access token
    if (onTokenRefresh) {
      onTokenRefresh(refreshed.token, refreshed.user);
    } else{
      localStorage.setItem('token', refreshed.token);
      localStorage.setItem('user', JSON.stringify(refreshed.user));
    }

    // retry original request once
    response = await makeRequest(refreshed.token);
  }

  return response;
}

// get authenticated user's profile
export const getProfile = async (token: string): Promise<ApiResponse<AuthUser>> => {
  const response = await authenticatedFetch(`${API_URL}/protected/profile`, token);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch profile');
  }

  return data;
};

// get admin dashboard
export const getAdminDashboard = async (token: string): Promise<ApiResponse<AuthUser>> => {
  const response = await authenticatedFetch(`${API_URL}/protected/admin`, token);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch admin dashboard');
  }

  return data;
};