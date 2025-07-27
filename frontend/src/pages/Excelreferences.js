import React from "react";

export default function Excelreferences() {
  return (
    <div>
      <h1>Excel Relative and Absolute References</h1>
      <h2>Relative and Absolute References</h2>
      <p>Cells in Excel have unique references, which is its location.</p>
      <p>References are used in formulas to do calculations, and the fill function can be used to continue formulas sidewards, downwards and upwards.</p>
      <p>Excel has two types of references:</p>
      <ul>
        <li>Relative references</li>
        <li>Absolute references</li>
      </ul>
      <p>Absolute reference is a choice we make. It is a command which tells Excel to lock a reference.</p>
      <p>The dollar sign ($) is used to make references absolute.</p>
      <p>Example of relative reference: <b>A1</b></p>
      <p>Example of absolute reference: <b>$A$1</b></p>
      <h3>Relative reference</h3>
      <p>References are relative by default, and are without dollar sign ($).</p>
      <p>The relative reference makes the cells reference free. It gives the fill function freedom to continue the order without restrictions.</p>
      <p>Let's have a look at a relative reference example, helping the Pokemon trainers to count their Pokeballs (B2:B7) and Great balls (C2:C7).</p>
      <img src="https://www.w3schools.com/excel/rel_ref1.png" alt="Excel relative reference example" style={{maxWidth: '100%'}} />
      <p>The result is: D2(5):</p>
      <p>Next, fill the range D2:D7:</p>
      <img src="https://www.w3schools.com/excel/rel_ref2.png" alt="Excel relative fill example" style={{maxWidth: '100%'}} />
      <br/>          
      <br/><img src="https://www.w3schools.com/excel/rel_ref2.png" alt="Excel relative fill example" style={{maxWidth: '100%'}} />

      <p>The references being relative allows the fill function to continue the formula for rows downwards.</p>
      <p>Have a look at the formulas in D2:D7. Notice that it calculates the next row as you fill.</p>
      <h3>A Non-Working Example</h3>
      <p>Let's try an example that will not work.</p>
      <p>Fill D2:G2, filling to the right instead of downwards. Resulting in strange numbers:</p>
      <img src="https://www.w3schools.com/excel/rel_ref6.png" alt="Excel non-working example" style={{maxWidth: '100%'}} />
      <p>Have a look at the formulas.</p>
            <img src="https://www.w3schools.com/excel/rel_ref7.png" alt="Excel non-working example" style={{maxWidth: '100%'}} />

      <p>It assumes that we are calculating sidewards and not downwards.</p>
      <p>The numbers that we want to calculate need to be in the same direction as we fill.</p>
     
     
      <h2>Excel Absolute References</h2>
      <h3>Absolute References</h3>
      <p>Absolute reference is when a reference has the dollar sign ($).</p>
      <p>It locks a reference in the formula.</p>
      <p>Add $ to the formula to use absolute references.</p>
      <p>The dollar sign has three different states:</p>
      <ul>
        <li>Absolute for column and row. The reference is absolutely locked.<br/>Example =$A$1</li>
        <li>Absolute for the column. The reference is locked to that column. The row remains relative.<br/>Example =$A1</li>
        <li>Absolute for the row. The reference is locked to that row. The column remains relative.<br/>Example =A$1</li>
      </ul>
      <p>Let's have a look at an example helping the Pokemon trainers to calculate prices for Pokeballs</p>
      <img src="https://www.w3schools.com/excel/abs_ref1.png" alt="Excel absolute reference example" style={{maxWidth: '100%'}} />
      <br/>

      <p><b>Data explained</b></p>
      <ul>
        <li>There are 6 trainers: Iva, Liam, Adora, Jenny, Iben and Kasper.</li>
        <li>They have different amount of Pokeballs each in their shop cart</li>
        <li>The price per Pokeball is 2 coins</li>
        <li>Help them to calculate the prices for the Pokeballs.</li>
      </ul>
      <p>The price's reference is B11, we do not want the fill function to change this, so we lock it.</p>
      <p>The reference is absolutely locked by using the formula <b>$B$11</b>.</p>
      <h3>How to do it, step by step:</h3>
      <ol>
        <li>Type C2(=)</li>
        <li>Select B11</li>
        <li>Type ($) before the B and 11 ($B$11)</li>
        <li>Type (*)</li>
        <li>Select B2</li>
        <li>Hit enter</li>
        <li>Auto fill C2:C7</li>
      </ol>
            <img src="https://www.w3schools.com/excel/abs_ref1.png" alt="Excel absolute reference example" style={{maxWidth: '100%'}} />
<br/>
<br/>
      <img src="https://www.w3schools.com/excel/abs_ref1.png" alt="Excel absolute reference example" style={{maxWidth: '100%'}} />
<br/>
<br/>
      <img src="https://www.w3schools.com/excel/abs_ref1.png" alt="Excel absolute reference example" style={{maxWidth: '100%'}} />
<br/>
<br/>
      <img src="https://www.w3schools.com/excel/abs_ref1.png" alt="Excel absolute reference example" style={{maxWidth: '100%'}} />
<br/>
<br/>
      <img src="https://www.w3schools.com/excel/abs_ref1.png" alt="Excel absolute reference example" style={{maxWidth: '100%'}} />
<br/>
<br/>
      <p>Congratulations! You successfully calculated the prices for the Pokeballs using an absolute reference.</p>
    </div>
  );
}
