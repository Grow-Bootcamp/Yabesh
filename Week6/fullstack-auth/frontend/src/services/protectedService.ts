const API_URL = 'http://localhost:3000/api';

async function refreshAccessToken(): Promise<string> {
  const response = await fetch(`${API_URL}/auth/refresh`, {
    method: 'POST',
    credentials: 'include',
  });

  if (!response.ok) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    throw new Error('Your session has expired. Please log in again');
  }

  const data = await response.json();
  const newToken = data.token as string;

  localStorage.setItem('token', newToken);

  return newToken;
}

async function authenticatedFetch(url: string): Promise<Response> {
  let token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Please log in to continue');
  }

  let response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // if the access token expired, refresh it and retry once
  if (response.status === 401) {
    token = await refreshAccessToken();

    response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return response;
} 

export async function getProfile() {
  const response = await authenticatedFetch(`${API_URL}/protected/profile`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch profile');
  }

  return data;
}

export async function getAdminData() {
  const response = await authenticatedFetch(`${API_URL}/protected/admin`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Access denied');
  }

  return data;
}
