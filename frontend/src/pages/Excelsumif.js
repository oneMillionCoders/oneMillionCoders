import React from "react";

export default function Excelsumif() {
  return (
    <div>
      <h1>Excel SUMIF Function Made Simple</h1>
      <h2>What is the SUMIF Function?</h2>
      <p>The SUMIF function adds up numbers in a group of cells, but only if they meet a condition you set.</p>

      <h2>Why Use SUMIF?</h2>
      <ul>
        <li>Add up numbers that match a rule</li>
        <li>Compare text or numbers</li>
        <li>Make your totals smarter</li>
      </ul>

      <h2>How to Use SUMIF (Step-by-Step)</h2>
      <ol>
        <li>Click a cell where you want the result.</li>
        <li>Type <b>=SUMIF(range, criteria, sum_range)</b> (for example, <b>=SUMIF(B2:B10, "Grass", C2:C10)</b>).</li>
        <li>Press Enter.</li>
      </ol>

      <h2>Tips for Beginners</h2>
      <ul>
        <li>Use dollar signs ($) to lock the range if you want to copy the formula down</li>
        <li>Try changing the criteria to see different results</li>
      </ul>
    </div>
  );
}
