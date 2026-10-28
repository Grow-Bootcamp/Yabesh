import { useEffect, useState } from 'react';
import { getProfile } from '../services/protectedService';

interface ProfileData  {
  id?: string;
  userId?: string;
  name?: string;
  email: string;
  role: 'user' | 'admin';
}

function Profile() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      try {
        const data = await getProfile();
        setProfile(data.user ?? data);
      } catch (err) {
        setError (
          err instanceof Error ? err.message : 'Unable to load profile'
        );
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>{error}</p>;
  if (!profile) return <p>No profile data found</p>;

  return (
    <section>
      <h2>Your Profile</h2>
      <p>Email: {profile.email}</p>
      <p>Role: {profile.role}</p>
      <p>User ID: {profile.id ?? profile.userId ?? 'Not provided'}</p>
    </section>
  );
}

export default Profile;

//This uses useEffect to fetch protected data when the component mounts.