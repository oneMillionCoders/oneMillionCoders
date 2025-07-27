import React from 'react';

export default function ExcelUndoRedoPage() {
  return (
    <div className="p-4">
      <h1 className="h2 mb-3">Excel: Undo and Redo</h1>
      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Undo</h2>
        <p>The Undo function lets you reverse an action. Undo is helpful if you regret an action and want to go back to how it was before.</p>
        <h3 className="h6">Examples of use</h3>
        <ul>
          <li>Undo deleting a formula</li>
          <li>Undo adding a column</li>
          <li>Undo removing a row</li>
        </ul>
        <p><strong>Note:</strong> You cannot Undo things that you do in the File Menu, such as deleting a sheet, saving a spreadsheet or changing the options. The thumb rule is that you can Undo things you do in your sheet.</p>
        <p>There are two ways to access the Undo command.</p>
        <ol>
          <li>Pressing the Undo button in the Ribbon:</li>
        </ol>
        <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/undo.png" alt="Undo Button" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
        <ol start={2}>
          <li>Using the keyboard shortcut <kbd>CTRL + Z</kbd> / <kbd>Command + Z</kbd></li>
        </ol>
        <p>Let's have a look at an example:</p>
        <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/undo2.png" alt="Undo Example" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
        <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/undo3.png" alt="Undo Example" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
        <p><strong>Note:</strong> It is recommended to practice using the keyboard shortcut. It saves you time!</p>
      </section>

      <section className="mb-5">
        <h2 className="h5">Redo</h2>
        <p>The Redo function has the opposite effect as Undo, it reverses the Undo action. Redo is helpful if you regret using Undo.</p>
        <p><strong>Note:</strong> The Redo command is only available if you have used Undo.</p>
        <p>There are two ways to access the Redo command.</p>
        <ol>
          <li>Pressing the Redo button in the Ribbon:</li>
        </ol>
        <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/redo.png" alt="Redo Button" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
        <ol start={2}>
          <li>Using the keyboard shortcut <kbd>CTRL + Y</kbd> / <kbd>Command + Y</kbd></li>
        </ol>
        <p>Tip: Practice for yourself to get familiar with Undo and Redo.</p>
      </section>
    </div>
  );
}
