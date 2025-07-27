import React from "react";

export default function Excelfilter() {
  return (
    <div>
      <h1>Excel Filter</h1>
      <h2>Filtering Data</h2>
      <p>Filters help you show only the data you want to see. You can use filters to hide or sort data, making it easier to analyze.</p>
      <h3>How to Apply a Filter</h3>
      <ol>
        <li>Select the range you want to filter (make sure you have a header row).</li>
        <li>Click the Sort & Filter menu in the Ribbon.</li>
        <li>Click the Filter command.</li>
      </ol>
      <p>Filter buttons will appear in the header row. Click these to open filter options for each column.</p>
      <h3>Example: Filtering by Category</h3>
      <ol>
        <li>Click the filter button in the column you want to filter (e.g., Type 1).</li>
        <li>Uncheck all items except the one you want to see (e.g., Bug).</li>
        <li>Click OK.</li>
      </ol>
      <p>Now only the rows with your chosen category are shown. The others are hidden, not deleted.</p>
      <h3>Filtering by Multiple Columns</h3>
      <ol>
        <li>Apply a filter to another column (e.g., Type 2).</li>
        <li>Uncheck all items except the one you want (e.g., Poison).</li>
        <li>Click OK.</li>
      </ol>
      <p>Now you see only the rows that match both filters.</p>
      <h3>Tips</h3>
      <ul>
        <li>Always have a header row before applying filters.</li>
        <li>Filters can be turned off to show all data again.</li>
        <li>Filtering does not delete data, it just hides it.</li>
      </ul>
    </div>
  );
}
