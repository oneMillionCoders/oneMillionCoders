import React from "react";

export default function Excelcounta() {
  return (
    <div>
      <h1>Excel COUNTA Function</h1>
      <h2>What is the COUNTA Function?</h2>
      <p>COUNTA counts all cells in a range that have something in them, whether it's a number or text.</p>
      <h3>How to Use COUNTA</h3>
      <ol>
        <li>Click a cell (like A23).</li>
        <li>Type <b>=COUNTA(A2:A21)</b></li>
        <li>Press Enter.</li>
      </ol>
      <p>This counts all cells in A2:A21 that are not empty.</p>
      <h4>Tip:</h4>
      <p>COUNTA works for both numbers and words.</p>
    </div>
  );
}
