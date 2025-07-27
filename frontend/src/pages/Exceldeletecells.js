import React from 'react';

export default function ExcelDeleteCellsPage() {
  return (
    <div className="p-4">
      <h1 className="h2 mb-3">Excel: Delete Cells</h1>
      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Delete Cells</h2>
        <p>Cells can be deleted by selecting them, and pressing the delete button.</p>
        <p><strong>Note:</strong> The delete function will not delete the formatting of the cell, just the value inside of it.</p>
        <p>Let's have a look at three examples.</p>
        <h3 className="h6">Example 1</h3>
        <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/delete.png" alt="Delete Example 1" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
        <p>Pressing the delete button:</p>
        <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/delete_1.png" alt="Delete Example 2" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
        <h3 className="h6">Example 2</h3>     
        <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/delete_2.png" alt="Delete Example 2" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
                <p>Pressing the delete button:</p>

        <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/delete_3.png" alt="Delete Example 2" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
        <h3 className="h6">Example 3 (With formatting)</h3>
        <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/delete_4.png" alt="Delete Example 3" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
                        <p>Pressing the delete button:</p>
 <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/delete_4.png" alt="Delete Example 3" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
        <p>Note that it only deletes the value in the cells, and not the formatting (the color).</p>
        <p><strong>Note:</strong> You will learn more about formatting, and how to style cells in a later chapter.</p>
      </section>
    </div>
  );
}
