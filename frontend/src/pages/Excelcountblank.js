import React from "react";

export default function Excelcountblank() {
  return (
    <div>
      <h1>Excel COUNTBLANK Function</h1>
      <h2>What is the COUNTBLANK Function?</h2>
      <p>COUNTBLANK tells you how many empty cells are in a range. It's useful for finding missing data.</p>
      <h3>How to Use COUNTBLANK</h3>
      <ol>
        <li>Click a cell (like C23).</li>
        <li>Type <b>=COUNTBLANK(C2:C21)</b></li>
        <li>Press Enter.</li>
      </ol>
      <p>This counts all the blank cells in C2:C21.</p>
    </div>
  );
}
