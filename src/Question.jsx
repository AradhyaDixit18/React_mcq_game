import React from 'react';

const Question = ({ question, onAnswerOptionClick }) => {
  return (
    <div className="question-container">
      <div className="question-text">{question.questionText}</div>
      <div className="answer-options">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => onAnswerOptionClick(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
