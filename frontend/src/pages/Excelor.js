import React from "react";

export default function Excelor() {
  return (
    <div>
      <h1>Excel OR Function Made Simple</h1>
      <h2>What is the OR Function?</h2>
      <p>The OR function checks if at least one condition is true. It helps you test multiple things at once.</p>

      <h2>Why Use OR?</h2>
      <ul>
        <li>Test if any condition is true</li>
        <li>Combine with IF for custom results</li>
        <li>Make your spreadsheet smarter</li>
      </ul>

      <h2>How to Use OR (Step-by-Step)</h2>
      <ol>
        <li>Click a cell where you want the result.</li>
        <li>Type <b>=OR(condition1, condition2, ...)</b></li>
        <li>List your conditions (like B2="Water", C2&gt;60).</li>
        <li>Press Enter.</li>
      </ol>

      <h3>Example: Use OR with IF</h3>
      <ol>
        <li>Type <b>=IF(OR(B2="Water", C2&gt;60), "Yes", "No")</b></li>
        <li>If either condition is true, you get "Yes". If not, you get "No".</li>
      </ol>

      <h2>Tips for Beginners</h2>
      <ul>
        <li>OR returns TRUE if any condition is true, FALSE if all are false</li>
        <li>Try changing the conditions to see different results</li>
      </ul>
    </div>
  );
}
