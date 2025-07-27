import React from "react";

export default function Excelcount() {
  return (
    <div>
      <h1>Excel COUNT Function</h1>
      <h2>What is the COUNT Function?</h2>
      <p>COUNT tells you how many cells in a range have numbers. It ignores cells with text.</p>
      <h3>How to Use COUNT</h3>
      <ol>
        <li>Click a cell (like D23).</li>
        <li>Type <b>=COUNT(D2:D21)</b></li>
        <li>Press Enter.</li>
      </ol>
      <p>This counts how many cells in D2:D21 have numbers.</p>
      <h4>Tip:</h4>
      <p>If you use COUNT on a range with only text, it will return 0.</p>
    </div>
  );
}
