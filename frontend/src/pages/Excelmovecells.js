import React from 'react';

export default function ExcelMoveCellsPage() {
  return (
    <div className="p-4">
      <h1 className="h2 mb-3">Excel: Move Cells</h1>
      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">How to Move Cells in Excel</h2>
        <p>
          You can move cells in Excel in two main ways: <strong>drag and drop</strong>, or <strong>cut and paste</strong>.
        </p>
      </section>

      <section className="mb-5">
        <h3 className="h6">Drag and Drop</h3>
        <p>First, type or copy some values into your sheet so you have something to move.</p>
        <p>Next, select the area <code>A1:B4</code>:</p>
        <button
    className="btn btn-outline-secondary mb-3"
    onClick={() => {
      const sampleData = [
        [309,39],
        [320,35],
        [318,45],
        [314,44],
      ];
      const text = sampleData.map(row => row.join('\t')).join('\n');
      navigator.clipboard.writeText(text)
        .then(() => alert("Values copied! Paste directly into Excel."))
        .catch(err => alert("Failed to copy: " + err));
    }}
  >
    📋 Copy Table Values
  </button>

        <div className="text-center mb-3">
          <img
            src="https://www.w3schools.com/excel/move_cells.png"
            alt="Select A1:B4"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
        <p>
          Move your mouse to the border of the selection. When the cursor changes to a move symbol, press and hold the left mouse button, then drag the range to <code>B2:C5</code>.
        </p>
        <div className="text-center mb-3">
          <img
            src="https://www.w3schools.com/excel/move_cells3.png"
            alt="Move to B2:C5"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
        <p>
          Now you have more space for extra data.
        </p>
        <p>
          <strong>Tip:</strong> It's helpful to add text that explains your data, so your spreadsheet is easy to understand.
        </p>
        <p>Let's add some context. Type or copy these values:</p>

        <button
    className="btn btn-outline-secondary mb-3"
    onClick={() => {
      const sampleData = [
        ['','Health','Attack'],
        ['Charmander',309,39],
        ['Pikachu',320,35],
        ['Bulbasaur',318,45],
        ['Squirtle',314,44],
      ];
      const text = sampleData.map(row => row.join('\t')).join('\n');
      navigator.clipboard.writeText(text)
        .then(() => alert("Values copied! Paste directly into Excel."))
        .catch(err => alert("Failed to copy: " + err));
    }}
  >
    📋 Copy Table Values
  </button>        


        <div className="text-center mb-3">
          <img
            src="https://www.w3schools.com/excel/move_cells4.png"
            alt="Pokemon Data"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
        <p>Yes, those are Pokemon! Giving context to your data is always a good idea.</p>
      </section>

      <section className="mb-5">
        <h3 className="h6">Cut and Paste</h3>
        <p>
          You can also move cells by cutting and pasting them somewhere else.
        </p>
        <p>
          <strong>Tip:</strong> Use <kbd>Ctrl+X</kbd> to cut and <kbd>Ctrl+V</kbd> to paste. This is a quick way to move data.
        </p>
        <p>
          Select the range <code>A1:C5</code>. Right-click and choose <strong>Cut</strong> (the scissors icon).
        </p>
        <div className="text-center mb-3">
          <img
            src="https://www.w3schools.com/excel/cut1.png"
            alt="Cut Range"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
        <p>
          The cut range will have a white-grey color and a dotted border. This means it's ready to be pasted.
        </p>
        <p>
          Right-click the cell <code>B6</code> and click the paste icon.
        </p>
        <div className="text-center mb-3">
          <img
            src="https://www.w3schools.com/excel/paste1.png"
            alt="Paste to B6"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
        <p>
          You have now moved the range from <code>A1:C5</code> to <code>B6:D10</code>.
        </p>
        <div className="text-center mb-3">
          <img
            src="https://www.w3schools.com/excel/paste2.png"
            alt="Paste to B6"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
      </section>

      <section className="mb-5">
        <h3 className="h6">Copy and Paste</h3>
        <p>
          Copy and paste works just like cut and paste, but it doesn't remove the original cells.
        </p>
        <p>
          <strong>Tip:</strong> Use <kbd>Ctrl+C</kbd> to copy and <kbd>Ctrl+V</kbd> to paste.
        </p>
        <p>
          Select <code>B6:D10</code>, right-click and choose <strong>Copy</strong> (the two papers icon).
        </p>
        <div className="text-center mb-3">
          <img
            src="https://www.w3schools.com/excel/copy.png"
            alt="Copy Range"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
        <p>
          The copied range will have a green dotted border. This means it's ready to be pasted.
        </p>
        <div className="text-center mb-3">
          <img
            src="https://www.w3schools.com/excel/copy2.png"
            alt="Copy Range"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
        <p>
          Right-click cell <code>A1</code> and click the paste icon.
        </p>
        <div className="text-center mb-3">
          <img
            src="https://www.w3schools.com/excel/paste_copy.png"
            alt="Paste to A1"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

        <div className="text-center mb-3">
          <img
            src="https://www.w3schools.com/excel/paste_copy2.png"
            alt="Paste to A1"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
        <p>
          The difference between cutting and copying is that cutting removes the original cells, while copying leaves them in place.
        </p>
      </section>

      <section className="mb-5">
        <h3 className="h6">Delete Data</h3>
        <p>
          To remove data, select the original cells and press the <strong>Delete</strong> key on your keyboard.
        </p>
        <div className="text-center mb-3">
          <img
            src="https://www.w3schools.com/excel/delete1.png"
            alt="Delete Data"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

        <div className="text-center mb-3">
          <img
            src="https://www.w3schools.com/excel/delete2.png"
            alt="Paste to A1"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

        <p>
          Now your sheet is clean and ready for new data!
        </p>
      </section>
    </div>
  );
}
