import React from "react";

export default function Excelmedian() {
  return (
    <div>
      <h1>Excel MEDIAN Function Made Simple</h1>
      <h2>What is the MEDIAN Function?</h2>
      <p>The MEDIAN function finds the middle value in a group of numbers. It helps you see where the center of your data is.</p>

      <h2>Why Use MEDIAN?</h2>
      <ul>
        <li>Find the middle value in a list</li>
        <li>Works even if numbers are not sorted</li>
        <li>Ignores text and only looks at numbers</li>
      </ul>

      <h2>How to Use MEDIAN (Step-by-Step)</h2>
      <ol>
        <li>Click a cell where you want the result.</li>
        <li>Type <b>=MEDIAN(range)</b> (for example, <b>=MEDIAN(A2:G2)</b>).</li>
        <li>Press Enter.</li>
      </ol>

      <h2>Tips for Beginners</h2>
      <ul>
        <li>MEDIAN works even if the numbers are not sorted</li>
        <li>Try changing the numbers to see the result update</li>
      </ul>
    </div>
  );
}
