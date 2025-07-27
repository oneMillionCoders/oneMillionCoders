import React from 'react';

export default function ExcelAddCellsPage() {
  return (
    <div className="p-4">
      <h1 className="h2 mb-3">Excel: Add Cells</h1>
      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Adding New Columns</h2>
        <p>Columns can be added and deleted. You access the menu by right clicking the column letter. New columns are added to the same place you clicked.</p>
        <p>Let's try to create a new column B.</p>
        <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/add.png" alt="Insert Column" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
        <p>Right click on the column and select "Insert Columns":</p>
        <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/add2.png" alt="Insert Column Menu" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
        <p>And a new column is created:</p>
        <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/add3.png" alt="New Column" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
        <p>Next, we need to get some Pokemon trainers in there. Type or copy the following data in the new column B:</p>

        <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/add4.png" alt="New Column" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>


        <button className="btn btn-outline-secondary mb-3" onClick={() => {
          const sampleData = [
            ['','Trainer',	'Health',	'Attack'],
            ['Charmander','Iva',309,39],
            ['Pikachu	Iva',320,35],
            ['Bulbasaur','Liam',318,45],
            ['Squirtle','Liam',314,44],
          ];
          const text = sampleData.map(row => row.join('\t')).join('\n');
          navigator.clipboard.writeText(text)
            .then(() => alert("Values copied! Paste directly into Excel."))
            .catch(err => alert("Failed to copy: " + err));
        }}>
          📋 Copy Trainer Names
        </button>
      </section>

      <section className="mb-5">
        <h2 className="h5">Adding New Rows</h2>
        <p>Rows can also be added and deleted. You access the menu by right clicking the row number. New rows are added to the same place you clicked.</p>
        <p>Let's try to create a new row 4.</p>
        <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/add_row.png" alt="Insert Row" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
        <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/add_row2.png" alt="Insert Row" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
        <p>We forgot to add Iva's Pokemon, Marowak. Lets add his data to the new row 4, by typing or copying the following values:</p>

        <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/add_row3.png" alt="Insert Row" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
        <button className="btn btn-outline-secondary mb-3" onClick={() => {
          const sampleData = [
            ['','Trainer',	'Health',	'Attack'],
            ['Charmander','Iva',309,39],
            ['Pikachu	Iva',320,35],
            ['Marowak','Iva',425,60],
            ['Bulbasaur','Liam',318,45],
            ['Squirtle','Liam',314,44],
          ];
          const text = sampleData.map(row => row.join('\t')).join('\n');
          navigator.clipboard.writeText(text)
            .then(() => alert("Values copied! Paste directly into Excel."))
            .catch(err => alert("Failed to copy: " + err));
        }}>
          📋 Copy Row Values
        </button>
        <p>Excellent job!</p>
      </section>
    </div>
  );
}
