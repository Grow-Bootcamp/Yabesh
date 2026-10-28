const API_URL = 'http://localhost:3000/api';

export async function getProfile() {
  const token = localStorage.getItem('token');

  const response = await fetch(`${API_URL}/protected/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch profile');
  }

  return data;
}

// It sends the JWT in the Authorization header. Your backend middleware verifies the token before returning protected data.