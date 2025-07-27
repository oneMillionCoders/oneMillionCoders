import React from "react";

export default function Exceltable() {
  return (
    <div>
      <h1>Excel Tables</h1>
      <h2>What is a Table?</h2>
      <p>Tables help you organize and structure your data. When you turn a range into a table, it becomes easier to sort, filter, and format your data.</p>
      <h3>How to Make a Table</h3>
      <ol>
        <li>Select the range you want to turn into a table (e.g., A1:F22).</li>
        <li>Click Insert, then Table in the Ribbon.</li>
        <li>Click OK.</li>
      </ol>
      <p>If your range already has headers, make sure to check the "My table has headers" option.</p>
      <h3>Table Features</h3>
      <ul>
        <li>Sort & Filter</li>
        <li>Formatting</li>
        <li>AutoFilling</li>
      </ul>
      <p>Tables make it easier to prepare data for charts and pivot tables.</p>
      <h3>Converting a Table Back to a Range</h3>
      <ol>
        <li>Select a cell in the table.</li>
        <li>Click the Table Design tab.</li>
        <li>Click Convert to Range.</li>
      </ol>
      <p>The table is now a normal range, but keeps its formatting.</p>
    </div>
  );
}
