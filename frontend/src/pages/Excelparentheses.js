import React from "react";

export default function Excelparentheses() {
  return (
    <div>
      <h1>Excel Parentheses</h1>
      <h2>Parentheses</h2>
      <p>Parentheses <b>()</b> are used in Excel to control the order of calculations. Anything inside parentheses is calculated first.</p>
      <h3>How to Use Parentheses</h3>
      <p>Type parentheses by pressing <b>(</b> and <b>)</b> on your keyboard.</p>
      <h3>Examples</h3>
      <h4>No Parentheses</h4>
      <p>=10+5*2<br/>Result: 20 (because 5*2=10, then 10+10=20)</p>
      <h4>With Parentheses</h4>
      <p>=(10+5)*2<br/>Result: 30 (because 10+5=15, then 15*2=30)</p>
      <h4>Multiple Parentheses</h4>
      <p>=(10+5)+(2*4)+(4/2)<br/>Result: 17 (because 10+5=15, 2*4=8, 4/2=2, then 15+8+2=25)</p>
      <h4>Nesting Parentheses</h4>
      <p>Nested parentheses are like layers. Excel calculates the innermost layer first.</p>
      <p>=((2*2)+(3*4)+(5*5))*2<br/>First, 2*2=4, 3*4=12, 5*5=25. Add them: 4+12+25=41. Then multiply by 2: 41*2=82.</p>
      <h3>Summary</h3>
      <ul>
        <li>Parentheses change the order of operations.</li>
        <li>Excel always calculates inside parentheses first.</li>
        <li>You can use many parentheses, even inside each other.</li>
      </ul>
    </div>
  );
}
