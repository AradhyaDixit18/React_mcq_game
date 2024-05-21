import React from 'react';

const Result = ({ score, totalQuestions }) => {
  return (
    <div className="result-container">
      <h1>Quiz Completed!</h1>
      <p>
        You scored {score} out of {totalQuestions}
      </p>
      <button onClick={() => window.location.reload()}>Play Again</button>
    </div>
  );
};

export default Result;
