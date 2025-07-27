import React from "react";

export default function Excelcountif() {
  return (
    <div>
      <h1>Excel COUNTIF Function</h1>
      <h2>What is the COUNTIF Function?</h2>
      <p>COUNTIF counts how many cells in a range match a condition you set. For example, you can count how many times "Water" appears in a list.</p>
      <h3>How to Use COUNTIF</h3>
      <ol>
        <li>Click a cell (like G6).</li>
        <li>Type <b>=COUNTIF(B2:B21, "Water")</b></li>
        <li>Press Enter.</li>
      </ol>
      <p>This counts how many times "Water" appears in B2:B21.</p>
      <h4>Tip:</h4>
      <p>Use dollar signs ($) to lock the range if you want to fill the formula down.</p>
    </div>
  );
}
