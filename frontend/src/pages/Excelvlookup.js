import React from "react";

export default function Excelvlookup() {
  return (
    <div>
      <h1>Excel VLOOKUP Function Made Simple</h1>
      <h2>What is the VLOOKUP Function?</h2>
      <p>The VLOOKUP function helps you find information in a table. It searches for a value in the first column and returns a value from another column in the same row.</p>

      <h2>Why Use VLOOKUP?</h2>
      <ul>
        <li>Find data quickly in large tables</li>
        <li>Match values and get related information</li>
        <li>Works for numbers and text</li>
      </ul>

      <h2>How to Use VLOOKUP (Step-by-Step)</h2>
      <ol>
        <li>Click a cell where you want the result.</li>
        <li>Type <b>=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])</b></li>
        <li>Replace <b>lookup_value</b> with what you want to search for (like H3).</li>
        <li>Replace <b>table_array</b> with the range of your table (like A2:E21).</li>
        <li>Replace <b>col_index_num</b> with the column number to return (like 2).</li>
        <li>Use TRUE for an approximate match, FALSE for an exact match.</li>
        <li>Press Enter.</li>
      </ol>

      <h2>Tips for Beginners</h2>
      <ul>
        <li>Column numbers start from the left (first column is 1)</li>
        <li>Try changing the lookup value to see different results</li>
      </ul>
    </div>
  );
}
