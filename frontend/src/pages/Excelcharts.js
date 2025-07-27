import React from "react";

export default function Excelcharts() {
  return (
    <div>
      <h1>Excel Charts</h1>
      <h2>What are Charts?</h2>
      <p>Charts are visual tools that help you understand your data. They turn numbers into pictures, making it easier to see patterns and compare values.</p>
      <h3>Common Types of Charts</h3>
      <ul>
        <li>Pie chart</li>
        <li>Column chart</li>
        <li>Line chart</li>
      </ul>
      <p>Different charts are good for different kinds of data. For example, use a pie chart to show parts of a whole, or a line chart to show changes over time.</p>
      <h3>How to Make a Chart</h3>
      <ol>
        <li>Select the range you want to chart (for example, A1:A8).</li>
        <li>Click the <b>Insert</b> menu, then choose the chart type you want (like Line or Column).</li>
        <li>Pick the style you like.</li>
      </ol>
      <p>Excel will create a chart based on your data. You can move or resize the chart as needed.</p>
      <h3>Example: Comparing Data</h3>
      <ol>
        <li>Select the range A1:G4 (for example, stats for Charmander, Squirtle, and Bulbasaur).</li>
        <li>Click <b>Insert</b> &gt; <b>Column Chart</b> &gt; <b>Clustered Column</b>.</li>
      </ol>
      <p>The chart will show a visual comparison of the stats for each Pokemon.</p>
      <h3>Tips</h3>
      <ul>
        <li>You can change the chart title by clicking on it.</li>
        <li>Try different chart types to see which one works best for your data.</li>
      </ul>
    </div>
  );
}
