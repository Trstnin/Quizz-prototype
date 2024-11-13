import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Selection = () => {
  const [difficulty, setDifficulty] = useState('easy');
  const [topic, setTopic] = useState('general');
  const [time, setTime] = useState(10);
  const navigate = useNavigate()

  const handleStartQuiz= () => {
    navigate('/questions')
  }
  



  return (


    <div className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-8">Select Your Preferences</h1>

      <div className="mb-4">
        <label className="block text-xl mb-2">Difficulty</label>
        <select 
          value={difficulty} 
          onChange={(e) => setDifficulty(e.target.value)} 
          className="bg-gray-700 p-2 rounded-lg"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-xl mb-2">Topic</label>
        <select 
          value={topic} 
          onChange={(e) => setTopic(e.target.value)} 
          className="bg-gray-700 p-2 rounded-lg"
        >
          <option value="general">General Knowledge</option>
          <option value="science">Science</option>
          <option value="history">History</option>
        </select>
      </div>

      <div className="mb-8">
        <label className="block text-xl mb-2">Time Limit (minutes)</label>
        <input 
          type="number" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
          className="bg-gray-700 p-2 rounded-lg"
        />
      </div>
   
   

     
      

      <button 
        className="bg-green-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-green-400 transition"
        onClick={handleStartQuiz}
      >
        Start Quiz
      </button>

      
    </div>
  );
};

export default Selection;
