// components/Quiz.tsx

import React, { useState } from 'react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctOption: string;
}

interface QuizProps {
  questions: Question[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);

    if (option === questions[currentQuestion].correctOption) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setSelectedOption(null);
      setCurrentQuestion(currentQuestion + 1);
    }, 1000);
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">{questions[currentQuestion].text}</h1>
          <ul>
            {questions[currentQuestion].options.map((option) => (
              <li
                key={option}
                onClick={() => handleOptionSelect(option)}
                className={`cursor-pointer ${
                  selectedOption === option
                    ? option === questions[currentQuestion].correctOption
                      ? 'bg-green-500'
                      : 'bg-red-500'
                    : 'bg-blue-500'
                } p-2 m-1 rounded`}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Quiz Completed!</h1>
          <p>Your score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
