import React from "react";

export default function Excelconcat() {
  return (
    <div>
      <h1>Excel CONCAT Function</h1>
      <h2>What is the CONCAT Function?</h2>
      <p>CONCAT joins text or numbers from different cells into one cell. You can add spaces or other characters between them if you want.</p>
      <h3>How to Use CONCAT</h3>
      <ol>
        <li>Click a cell (like E2).</li>
        <li>Type <b>=CONCAT(A2, " ", A3)</b></li>
        <li>Press Enter.</li>
      </ol>
      <p>This puts the contents of A2 and A3 together, with a space in between.</p>
      <h4>Tip:</h4>
      <p>You can use any symbol or word as a separator by putting it in quotes.</p>
    </div>
  );
}
