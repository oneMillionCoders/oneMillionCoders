import React from "react";

export default function Excelifs() {
  return (
    <div>
      <h1>Excel IFS Function Made Simple</h1>
      <h2>What is the IFS Function?</h2>
      <p>The IFS function lets you check many conditions in order. It shows the result for the first condition that is true.</p>

      <h2>Why Use IFS?</h2>
      <ul>
        <li>Test several things at once</li>
        <li>Show different results for different conditions</li>
        <li>Make your spreadsheet smarter</li>
      </ul>

      <h2>How to Use IFS (Step-by-Step)</h2>
      <ol>
        <li>Click a cell where you want the result.</li>
        <li>Type <b>=IFS(condition1, value1, condition2, value2, ...)</b></li>
        <li>List your conditions and what to show if each is true.</li>
        <li>Press Enter.</li>
      </ol>

      <h3>Example: Categorize Speed</h3>
      <ol>
        <li>Type <b>=IFS(C2&gt;90, "Fast", C2&gt;50, "Normal", C2&lt;=50, "Slow")</b></li>
        <li>If C2 is over 90, you get "Fast". If over 50, you get "Normal". If 50 or less, you get "Slow".</li>
      </ol>

      <h2>Tips for Beginners</h2>
      <ul>
        <li>IFS checks each condition in order and stops at the first one that is true</li>
        <li>Try changing the conditions to see different results</li>
      </ul>
    </div>
  );
}
