

import  { useState } from 'react';
import SignupForm from '../components/SignUpForm';

const SignupPage = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleSignup = (data: any) => {
    setUser({
      name: data.name,
      email: data.email,
      address: data.address,
    });
    console.log('New User Created:', data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-gray-50 rounded-lg p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Sign Up</h1>

        <SignupForm onSignup={handleSignup} />

        {user.name && (
          <div className="mt-6 bg-green-100 rounded-lg p-4">
            <p><strong>Account Created for:</strong></p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Address:</strong> {user.address}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
