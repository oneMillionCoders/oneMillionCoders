import React from "react";

export default function Excelsum() {
  return (
    <div>
      <h1>Excel SUM Function Made Simple</h1>
      <h2>What is the SUM Function?</h2>
      <p>The SUM function adds up numbers in a group of cells. It helps you quickly find the total.</p>

      <h2>Why Use SUM?</h2>
      <ul>
        <li>Add up numbers fast</li>
        <li>Works for both positive and negative numbers</li>
        <li>Updates automatically if you change a value</li>
      </ul>

      <h2>How to Use SUM (Step-by-Step)</h2>
      <ol>
        <li>Click a cell where you want the result.</li>
        <li>Type <b>=SUM(range)</b> (for example, <b>=SUM(D2:D21)</b>).</li>
        <li>Press Enter.</li>
      </ol>

      <h2>Tips for Beginners</h2>
      <ul>
        <li>If you change a value in the range, SUM updates automatically</li>
        <li>Try changing the numbers to see the result update</li>
      </ul>
    </div>
  );
}
