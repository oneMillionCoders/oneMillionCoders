import React from "react";

export default function Excelsubtraction() {
  return (
    <div>
      <h1>Excel Subtraction Operator</h1>
      <h2>Subtraction Operator</h2>
      <p>The subtraction operator in Excel is the <b>-</b> symbol. You use it to subtract one number from another.</p>
      <h3>How to Subtract Cells</h3>
      <ol>
        <li>Select a cell and type (=)</li>
        <li>Select the number you want to subtract from (the minuend)</li>
        <li>Type (-)</li>
        <li>Select the number to subtract (the subtrahend)</li>
        <li>Press Enter</li>
      </ol>
      <p>You can subtract more cells by typing (-) between them.</p>
      <h3>Examples</h3>
      <h4>Subtracting Two Numbers Manually</h4>
      <ol>
        <li>Click cell A1 and type <b>=</b></li>
        <li>Type <b>100-50</b></li>
        <li>Press Enter</li>
      </ol>
      <p>Result: 50</p>
      <h4>Subtracting Two Cells</h4>
      <p>Type numbers in A1 and A2.</p>
      <ol>
        <li>Click cell A3 and type <b>=</b></li>
        <li>Click A1</li>
        <li>Type (-)</li>
        <li>Click A2</li>
        <li>Press Enter</li>
      </ol>
      <p>Result: A1 minus A2</p>
      <h4>Subtracting Many Cells</h4>
      <p>Type numbers in A1, A2, A3, A4, and A5.</p>
      <ol>
        <li>Click B1 and type <b>=</b></li>
        <li>Click A1</li>
        <li>Type (-)</li>
        <li>Click A2</li>
        <li>Type (-)</li>
        <li>Click A3</li>
        <li>Type (-)</li>
        <li>Click A4</li>
        <li>Type (-)</li>
        <li>Click A5</li>
        <li>Press Enter</li>
      </ol>
      <h4>Subtracting Using Absolute Reference</h4>
      <p>You can lock a cell with <b>$</b> so it doesn't change when you fill down.</p>
      <ol>
        <li>Type numbers in A1:A10 and put a number in B1 (e.g., 5)</li>
        <li>Click C1 and type <b>=</b></li>
        <li>Click A1</li>
        <li>Type (-)</li>
        <li>Click B1 and add <b>$</b> before the column and row (<b>$B$1</b>)</li>
        <li>Press Enter</li>
        <li>Fill C1:C10</li>
      </ol>
      <p>Now every cell in C subtracts the value in B1 from the value in A.</p>
    </div>
  );
}
