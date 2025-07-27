import React from "react";

export default function Excelaverageif() {
  return (
    <div>
      <h1>Excel AVERAGEIF Function</h1>
      <h2>What is the AVERAGEIF Function?</h2>
      <p>AVERAGEIF finds the average of numbers that meet a condition you set. For example, you can find the average speed of all Grass type Pokemon.</p>
      <h3>How to Use AVERAGEIF</h3>
      <ol>
        <li>Click a cell (like F3).</li>
        <li>Type <b>=AVERAGEIF(B2:B10, "Grass", C2:C10)</b></li>
        <li>Press Enter.</li>
      </ol>
      <p>This gives you the average of C2:C10, but only for rows where B2:B10 is "Grass".</p>
      <h4>Tip:</h4>
      <p>If you want to use a cell for the criteria, use its address (like E3).</p>
    </div>
  );
}
