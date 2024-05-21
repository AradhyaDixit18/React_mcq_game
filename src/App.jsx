import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import './styles.css';

const questions = [
  {
    questionText: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
    answer: 'Paris'
  },
  {
    questionText: 'Who wrote "To Kill a Mockingbird"?',
    options: ['Harper Lee', 'Mark Twain', 'J.K. Rowling', 'Ernest Hemingway'],
    answer: 'Harper Lee'
  },
  {
    questionText: 'What is the largest planet in our Solar System?',
    options: ['Earth', 'Jupiter', 'Mars', 'Saturn'],
    answer: 'Jupiter'
  },
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="app">
      {showResult ? (
        <Result score={score} totalQuestions={questions.length} />
      ) : (
        <Question
          question={questions[currentQuestion]}
          onAnswerOptionClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
};

export default App;
