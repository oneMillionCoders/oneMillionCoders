// src/pages/Excel.js
import React, { useState } from 'react';

export default function Excel() {
  const sampleData = [
    [309, 39],
    [320, 35],
    [318, 45],
    [314, 44]
  ];

  const [quizAnswer, setQuizAnswer] = useState('');
  const [quizFeedback, setQuizFeedback] = useState('');
  const correctAnswer = '=A1+B1';
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCopy = () => {
    const text = sampleData.map(row => row.join('\t')).join('\n');
    navigator.clipboard.writeText(text)
      .then(() => alert("Values copied! Paste directly into Excel."))
      .catch(err => alert("Failed to copy: " + err));
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    if (quizAnswer.trim().toUpperCase() === correctAnswer.toUpperCase()) {
      setQuizFeedback('CORRECT');
    } else {
      setQuizFeedback('WRONG');
    }
  };

  const handleQuizChange = (e) => {
    setQuizAnswer(e.target.value);
    setQuizFeedback('');
  };

  return (
    <div className="p-4">
      <h1 className="h2 mb-3">Excel Essentials</h1>
      <p className="lead">
        Excel is the world's most used spreadsheet program.<br />
        Excel is a powerful tool to use for mathematical functions.
      </p>

      <hr className="my-4" />

      <section className="mb-5">
        <h2>Copy Values Tool</h2>
        <p>Click the button below to copy the table values</p>

        <button className="btn btn-outline-secondary mb-3" onClick={handleCopy}>
          📋 Copy Table Values
        </button>

        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/move_cells.png"
            alt="Excel Table Example"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">What You’ll Learn</h2>
        <ul className="list-unstyled ps-3">
          <li>• Input and format data</li>
          <li>• Build and use formulas</li>
          <li>• Design charts & pivot tables</li>
        </ul>

        <h2 className="h5">Why Study Excel?</h2>
        <p>
          Excel is a powerful tool used across industries for a variety of tasks.
          Example use areas:
        </p>
        <ol>
          <li>Data analytics</li>
          <li>Project management</li>
          <li>Finance and accounting</li>
        </ol>
      </section>

      {/* --- Quiz Card --- */}
      <div className="card mb-4" style={{ maxWidth: 500, margin: '0 auto', width: '100%' }}>
        <div className="card-body">
          <h5 className="card-title">Test Yourself</h5>
          <p className="card-text">What is the formula to add the values in cells A1 and B1 in Excel?</p>
          <form onSubmit={handleQuizSubmit} className="d-flex flex-column flex-sm-row align-items-center mb-2">
            <input
              type="text"
              className="form-control flex-grow-1 mb-2 mb-sm-0 me-sm-2"
              placeholder="Type your answer"
              value={quizAnswer}
              onChange={handleQuizChange}
              autoComplete="off"
            />
            <button type="submit" className="btn btn-primary w-100 w-sm-auto mb-2 mb-sm-0 me-sm-2">Submit</button>
            <button
              type="button"
              className="btn btn-outline-info w-100 w-sm-auto"
              onClick={() => setShowAnswer((prev) => !prev)}
            >
              {showAnswer ? 'Hide Answer' : 'Show Answer'}
            </button>
          </form>
          {quizFeedback && (
            <div className={`mt-3 fw-bold ${quizFeedback === 'CORRECT' ? 'text-success' : 'text-danger'}`}>
              {quizFeedback}
            </div>
          )}
          {showAnswer && (
            <div className="mt-2 alert alert-info py-2 px-3">
              <strong>Answer:</strong> {correctAnswer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}