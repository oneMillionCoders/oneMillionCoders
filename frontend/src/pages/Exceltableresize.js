import React from "react";

export default function Exceltableresize() {
  return (
    <div>
      <h1>Excel Table Resizing</h1>
      <h2>Resizing a Table</h2>
      <p>You can change the size of a table by using the resize command, dragging the corner, or adding new headers.</p>
      <h3>Resize Table Command</h3>
      <ol>
        <li>Select the table.</li>
        <li>Click the Table Design tab.</li>
        <li>Click Resize Table.</li>
        <li>Type the new range (e.g., A1:F20).</li>
        <li>Click OK.</li>
      </ol>
      <h3>Drag to Resize</h3>
      <ol>
        <li>Click and hold the bottom right corner of the table.</li>
        <li>Drag to select the new range.</li>
      </ol>
      <p>Dragging lets you make the table bigger or smaller. Cells outside the table are not included until you resize to include them.</p>
      <h3>Adding Columns</h3>
      <p>Type a new header next to the table and press Enter. The table will automatically expand to include the new column.</p>
    </div>
  );
}
