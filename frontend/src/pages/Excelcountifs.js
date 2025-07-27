import React from "react";

export default function Excelcountifs() {
  return (
    <div>
      <h1>Excel COUNTIFS Function</h1>
      <h2>What is the COUNTIFS Function?</h2>
      <p>COUNTIFS counts how many cells meet two or more conditions. For example, you can count how many Water type Pokemon are from Generation 1.</p>
      <h3>How to Use COUNTIFS</h3>
      <ol>
        <li>Click a cell (like G3).</li>
        <li>Type <b>=COUNTIFS(B2:B759, "Water", C2:C759, 1)</b></li>
        <li>Press Enter.</li>
      </ol>
      <p>This counts how many rows have "Water" in B2:B759 and 1 in C2:C759.</p>
      <h4>Tip:</h4>
      <p>You can add more conditions by adding more ranges and criteria.</p>
    </div>
  );
}
