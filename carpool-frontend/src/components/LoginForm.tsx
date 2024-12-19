// src/components/LoginForm.tsx

import React, { useState } from 'react';

const LoginForm = ({ onLogin }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      console.log('Logging in with:', { email });
      onLogin(email);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-lg shadow-lg p-6 mx-auto lg:w-1/2">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded-lg"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded-lg"
      />
      <button type="submit" className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-red-600 ">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
