// src/pages/GetStarted.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/selection');
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-8">Welcome to the Quiz App</h1>
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-400 transition"
      >
        Get Started
      </button>
    </div>
  );
};

export default GetStarted;