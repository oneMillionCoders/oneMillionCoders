import React from 'react';

export default function DoubleClickFillPage() {
  return (
    <div className="p-4">
      <h1 className="h2 mb-3">Excel Double Click to Fill</h1>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Double Click to Fill</h2>
        <p>
          The <strong>fill function</strong> can be <strong>double-clicked</strong> to complete formulas in a range:
        </p>

        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/img_excel_dc_fill.png"
            alt="Excel Ribbon and Sheet"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

        <p>
          <strong>Note:</strong> For the double click to work, it has to see a recognizable pattern.<br/>
          <br/>
           For example, by using headers, or with the formulas in the columns or rows next to the data.
        </p>
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Double Click to Fill Example</h2>
        <p>
          Let's use the double-click fill function to calculate the <code>Attack B2:B20 + Defense C2:C20</code> for the Pokemons in the range <code>D2:D20</code>.
        </p>
        <ol>
          <li>Select <code>D2</code></li>
          <li>Type <code>=</code></li>

          {/* Copy Table Values Button */}
  <button
    className="btn btn-outline-secondary mb-3"
    onClick={() => {
      const sampleData = [
        ['Name', 'Attack', 'Defense'],
        ['Caterpie', 30, 35],
        ['Metapod', 30, 55],
        ['Butterfree', 35, 45],
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
            src="https://www.w3schools.com/excel/img_excel_dc_fill2.png"
            alt="Excel Ribbon and Sheet"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

          <li>Select <code>B2</code></li>
          <li>Type <code>+</code></li>
          <li>Select <code>C2</code></li>

          <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/img_excel_dc_fill3.png"
            alt="Excel Ribbon and Sheet"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

          <li>Hit enter</li>

          <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/img_excel_dc_fill4.png"
            alt="Excel Ribbon and Sheet"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

          <li>Double click the fill function</li>

          <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/img_excel_dc_fill5.png"
            alt="Excel Ribbon and Sheet"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

        </ol>
        <p>
        <strong>Way to go!</strong> The function understands the pattern and completes the calculation for <code>D2:D20</code>. Note that it stops when there is no more data to calculate, at row <strong>20</strong>.
        </p>
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">A Non-Working Example</h2>
        <p>
          Delete values in the range <code>D1:D20</code>.
        </p>
        <p>
          Enter the formula <code>=B2+C2</code> in <code>E2</code>.
        </p>
        <p>
          <strong>Note:</strong> There is no header for Columns D and E. There are blank cells in between.
        </p>
        <p>Double click the fill function.</p>
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/img_excel_dc_fill6.png"
            alt="Non-Working Double Click Example"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
        <p>
        <strong>Waiting...</strong>
        </p>

        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/img_excel_dc_fill7.png"
            alt="Excel Ribbon and Sheet"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

        <p>
          The fill function is just loading without filling the rows. It is not understanding the pattern.
        </p>
        <h3 className="h6">Give it More Clues</h3>
        <p>
          Add a header to see what happens. Enter <code>Atk+def</code> in <code>E1</code>.
        </p>
        <p>Double click the fill function.</p>

        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/img_excel_dc_fill8.png"
            alt="Excel Ribbon and Sheet"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

        <p><strong>Loading... Still nothing...</strong></p>
        <p>
          One more header. Enter "Random" in <code>D1</code>.
        </p>
        <p>Double click the fill function.<br/>
        <br/>
        <strong>Is the gap closed?</strong></p>
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/img_excel_dc_fill9.png"
            alt="Working Double Click Example"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
        <p>
        <strong>There we go!</strong> The function recognized the pattern and filled in the formulas for each row.
        </p>
        <p>
          Adding headers helped the function to understand the relationship between the data.
        </p>
      </section>
    </div>
  );
}