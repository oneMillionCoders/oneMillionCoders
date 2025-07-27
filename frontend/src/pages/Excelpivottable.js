import React from "react";

export default function Excelpivottable() {
  return (
    <div>
      <h1>Excel PivotTable Made Easy</h1>
      <h2>What is a PivotTable?</h2>
      <p>A PivotTable is a special tool in Excel that helps you quickly organize, summarize, and explore large sets of data. It makes it easy to spot patterns and answer questions, even if your data is huge.</p>

      <h2>Why Use a PivotTable?</h2>
      <ul>
        <li>Group and sort your data easily</li>
        <li>Calculate totals, averages, and more</li>
        <li>Filter to see only what you need</li>
        <li>Change how your table looks with just a few clicks</li>
      </ul>

      <h2>How Does a PivotTable Work?</h2>
      <p>PivotTables have four main parts:</p>
      <ol>
        <li><b>Columns:</b> These go up and down. Each column has a name at the top (the header) that tells you what’s inside.</li>
        <li><b>Rows:</b> These go side to side. Each row is a single record, like a Pokemon and its stats.</li>
        <li><b>Filters:</b> Filters let you choose what data to show. For example, you can show only certain types or generations.</li>
        <li><b>Values:</b> These are the numbers you want to calculate, like sums or averages.</li>
      </ol>

      <h2>Step-by-Step: Using a PivotTable</h2>
      <ol>
        <li>Make sure your data is in a table (rows and columns).</li>
        <li>Go to the <b>Insert</b> tab and click <b>PivotTable</b>.</li>
        <li>Choose the data you want to use and where to place your PivotTable.</li>
        <li>Use the PivotTable Fields panel to drag fields into <b>Rows</b>, <b>Columns</b>, <b>Values</b>, and <b>Filters</b>.</li>
        <li>Check or uncheck boxes to show or hide data.</li>
        <li>Try dragging fields around to see how your table changes!</li>
      </ol>

      <h2>Tips for Beginners</h2>
      <ul>
        <li>Start simple: Try grouping by one column and adding up values.</li>
        <li>Use filters to focus on just the data you need.</li>
        <li>Don’t be afraid to experiment—PivotTables are flexible!</li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>PivotTables help you organize and analyze data fast.</li>
        <li>You can group, filter, and calculate with just a few clicks.</li>
        <li>Practice by dragging fields and changing settings to see what happens.</li>
      </ul>
    </div>
  );
}
