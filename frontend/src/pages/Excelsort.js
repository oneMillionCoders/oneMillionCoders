import React from "react";

export default function Excelsort() {
  return (
    <div>
      <h1>Excel Sort</h1>
      <h2>Sorting Data</h2>
      <p>Sorting lets you organize your data in order. You can sort numbers from smallest to largest (ascending) or largest to smallest (descending). You can also sort text from A to Z or Z to A.</p>
      <h3>How to Sort</h3>
      <ul>
        <li><b>Sort Ascending</b>: Smallest to largest, or A to Z.</li>
        <li><b>Sort Descending</b>: Largest to smallest, or Z to A.</li>
      </ul>
      <p>To sort a range with more than one column, select the whole range. Sorting just one column can break the relationship between columns.</p>
      <h3>Example: Sorting Text</h3>
      <ol>
        <li>Select A2:A21 (do not include the header A1).</li>
        <li>Open the Sort & Filter menu in the Ribbon.</li>
        <li>Click Sort Ascending.</li>
      </ol>
      <p>This sorts the names from A to Z. Try Sort Descending to see Z to A.</p>
      <h3>Example: Sorting Numbers</h3>
      <ol>
        <li>Select the range you want to sort (e.g., A2:A21).</li>
        <li>Open the Sort & Filter menu.</li>
        <li>Click Sort Ascending.</li>
      </ol>
      <p>This sorts the numbers from smallest to largest.</p>
      <h3>Important: Sorting Multiple Columns</h3>
      <p>If your data has more than one column (like names and scores), always select the whole range before sorting. Sorting just one column will mix up your data.</p>
      <h3>Non-Working Example</h3>
      <p>If you sort only one column in a range with related data, Excel will warn you. If you continue, the data will no longer match up correctly.</p>
      <h3>Sorting Multiple Columns</h3>
      <ol>
        <li>Select the whole range (e.g., A2:B21).</li>
        <li>Open the Sort & Filter menu.</li>
        <li>Click Sort Ascending.</li>
      </ol>
      <p>This keeps the relationship between columns.</p>
      <p>Sorting is a great way to organize your data for easier analysis!</p>
    </div>
  );
}
