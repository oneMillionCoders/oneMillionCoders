import React from "react";

export default function Excelsumifs() {
  return (
    <div>
      <h1>Excel SUMIFS Function Made Simple</h1>
      <h2>What is the SUMIFS Function?</h2>
      <p>The SUMIFS function adds up numbers in a group of cells, but only if they meet two or more conditions you set.</p>

      <h2>Why Use SUMIFS?</h2>
      <ul>
        <li>Add up numbers that match several rules</li>
        <li>Compare text or numbers in different columns</li>
        <li>Make your totals even smarter</li>
      </ul>

      <h2>How to Use SUMIFS (Step-by-Step)</h2>
      <ol>
        <li>Click a cell where you want the result.</li>
        <li>Type <b>=SUMIFS(sum_range, criteria_range1, criteria1, ...)</b> (for example, <b>=SUMIFS(C2:C759, B2:B759, "Water", D2:D759, 1)</b>).</li>
        <li>Press Enter.</li>
      </ol>

      <h2>Tips for Beginners</h2>
      <ul>
        <li>You can add more conditions by adding more ranges and criteria</li>
        <li>Try changing the criteria to see different results</li>
      </ul>
    </div>
  );
}
