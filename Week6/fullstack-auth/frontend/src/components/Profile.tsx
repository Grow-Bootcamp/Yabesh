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
  
}