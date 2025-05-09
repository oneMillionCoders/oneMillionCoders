import React from 'react';

export default function ExcelGetStarted() {

  const sampleData = [
    ['=1+1']
  ];

  const handleCopy = () => {
    const text = sampleData.map(row => row.join('\t')).join('\n');
    navigator.clipboard.writeText(text)
      .then(() => alert("Values copied! Paste directly into Excel."))
      .catch(err => alert("Failed to copy: " + err));
  };

  return (
    <div className="p-4">
      <h1 className="h2 mb-3">Excel Get Started</h1>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Office 365</h2>
        <p>
          The easiest way to get started with Excel is to use Office 365.
        </p>
        <p>
          Office 365 does not require downloading and installation of the program. It simply runs in your browser.
        </p>
        <p>
          In our tutorial, we will use Office 365, which can be accessed from <a href="https://www.office.com" target="_blank" rel="noopener noreferrer">www.office.com</a>.
        </p>
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Install</h2>
        <p>
          Once you have successfully logged into Office through <a href="https://www.office.com" target="_blank" rel="noopener noreferrer">www.office.com</a>, click on the Excel icon on the left side to enter the application:
        </p>

          <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/office1.jpg"
            alt="office365 Example"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
          </div>        

        <p>
          After entering the Excel application, click on the <strong>New blank workbook</strong> button to get started with a new workbook.<br/>
        </p>

          <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/office2.jpg"
            alt="office365 Example"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
          </div>        

        <p>
          Enter a name for your workbook, and hit the enter button:
        </p>

        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/excel_first.png"
            alt="office365 Example"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
          </div>

        <p>
          The Excel view has columns and rows, similar to a squared math exercise book.
        </p>
        <p>
          Do not worry if the functionality looks overwhelming at first. You will get comfortable as you learn more in the chapters to come.
        </p>
        <p>
          For now, focus on the rows, columns, and the cells.
        </p>
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Copy Table Values</h2>
        <p>
          Click the button below to copy the sample table values. You can paste them directly into Excel:
        </p>
        <button className="btn btn-outline-secondary mb-3" onClick={handleCopy}>
          📋 Copy Table Values
        </button>
      </section>      

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Ok. Let's make a function!</h2>
        <p>
          First, double click the cell <strong>A1</strong>, the one that is marked with the green rectangle in the picture.
        </p>
        <p>
          Second, type <code>=1+1</code>.
        </p>
        <p>
          Third, hit the enter button:
        </p>

        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/excel2.png"
            alt="office365 Example"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
          </div>

        <p>
          <strong>Congratulations!</strong> You have typed your first function, <code>1+1=2</code>.
        </p>
      </section>
    </div>
  );
}