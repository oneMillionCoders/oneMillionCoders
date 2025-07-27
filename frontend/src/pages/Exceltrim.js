import React from "react";

export default function Exceltrim() {
  return (
    <div>
      <h1>Excel TRIM Function Made Simple</h1>
      <h2>What is the TRIM Function?</h2>
      <p>The TRIM function removes extra spaces from text, leaving only single spaces between words. It helps tidy up messy data.</p>

      <h2>Why Use TRIM?</h2>
      <ul>
        <li>Clean up text with too many spaces</li>
        <li>Make your data easier to read</li>
        <li>Works for single cells or ranges</li>
      </ul>

      <h2>How to Use TRIM (Step-by-Step)</h2>
      <ol>
        <li>Click a cell where you want the result.</li>
        <li>Type <b>=TRIM(cell)</b> (for example, <b>=TRIM(A2)</b> or <b>=TRIM(A2:C21)</b>).</li>
        <li>Press Enter.</li>
      </ol>

      <h2>Tips for Beginners</h2>
      <ul>
        <li>TRIM is great for cleaning up data with weird spacing</li>
        <li>Try using TRIM on different cells to see the effect</li>
      </ul>
    </div>
  );
}
