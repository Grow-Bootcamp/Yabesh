const API_URL = 'http://localhost:3000/api';

export async function getProfile() {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Please log in to continue');
  }

  const response = await fetch(`${API_URL}/protected/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (response.status === 401) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    throw new Error('Your session expired. Please log in again');
  }

  if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch profile');
  }

  return data;
}

export async function getAdminData() {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Please log in first');
  }

  const response = await fetch(`${API_URL}/protected/admin`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (response.status === 401) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    throw new Error('Your session expired. Please log in again');
  }

  if (!response.ok) {
    throw new Error(data.message || 'Access denied');
  }

  return data;
}

// It sends the JWT in the Authorization header. Your backend middleware verifies the token before returning protected data.