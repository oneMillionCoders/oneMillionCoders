import React from "react";

export default function Excelmode() {
  return (
    <div>
      <h1>Excel MODE Function Made Simple</h1>
      <h2>What is the MODE Function?</h2>
      <p>The MODE function finds the number that appears most often in a group of cells. It helps you spot the most common value.</p>

      <h2>Why Use MODE?</h2>
      <ul>
        <li>Find the most frequent number in a list</li>
        <li>See which value is most common</li>
        <li>Works only with numbers</li>
      </ul>

      <h2>How to Use MODE (Step-by-Step)</h2>
      <ol>
        <li>Click a cell where you want the result.</li>
        <li>Type <b>=MODE.SNGL(range)</b> (for example, <b>=MODE.SNGL(B2:E7)</b>).</li>
        <li>Press Enter.</li>
      </ol>

      <h2>Tips for Beginners</h2>
      <ul>
        <li>MODE only works with numbers, not text</li>
        <li>Try changing the numbers to see the result update</li>
      </ul>
    </div>
  );
}
