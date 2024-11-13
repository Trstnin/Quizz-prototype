// src/pages/Questions.jsx (Only updated parts)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris',
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    answer: '4',
  },
  {
    question: 'Who wrote "Hamlet"?',
    options: ['William Shakespeare', 'Charles Dickens', 'J.K. Rowling', 'Ernest Hemingway'],
    answer: 'William Shakespeare',
  },
];

const Questions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 10); // Award 10 points for each correct answer
    }

    setSelectedOption(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate coins and diamonds based on score (example logic)
      const coins = Math.floor(score / 10);
      const diamonds = Math.floor(score / 20);

      // Navigate to Results page with score, coins, and diamonds
      navigate('/results', { state: { score, coins, diamonds } });
    }
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-700 text-white">
      <div className="w-3/4">
        <div className="bg-gray-300 rounded-full h-4 mb-6">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <h2 className="text-2xl font-bold mb-4">
          Question {currentQuestionIndex + 1} of {questions.length}
        </h2>
        <p className="text-xl mb-4">{questions[currentQuestionIndex].question}</p>

        <div className="mb-8">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <label key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>

        <button
          onClick={handleNextQuestion}
          className={`bg-blue-500 text-white px-6 py-3 rounded-lg text-xl transition ${
            selectedOption ? 'hover:bg-blue-400' : 'opacity-50 cursor-not-allowed'
          }`}
          disabled={!selectedOption}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Questions;