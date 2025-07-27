import React from "react";

export default function Exceladdition() {
  return (
    <div>
      <h1>Excel Addition Operator</h1>
      <h2>Addition Operator</h2>
      <p>The addition operator in Excel is the <b>+</b> symbol. You use it to add numbers together, just like in regular math.</p>
      <p>There are two main ways to add in Excel: using the <b>+</b> symbol directly in a formula, or by using the <b>SUM</b> function.</p>
      <h3>How to Add Cells</h3>
      <ol>
        <li>Select a cell and type (=)</li>
        <li>Select a cell</li>
        <li>Type (+)</li>
        <li>Select another cell</li>
        <li>Press Enter</li>
      </ol>
      <p>You can keep adding more cells by typing (+) between them.</p>
      <h3>Examples</h3>
      <h4>Adding Two Numbers Manually</h4>
      <ol>
        <li>Click cell A1 and type <b>=</b></li>
        <li>Type <b>5+5</b></li>
        <li>Press Enter</li>
      </ol>
      <p>Result: 10</p>
      <h4>Adding Two Cells</h4>
      <p>First, enter some numbers in two cells.</p>
      <ol>
        <li>Click cell A1 and type a number (e.g., 10)</li>
        <li>Click cell A2 and type another number (e.g., 20)</li>
      </ol>
      <p>Now add them:</p>
      <ol>
        <li>Click cell B1 and type <b>=</b></li>
        <li>Click A1</li>
        <li>Type (+)</li>
        <li>Click A2</li>
        <li>Press Enter</li>
      </ol>
      <p>Result: 30</p>
      <h4>Adding Several Cells</h4>
      <p>Type numbers in A1, A2, A3, A4, and A5.</p>
      <ol>
        <li>Click cell B1 and type <b>=</b></li>
        <li>Click A1</li>
        <li>Type (+)</li>
        <li>Click A2</li>
        <li>Type (+)</li>
        <li>Click A3</li>
        <li>Type (+)</li>
        <li>Click A4</li>
        <li>Type (+)</li>
        <li>Click A5</li>
        <li>Press Enter</li>
      </ol>
      <p>Now you have added five cells together!</p>
      <h4>Adding with SUM</h4>
      <p>Instead of typing lots of plus signs, you can use the SUM function.</p>
      <ol>
        <li>Click cell B1 and type <b>=SUM</b></li>
        <li>Double-click SUM in the menu</li>
        <li>Select the range A1:A5</li>
        <li>Press Enter</li>
      </ol>
      <p>SUM is a quick way to add many numbers at once.</p>
      <h4>Adding Using Absolute Reference</h4>
      <p>You can lock a cell using the <b>$</b> sign, so it doesn't change when you fill down.</p>
      <ol>
        <li>Type numbers in A1:A10 and put a number in B1 (e.g., 5)</li>
        <li>Click C1 and type <b>=</b></li>
        <li>Click B1 and add <b>$</b> before the column and row (<b>$B$1</b>)</li>
        <li>Type (+)</li>
        <li>Click A1</li>
        <li>Press Enter</li>
        <li>Fill C1:C10</li>
      </ol>
      <p>Now every cell in C uses the value from B1 plus the value from A.</p>
    </div>
  );
}
