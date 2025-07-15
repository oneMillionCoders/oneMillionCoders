import React, { useState } from 'react';

export default function ExcelSyntax() {
  const [quizAnswer, setQuizAnswer] = useState('');
  const [quizFeedback, setQuizFeedback] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const correctAnswer = '=1+1';

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
      <h1 className="h2 mb-3">Excel Syntax</h1>

      <hr className="my-4" />

      {/* --- Quiz Card --- */}
      {/* Quiz card moved to bottom, just before closing main div */}

      <section className="mb-5">
        <h2 className="h5">Syntax</h2>
        <p>
          A formula in Excel is used to do mathematical calculations. Formulas always start with the equal sign <code>=</code> typed in the cell, followed by your calculation.
        </p>
        <p>
          <strong>Note:</strong> You claim the cell by selecting it and typing the equal sign (<code>=</code>).
        </p>
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Creating Formulas, Step by Step</h2>
        <ol>
          <li>Select a cell</li>
          <li>Type the equal sign (<code>=</code>)</li>
          <li>Select a cell or type a value</li>
          <li>Enter an arithmetic operator</li>
          <li>Select another cell or type a value</li>
          <li>Press enter</li>
        </ol>
        <p>
          For example, <code>=1+1</code> is the formula to calculate <code>1+1=2</code>.
        </p>

        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/excel_new.png"
            alt="Excel Ribbon and Sheet"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

        <p>
          <strong>Note:</strong> The value of a cell is communicated by <strong>reference (value)</strong>, for example <code>A1(2)</code>.
        </p>
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Using Formulas with Cells</h2>
        <p>
          You can type values into cells and use them in your formulas.
        </p>
        <p>
          Let's type some dummy values to get started. Double click the cells to type values into them. Go ahead and type:
        </p>
        <ul>
          <li><code>A1(309)</code></li>
          <li><code>A2(320)</code></li>
          <li><code>B1(39)</code></li>
          <li><code>B2(35)</code></li>
        </ul>
        <p>
          Compare with the picture shown below:
        </p>

        {/* Copy Table Values Button */}
  <button
    className="btn btn-outline-secondary mb-3"
    onClick={() => {
      const sampleData = [
        [309,39],
        [320,35],        
      ];
      const text = sampleData.map(row => row.join('\t')).join('\n');
      navigator.clipboard.writeText(text)
        .then(() => alert("Values copied! Paste directly into Excel."))
        .catch(err => alert("Failed to copy: " + err));
    }}
  >
    📋 Copy Table Values
  </button>

        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/excel_new2.png"
            alt="Excel Syntax Example"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
        <p>
          <strong>Note:</strong> Type values by selecting a cell, claim it by entering the equal sign (<code>=</code>) and then type your value. For example, <code>=309</code>.
        </p>
        <p>
          <strong>Well done!</strong> You have successfully typed values into cells, and now we can use them to create formulas.
        </p>
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Creating a Formula</h2>
        <p>Here is how to do it, step by step:</p>
        <ol>
          <li>Select the cell <code>C1</code></li>
          <li>Type the equal sign (<code>=</code>)</li>
          <li>Left click on <code>A1</code>, the cell that has the <code>(309)</code> value</li>
          <li>Type the minus sign (<code>-</code>)</li>
          <li>Left click on <code>B2</code>, the cell that has the <code>(35)</code> value</li>
          <li>Hit enter</li>
        </ol>
        <p>
          <strong>Tip:</strong> The formula can be typed directly without clicking the cells. The typed formula would be the same as the value in <code>C1 (=A1-B2)</code>.
        </p>

        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <img
            src="https://www.w3schools.com/excel/excel_new3.png"
            alt="Excel Ribbon and Sheet"
            className="img-fluid rounded m-2"
            style={{ maxWidth: '45%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
          <img
            src="https://www.w3schools.com/excel/excel_new6.png"
            alt="Excel Ribbon and Sheet"
            className="img-fluid rounded m-2"
            style={{ maxWidth: '45%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

        <p>
          The result after hitting the enter button is <code>C1(274)</code>. Did you make it?
        </p>
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Another Example</h2>
        <p>Let's try one more example. This time, let's make the formula <code>=A2-B1</code>.</p>
        <p>Here is how to do it, step by step:</p>
        <ol>
          <li>Select the cell <code>C2</code></li>
          <li>Type the equal sign (<code>=</code>)</li>
          <li>Left click on <code>A2</code>, the cell that has the <code>(320)</code> value</li>
          <li>Type the minus sign (<code>-</code>)</li>
          <li>Left click on <code>B1</code>, the cell that has the <code>(39)</code> value</li>
          <li>Hit the enter button</li>
        </ol>

        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <img
            src="https://www.w3schools.com/excel/excel_new5.png"
            alt="Excel Ribbon and Sheet"
            className="img-fluid rounded m-2"
            style={{ maxWidth: '45%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
          <img
            src="https://www.w3schools.com/excel/excel_new6.png"
            alt="Excel Ribbon and Sheet"
            className="img-fluid rounded m-2"
            style={{ maxWidth: '45%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>     

        <p>
          You got the result <code>C2(281)</code>, right? <strong>Way to go!</strong>
        </p>
        <p>
          <strong>Note:</strong> You can make formulas with all four arithmetic operations, such as addition (<code>+</code>), subtraction (<code>-</code>), multiplication (<code>*</code>), and division (<code>/</code>).
        </p>
        <p>Here are some examples:</p>
        <ul>
          <li><code>=2+4</code> gives you <code>6</code></li>
          <li><code>=4-2</code> gives you <code>2</code></li>
          <li><code>=2*4</code> gives you <code>8</code></li>
          <li><code>=2/4</code> gives you <code>0.5</code></li>
        </ul>
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">What's Next?</h2>
        <p>
          In the next chapter, you will learn about Ranges and how data can be moved in the Sheet.
        </p>
      </section>
      <div className="card mb-4" style={{ maxWidth: 500, margin: '0 auto' }}>
        <div className="card-body">
          <h5 className="card-title">Test Yourself With Exercises</h5>
          <p className="card-text">Complete the Excel formula:</p>
          <div className="mb-2"><strong>1+1</strong></div>
          <form onSubmit={handleQuizSubmit} className="d-flex align-items-center mb-2">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Type your answer"
              value={quizAnswer}
              onChange={handleQuizChange}
              autoComplete="off"
            />
            <button type="submit" className="btn btn-primary me-2">Submit</button>
            <button
              type="button"
              className="btn btn-outline-info"
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