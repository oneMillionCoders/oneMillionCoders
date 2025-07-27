import React from "react";

export default function Excelmultiplication() {
  return (
    <div>
      <h1>Excel Multiplication Operator</h1>
      <h2>Multiplication Operator</h2>
      <p>The multiplication operator in Excel is the <b>*</b> symbol. You use it to multiply numbers together.</p>
      <h3>How to Multiply Cells</h3>
      <ol>
        <li>Select a cell and type (=)</li>
        <li>Select a cell</li>
        <li>Type (*)</li>
        <li>Select another cell</li>
        <li>Press Enter</li>
      </ol>
      <p>You can multiply more cells by typing (*) between them.</p>
      <h3>Examples</h3>
      <h4>Multiplying Numbers Manually</h4>
      <ol>
        <li>Click cell A1 and type <b>=</b></li>
        <li>Type <b>2*2</b></li>
        <li>Press Enter</li>
      </ol>
      <p>Result: 4</p>
      <h4>Multiplying Two Cells</h4>
      <p>Type numbers in A1 and A2.</p>
      <ol>
        <li>Click A3 and type <b>=</b></li>
        <li>Click A1</li>
        <li>Type (*)</li>
        <li>Click A2</li>
        <li>Press Enter</li>
      </ol>
      <h4>Multiplying Using Absolute Reference</h4>
      <p>You can lock a cell with <b>$</b> so it doesn't change when you fill down.</p>
      <ol>
        <li>Type numbers in A1:A10 and put a number in B1 (e.g., 5)</li>
        <li>Click C1 and type <b>=</b></li>
        <li>Click B1 and add <b>$</b> before the column and row (<b>$B$1</b>)</li>
        <li>Type (*)</li>
        <li>Click A1</li>
        <li>Press Enter</li>
        <li>Fill C1:C10</li>
      </ol>
      <p>Now every cell in C multiplies the value in B1 by the value in A.</p>
    </div>
  );
}
