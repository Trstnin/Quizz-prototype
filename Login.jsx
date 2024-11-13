// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Here, you can add authentication logic, like verifying the credentials
    alert('Login Successful');
    navigate('/'); // Redirect to the start or any other page after login
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-700 text-white">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-200 text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-200 text-black"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-400"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;