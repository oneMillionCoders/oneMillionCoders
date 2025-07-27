import React from "react";

export default function Excelif() {
  return (
    <div>
      <h1>Excel IF Function Made Simple</h1>
      <h2>What is the IF Function?</h2>
      <p>The IF function helps you make decisions in Excel. It checks if something is true or false, and then shows a result based on that.</p>

      <h2>Why Use IF?</h2>
      <ul>
        <li>Show "Yes" or "No" based on a condition</li>
        <li>Check if a value is bigger, smaller, or equal</li>
        <li>Make your spreadsheet smarter</li>
      </ul>

      <h2>How to Use IF (Step-by-Step)</h2>
      <ol>
        <li>Click a cell where you want the result.</li>
        <li>Type <b>=IF(condition, value_if_true, value_if_false)</b></li>
        <li>Replace <b>condition</b> with what you want to check (like B2="Grass" or C2&gt;500).</li>
        <li>Press Enter.</li>
      </ol>

      <h3>Example 1: Check if Type is Grass</h3>
      <ol>
        <li>Type <b>=IF(B2="Grass", "Yes", "No")</b></li>
        <li>If B2 is "Grass", you get "Yes". If not, you get "No".</li>
      </ol>

      <h3>Example 2: Check if Total is Greater Than 500</h3>
      <ol>
        <li>Type <b>=IF(C2&gt;500, "Yes", "No")</b></li>
        <li>If C2 is more than 500, you get "Yes". If not, you get "No".</li>
      </ol>

      <h2>Tips for Beginners</h2>
      <ul>
        <li>Text values need quotes, like "Grass"</li>
        <li>You can copy the formula down to check each row</li>
        <li>Try changing the condition to see different results</li>
      </ul>
    </div>
  );
}
