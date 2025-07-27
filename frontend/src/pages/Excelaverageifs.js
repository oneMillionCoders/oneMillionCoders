import React from "react";

export default function Excelaverageifs() {
  return (
    <div>
      <h1>Excel AVERAGEIFS Function</h1>
      <h2>What is the AVERAGEIFS Function?</h2>
      <p>AVERAGEIFS finds the average of numbers that meet two or more conditions. For example, you can find the average defense of Grass type Pokemon from Generation 1.</p>
      <h3>How to Use AVERAGEIFS</h3>
      <ol>
        <li>Click a cell (like H3).</li>
        <li>Type <b>=AVERAGEIFS(C2:C13, B2:B13, "Grass", D2:D13, 1)</b></li>
        <li>Press Enter.</li>
      </ol>
      <p>This gives you the average of C2:C13, but only for rows where B2:B13 is "Grass" and D2:D13 is 1.</p>
      <h4>Tip:</h4>
      <p>You can add more conditions by adding more ranges and criteria.</p>
    </div>
  );
}
