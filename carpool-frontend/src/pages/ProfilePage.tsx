// src/pages/ProfilePage.tsx

import  { useState } from 'react';
import ProfileForm from '../components/ProfileForm';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Main Street, Gotham',
    phone: '123-456-7890',
  });

  const handleSave = (data: any) => {
    setProfile(data);
    console.log('Profile updated:', data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6">User Profile</h1>

        <div className="mb-6">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Address:</strong> {profile.address}</p>
          <p><strong>Phone:</strong> {profile.phone}</p>
        </div>

        <ProfileForm onSave={handleSave} />
      </div>
    </div>
  );
};

export default ProfilePage;
