import React from "react";

export default function Excelmax() {
  return (
    <div>
      <h1>Excel MAX Function Made Simple</h1>
      <h2>What is the MAX Function?</h2>
      <p>The MAX function finds the biggest number in a group of cells. It helps you quickly see the highest value.</p>

      <h2>Why Use MAX?</h2>
      <ul>
        <li>Find the largest number in a list</li>
        <li>Ignore text and only look at numbers</li>
        <li>Quickly spot the top value</li>
      </ul>

      <h2>How to Use MAX (Step-by-Step)</h2>
      <ol>
        <li>Click a cell where you want the result.</li>
        <li>Type <b>=MAX(range)</b> (for example, <b>=MAX(D2:D21)</b>).</li>
        <li>Press Enter.</li>
      </ol>

      <h2>Tips for Beginners</h2>
      <ul>
        <li>If you add text to the range, MAX ignores it</li>
        <li>Try changing the numbers to see the result update</li>
      </ul>
    </div>
  );
}
