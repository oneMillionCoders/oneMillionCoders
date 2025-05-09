import React from 'react';

export default function ExcelOverview() {
  return (
    <div className="p-4">
      <h1 className="h2 mb-3">Excel Overview</h1>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Overview</h2>
        <p>
          This chapter is about giving you an overview of Excel. Excel's structure is made of two pieces, the Ribbon and the Sheet.
        </p>
        <p>
          Have a look at the picture below. The Ribbon is marked with a red rectangle and the Sheet is marked with a yellow rectangle:
        </p>
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/rib_sheet.jpg"
            alt="Excel Ribbon and Sheet"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

        <p>First, let's start with explaining the Ribbon.</p>

      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">The Ribbon Explained</h2>
        <p>
          The Ribbon provides shortcuts to Excel commands. A command is an action that allows you to make something happen. This can, for example, be to: insert a table, change the font size, or change the color of a cell.
        </p>
        <p>
          The Ribbon may look crowded and hard to understand at first. Don't be scared, it will become easier to navigate and use as you learn more. Most of the time we tend to use the same functionalities over again.
        </p>
        <p>
          The Ribbon is made up of the App launcher, Tabs, Groups, and Commands. In this section, we will explain the different parts of the Ribbon.
        </p>

        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/overview_ribbon.jpg"
            alt="Excel Ribbon and Sheet"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>


        <h3 className="h6">App Launcher</h3>
        <p>
          The App launcher icon has nine dots and is called the Office 365 navigation bar. It allows you to access the different parts of the Office 365 suite, such as Word, PowerPoint, and Outlook. The App launcher can be used to switch seamlessly between the Office 365 applications.
        </p>

        <h3 className="h6">Tabs</h3>
        <p>
          The tab is a menu with subdivisions sorted into groups. The tabs allow users to quickly navigate between options of menus that display different groups of functionality.
        </p>

        <h3 className="h6">Groups</h3>
        <p>
          The groups are sets of related commands. The groups are separated by the thin vertical line break.
        </p>

        <h3 className="h6">Commands</h3>
        <p>
          The commands are the buttons that you use to perform actions.<br/>
          Now, let's have a look at the Sheet. Soon you will be able to understand the relationship between the Ribbon and the Sheet, and you can make things happen.
        </p>
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">The Sheet Explained</h2>
        <p>
          The Sheet is a set of rows and columns. It forms the same pattern as we have in math exercise books. The rectangle boxes formed by the pattern are called cells.
        </p>
        <p>
          Values can be typed into cells.<br/>
          <br/>
          Values can be both numbers and letters:
        </p>

         {/* Copy Table Values Button */}
  <button
    className="btn btn-outline-secondary mb-3"
    onClick={() => {
      const sampleData = [
        [1,'Hello World'],
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
            src="https://www.w3schools.com/excel/overview_ribbon2.jpg"
            alt="Excel Sheet Example"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
        <p><h5>Each cell has its unique reference, which is its coordinates, where the columns and rows intersect.</h5>
          
        </p>
        <p>
          For example, 1 was typed in cell A1. The reference can be found by clicking on the relevant cell and seeing the reference in the Name Box to the left, which tells you that the cell's reference is A1.
        </p>
        
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Multiple Sheets</h2>
        <p>
          You start with one Sheet by default when you create a new workbook. You can have many sheets in a workbook. New sheets can be added and removed. Sheets can be named to make it easier to work with data sets.
        </p>
        <p>
          <strong>Are you up for the challenge?</strong> Let's create two new sheets and give them useful names.
        </p>
        <p>
          First, click the plus icon, shown in the picture below, to create two new sheets:
        </p>
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/add_new.jpg"
            alt="Add New Sheets"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
        <strong>Tip: You can use the hotkey Shift + F11 to create new sheets. Try it!</strong>
        <br/>
        <br/>
        <p>
          Second, right-click with your mouse on the relevant sheet and click rename:
        </p>
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/rename.jpg"
            alt="Rename Sheets"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
        <p>
          Third, enter useful names for the three sheets:
        </p>
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/add_sheet_rename.jpg"
            alt="Sheet Names Example"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
        <p>
          In this example, we used the names Data Visualization, Data Structure, and Raw Data. This is a typical structure when you are working with data.
        </p>
        <p>
          <strong>Good job!</strong> You have now created your first workbook with three named sheets!
        </p>
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Chapter Summary</h2>
        <p>
          The workbook has two main components: the <strong>Ribbon</strong> and the <strong>Sheet.</strong>
        </p>
        <ul className="list-unstyled ps-3">
          <li>The <strong>Ribbon</strong> is used to navigate and access commands.</li>
          <li>The <strong>Sheet</strong> is made up of columns and rows, which make cells.</li>
          <li>Each cell has its unique reference.</li>
          <li>You can add new sheets to your workbook and name them.</li>
        </ul>
        <p>
          In the next chapters, you will learn more about the sheet, formulas, ranges, and functions.
        </p>
      </section>
    </div>
  );
}