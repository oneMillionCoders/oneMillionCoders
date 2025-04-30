// src/pages/Excel.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Excel() {
  const sampleData = [
    [309,39],
    [320,35],
    [318,45],
    [314,44]
  ];

  const handleCopy = () => {
    const text = sampleData.map(row => row.join('\t')).join('\n');
    navigator.clipboard.writeText(text)
      .then(() => alert("Values copied! Paste directly into Excel."))
      .catch(err => alert("Failed to copy: " + err));
  };

  return (
    <div className="p-4">
      <h1 className="h2 mb-3">Excel Essentials</h1>
      <p className="lead">
        Excel is the world's most used spreadsheet program.<br />
        Excel is a powerful tool to use for mathematical functions.
      </p>

      <hr className="my-4" />

      <p>
        <h2>Copy Values Tool</h2>
        Example values can be copied from the tutorial and into your spreadsheet, making it easy for you to tag along step-by-step:
      </p>

      <section className="mb-5">
        <h2 className="h5">Practice Data</h2>
        <p>Click the button below to copy the table values</p>

        {/* Copy Button */}
        <button className="btn btn-outline-secondary mb-3" onClick={handleCopy}>
          📋 Copy Table Values
        </button>

        {/* Table Image */}
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

        <p><h2 className="h5">Why Study Excel?</h2>
        Excel is a powerful tool used across industries for a variety of tasks.<br/>
        Example use areas:<br/>
        <ol>
       <li>Data analytics</li> 
       <li>Project management</li>
       <li>Finance and accounting</li>
        </ol>

</p>

      </section>

      <Link className="btn btn-primary btn-lg" to="/excel/introduction">
        Begin Lesson →
      </Link>
    </div>
  );
}
