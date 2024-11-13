// src/pages/Results.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, coins, diamonds } = location.state;

  const handleRestart = () => {
    navigate('/'); // Navigate to the Get Started page
  };

  const handleSave = () => {
    navigate('/login'); // Navigate to the Login page
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-700 text-white">
      <h1 className="text-3xl font-bold mb-6">Quiz Results</h1>
      <p className="text-xl mb-4">Score: {score}</p>
      <p className="text-xl mb-4">Coins: {coins}</p>
      <p className="text-xl mb-4">Diamonds: {diamonds}</p>

      <div className="flex space-x-4 mt-8">
        <button
          onClick={handleRestart}
          className="bg-green-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-green-400"
        >
          Restart
        </button>
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-400"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Results