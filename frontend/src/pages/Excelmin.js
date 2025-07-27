import React from "react";

export default function Excelmin() {
  return (
    <div>
      <h1>Excel MIN Function Made Simple</h1>
      <h2>What is the MIN Function?</h2>
      <p>The MIN function finds the smallest number in a group of cells. It helps you quickly see the lowest value.</p>

      <h2>Why Use MIN?</h2>
      <ul>
        <li>Find the smallest number in a list</li>
        <li>Ignore text and only look at numbers</li>
        <li>Quickly spot the lowest value</li>
      </ul>

      <h2>How to Use MIN (Step-by-Step)</h2>
      <ol>
        <li>Click a cell where you want the result.</li>
        <li>Type <b>=MIN(range)</b> (for example, <b>=MIN(D2:D21)</b>).</li>
        <li>Press Enter.</li>
      </ol>

      <h2>Tips for Beginners</h2>
      <ul>
        <li>If you add text to the range, MIN ignores it</li>
        <li>Try changing the numbers to see the result update</li>
      </ul>
    </div>
  );
}
