import React from "react";

export default function Excelfunctions() {
  return (
    <div>
      <h1>Excel Functions</h1>
      <h2>Functions</h2>
      <p>Excel has many built-in formulas called functions. Functions help you do things quickly, like add, count, or find averages.</p>
      <p>To use a function, type <b>=</b> and then the function name. For example: <b>=SUM</b></p>
      <p>After the function name, you put the range of cells you want to use inside parentheses. For example: <b>=SUM(A1:A5)</b></p>
      <h3>Common Excel Functions</h3>
      <table className="table table-bordered table-sm" style={{maxWidth: 600}}>
        <thead>
          <tr>
            <th>Function</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>=AND</td><td>Checks if two or more things are true</td></tr>
          <tr><td>=AVERAGE</td><td>Finds the average (mean) of numbers</td></tr>
          <tr><td>=AVERAGEIF</td><td>Finds the average if a condition is true</td></tr>
          <tr><td>=AVERAGEIFS</td><td>Finds the average if several conditions are true</td></tr>
          <tr><td>=CONCAT</td><td>Joins text from different cells</td></tr>
          <tr><td>=COUNT</td><td>Counts how many cells have numbers</td></tr>
          <tr><td>=COUNTA</td><td>Counts all cells that are not empty</td></tr>
          <tr><td>=COUNTBLANK</td><td>Counts empty cells</td></tr>
          <tr><td>=COUNTIF</td><td>Counts cells that meet a condition</td></tr>
          <tr><td>=COUNTIFS</td><td>Counts cells that meet several conditions</td></tr>
          <tr><td>=IF</td><td>Shows one thing if true, another if false</td></tr>
          <tr><td>=IFS</td><td>Checks several conditions and returns a value for the first true one</td></tr>
          <tr><td>=LEFT</td><td>Gets text from the left side of a cell</td></tr>
          <tr><td>=LOWER</td><td>Makes text lowercase</td></tr>
          <tr><td>=MAX</td><td>Finds the largest number</td></tr>
          <tr><td>=MEDIAN</td><td>Finds the middle number</td></tr>
          <tr><td>=MIN</td><td>Finds the smallest number</td></tr>
          <tr><td>=MODE</td><td>Finds the number that appears most</td></tr>
          <tr><td>=NPV</td><td>Calculates Net Present Value</td></tr>
          <tr><td>=OR</td><td>Checks if any of the conditions are true</td></tr>
          <tr><td>=RAND</td><td>Gives a random number</td></tr>
          <tr><td>=RIGHT</td><td>Gets text from the right side of a cell</td></tr>
          <tr><td>=STDEV.P</td><td>Standard deviation for a whole group</td></tr>
          <tr><td>=STDEV.S</td><td>Standard deviation for a sample</td></tr>
          <tr><td>=SUM</td><td>Adds up numbers</td></tr>
          <tr><td>=SUMIF</td><td>Adds numbers if a condition is true</td></tr>
          <tr><td>=SUMIFS</td><td>Adds numbers if several conditions are true</td></tr>
          <tr><td>=TRIM</td><td>Removes extra spaces</td></tr>
          <tr><td>=VLOOKUP</td><td>Looks for a value in a table</td></tr>
          <tr><td>=XOR</td><td>Checks if only one of the conditions is true</td></tr>
        </tbody>
      </table>
      <h3>Summary</h3>
      <ul>
        <li>Functions make work in Excel faster and easier.</li>
        <li>Type <b>=</b> and the function name to use a function.</li>
        <li>Put the range you want to use inside parentheses.</li>
      </ul>
    </div>
  );
}
