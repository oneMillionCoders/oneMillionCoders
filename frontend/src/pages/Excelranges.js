import React from 'react';

export default function ExcelRanges() {
  return (
    <div className="p-4">
      <h1 className="h2 mb-3">Excel Ranges</h1>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Ranges</h2>
        <p>
          Range is an important part of Excel because it allows you to work with selections of cells.
        </p>
        <p>There are four different operations for selection:</p>
        <ul>
          <li>Selecting a cell</li>
          <li>Selecting multiple cells</li>
          <li>Selecting a column</li>
          <li>Selecting a row</li>
        </ul>
        <p>
          Before having a look at the different operations for selection, we will introduce the Name Box.
        </p>
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">The Name Box</h2>
        <p>
          The Name Box shows you the reference of which cell or range you have selected. It can also be used to select cells or ranges by typing their values.
        </p>
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/name_box.png"
            alt="Excel Name Box"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
        <p>You will learn more about the Name Box later in this chapter.</p>
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Selecting a Cell</h2>
        <p>
          Cells are selected by clicking them with the left mouse button or by navigating to them with the keyboard arrows.
        </p>
        <p>It is easiest to use the mouse to select cells.</p>
        <p>To select cell <code>A1</code>, click on it:</p>
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/select_cell.png"
            alt="Selecting a Cell"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Selecting Multiple Cells</h2>
        <p>
          More than one cell can be selected by pressing and holding down <strong>CTRL</strong> or <strong>Command</strong> and left clicking the cells. Once finished with selecting, you can let go of <strong>CTRL</strong> or <strong>Command</strong>.
        </p>
        <p>
          Let's try an example: Select the cells <code>A1</code>, <code>A7</code>, <code>C1</code>, <code>C7</code>, and <code>B4</code>.
        </p>
        <p>Did it look like the picture below?</p>
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/select_cells.png"
            alt="Selecting Multiple Cells"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Selecting a Column</h2>
        <p>
          Columns are selected by left clicking it. This will select all cells in the sheet related to the column.
        </p>
        <p>To select column A, click on the letter A in the column bar:</p>
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/select_col.png"
            alt="Selecting a Column"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Selecting a Row</h2>
        <p>
          Rows are selected by left clicking it. This will select all the cells in the sheet related to that row.
        </p>
        <p>To select row 1, click on its number in the row bar:</p>
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/select_row.png"
            alt="Selecting a Row"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Selecting the Entire Sheet</h2>
        <p>
          The entire spreadsheet can be selected by clicking the triangle in the top-left corner of the spreadsheet:
        </p>
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/img_excel_ranges_entire_spreadsheet.png"
            alt="Selecting the Entire Sheet"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
        <p>Now, the whole spreadsheet is selected:</p>

        
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/img_excel_ranges_entire_spreadsheet2.png"
            alt="Excel Ribbon and Sheet"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

        <p>
          <strong>Note:</strong> You can also select the entire spreadsheet by pressing <strong>Ctrl+A</strong> for Windows, or <strong>Cmd+A</strong> for MacOS.
        </p>
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Selection of Ranges</h2>
        <p>
          Selection of cell ranges has many use areas and it is one of the most important concepts of Excel. Do not think too much about how it is used with values. You will learn about this in a later chapter. For now, let's focus on how to select ranges.
        </p>
        <p>There are two ways to select a range of cells:</p>
        <ul>
          <li>Name Box</li>
          <li>Drag to mark a range</li>
        </ul>
        <p>
          The easiest way is drag and mark. Let's keep it simple and start there.
        </p>
        <h3 className="h6">How to Drag and Mark a Range, Step-by-Step:</h3>
        <ol>
          <li>Select a cell</li>
          <li>Left click it and hold the mouse button down</li>
          <li>Move your mouse pointer over the range that you want selected. The range that is marked will turn grey.</li>
          <li>Let go of the mouse button when you have marked the range</li>
        </ol>
        <p>Let's have a look at an example for how to mark the range <code>A1:E10:</code></p>

        <p>
          <strong>Note:</strong> You will learn about why the range is called <code>A1:E10</code> after this example.
        </p>

        <p>Select cell <code>A1</code>:</p>

        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/select_cell.png"
            alt="Selecting a Range"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

        <p>Press and hold <code>A1</code> with the left mouse button. Move to the mouse pointer to mark the selection range. The grey area helps us to see the covered range.<br/>
        <br/>
        Let go of the left mouse button when you have marked the range <code>A1:E10</code>:
        </p>

        
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/select_range.png"
            alt="Excel Ribbon and Sheet"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

        <p>You have successfully selected the range <code>A1:E10</code>. <strong>Well done!</strong></p>

        <p>The second way to select a range is to enter the range values in the Name Box. The range is set by first entering the cell reference for the top left corner, then the bottom right corner. The range is made using those two as coordinates. That is why the cell range has the reference of two cells and the : in between.</p>

        <p><strong>Top left corner reference : Right bottom corner reference</strong></p>

        <p>The range shown in the picture has the value of <code>A1:E10</code>:</p>

        
<div className="text-center">
          <img
            src="https://www.w3schools.com/excel/select_range2.png"
            alt="Excel Ribbon and Sheet"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

        <p>The best way for now is to use the drag and mark method as it is easier and more visual.
<br/>
<br/>The best way for now is to use the drag and mark method as it is easier and more visual.

</p>

        </section>   
        
      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">What's Next?</h2>
        <p>
          In the next chapter, you will learn about filling and how this applies to the ranges that we have just learned.
        </p>
      </section>
    </div>
  );
}