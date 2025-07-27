import React from "react";

export default function Excelaverage() {
  return (
    <div>
      <h1>Excel AVERAGE Function</h1>
      <h2>What is the AVERAGE Function?</h2>
      <p>The AVERAGE function finds the mean of numbers. It adds them up and divides by how many there are.</p>
      <h3>How to Use AVERAGE</h3>
      <ol>
        <li>Click a cell (like F2).</li>
        <li>Type <b>=AVERAGE(B2:E2)</b></li>
        <li>Press Enter.</li>
      </ol>
      <p>Now you have the average for that row. You can fill down to do the same for other rows.</p>
      <h4>Note:</h4>
      <p>AVERAGE ignores cells with text.</p>
    </div>
  );
}
