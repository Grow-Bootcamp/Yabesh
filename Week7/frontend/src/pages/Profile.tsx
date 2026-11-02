import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getProfile } from "../services/api";

interface ProfileData {
  name: string;
  email: string;
  role: 'user' | 'admin';
}

function Profile() {
  const { token } = useAuth();

  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) return;

    const fetchProfile = async () => {
      try {
        setError('');

        const data = await getProfile(token);

        console.log('Profile API response: ', data);

        setProfile(data.user);
      } catch (error) {
        setError (
          error instanceof Error ? error.message : 'Failed to load profile',
        );
      }
    };

    fetchProfile();
  }, [token]);

  return (
    <div>
      <h1>My Profile</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {profile ? (
          <>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
            <p>Role: {profile.role}</p>
          </>
        ) : (
          !error && <p>Loading profile...</p>
        )
      }
    </div>
  );
}

export default Profile;