import React from "react";

export default function Excelconditionalformatting() {
  return (
    <div>
      <h1>Excel Conditional Formatting</h1>
      <h2>What is Conditional Formatting?</h2>
      <p>Conditional formatting lets you change how cells look based on rules you set. For example, you can highlight numbers that are too high or too low, or use colors to show which values are biggest or smallest.</p>
      <h3>How to Use Conditional Formatting</h3>
      <ol>
        <li>Select the range you want to format (for example, C2:C9).</li>
        <li>Click the <b>Conditional Formatting</b> button in the Home menu on the ribbon.</li>
        <li>Pick a formatting option, like Color Scales, Data Bars, or Icon Sets.</li>
        <li>Choose the style you want.</li>
      </ol>
      <p>Excel will change the appearance of your cells based on the rules you picked.</p>
      <h3>Color Scales</h3>
      <p>Color scales use different colors to show which values are high or low. For example, you can use a green-yellow-red scale, where green is the highest value and red is the lowest.</p>
      <h4>How to Apply a Color Scale</h4>
      <ol>
        <li>Select the range you want to format (like C2:C9).</li>
        <li>Click <b>Conditional Formatting</b> &gt; <b>Color Scales</b>.</li>
        <li>Pick a color scale, such as Green-Yellow-Red.</li>
      </ol>
      <p>Now, the highest values are green and the lowest are red, with other values in between.</p>
      <h3>Data Bars</h3>
      <p>Data bars add colored bars to your cells to show how big each value is compared to the others. The biggest value fills the cell, and smaller values have shorter bars.</p>
      <h4>How to Apply Data Bars</h4>
      <ol>
        <li>Select the range you want to format (like C2:C10).</li>
        <li>Click <b>Conditional Formatting</b> &gt; <b>Data Bars</b>.</li>
        <li>Pick a color, like Green Data Bars.</li>
      </ol>
      <p>Now, each cell has a bar showing its value compared to the rest.</p>
      <h3>Icon Sets</h3>
      <p>Icon sets add icons (like traffic lights or arrows) to your cells to show which values are high, medium, or low.</p>
      <h4>How to Apply Icon Sets</h4>
      <ol>
        <li>Select the range you want to format (like C2:C10).</li>
        <li>Click <b>Conditional Formatting</b> &gt; <b>Icon Sets</b>.</li>
        <li>Pick an icon set, like 3 Traffic Lights.</li>
      </ol>
      <p>Now, each cell has an icon showing if its value is high, medium, or low.</p>
      <h3>Managing and Removing Rules</h3>
      <p>You can remove or change conditional formatting rules using the <b>Manage Rules</b> or <b>Clear Rules</b> options in the Conditional Formatting menu.</p>
      <h4>How to Remove a Rule</h4>
      <ol>
        <li>Select the range with the rule.</li>
        <li>Click <b>Conditional Formatting</b> &gt; <b>Manage Rules</b>.</li>
        <li>Click the trash can icon to delete a rule.</li>
      </ol>
      <p>Conditional formatting helps you quickly spot important data in your spreadsheet!</p>
    </div>
  );
}
