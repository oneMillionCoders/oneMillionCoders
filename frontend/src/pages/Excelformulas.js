import React from "react";

export default function Excelformulas() {
  return (
    <div>
      <h1>Excel Formulas</h1>
      <h2>Formulas</h2>
      <p>A formula in Excel is used to do mathematical calculations. Formulas always start with the equal sign (=) typed in the cell, followed by your calculation.</p>
      <p>Formulas can be used for calculations such as:</p>
      <pre>
<p>=1+1</p>
<p>=2*2</p>
<p>=4/2=2</p>
      </pre>
      <p>It can also be used to calculate values using cells as input.</p>
      <p>Let's have a look at an example.</p>
      <p>Type or copy the following values:</p>
      <img src="https://www.w3schools.com/excel/formulas.png" alt="Excel formula example 1" style={{maxWidth: '100%'}} />
      <p>Now we want to do a calculation with those values.</p>
      <h3>Step by step:</h3>
      <ol>
        <li>Select C1 and type (=)</li>
        <li>Left click A1</li>
        <li>Type (+)</li>
        <li>Left click A2</li>
        <li>Press enter</li>
      </ol>
      <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/formulas1.png" alt="Redo Button" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
        <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/formulas2.png" alt="Redo Button" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
      <p>You got it! You have successfully calculated A1(2) + A2(4) = C1(6).</p>
      <p><b>Note:</b> Using cells to make calculations is an important part of Excel and you will use this a lot as you learn.</p>
      <p>Lets change from addition to multiplication, by replacing the (+) with a (*). It should now be =A1*A2, press enter to see what happens.</p>
      <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/formulas3.png" alt="Redo Button" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
      <p>You got C1(8), right? Well done!</p>
      <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/formulas4.png" alt="Redo Button" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
      <p>Excel is great in this way. It allows you to add values to cells and make you do calculations on them.</p>
      <p>Now, try to change the multiplication (*) to subtraction (-) and dividing (/).</p>
      <p>Delete all values in the sheet after you have tried the different combinations.</p>
      <h2>Pokeball Counting Example</h2>
      <p>Let's add new data for the next example, where we will help the Pokemon trainers to count their Pokeballs.</p>
      <p>Type or copy the following values:</p>
      <div><img src="https://www.w3schools.com/excel/formulas_pokeballs.png" alt="Excel formula example 2" style={{maxWidth: '100%'}} /></div>

      {/* Add one line space for visual separation */}
      <br />

      <button
        className="btn btn-outline-secondary mb-3"
        onClick={() => {
          const sampleData = [
            ['Trainers','Pokeball','Great Balls','Ultra Balls'],
            ['Iva',2,3,1],
            ['Liam',5,5,2],
            ['Adora',10,2,3],
          ];
          const text = sampleData.map(row => row.join('\t')).join('\n');
          navigator.clipboard.writeText(text)
            .then(() => alert("Values copied! Paste directly into Excel."))
            .catch(err => alert("Failed to copy: " + err));
        }}
      >
        📋 Copy Table Values
      </button>
      <p><b>The data explained:</b></p>
      <ul>
        <li>Column A: Pokemon Trainers</li>
        <li>Row 1: Types of Pokeballs</li>
        <li>Range B2:D4: Amount of Pokeballs, Great balls and Ultra balls</li>
      </ul>
      <p>Note: It is important to practice reading data to understand its context. In this example you should focus on the trainers and their Pokeballs, which have three different types: Pokeball, Great ball and Ultra ball.</p>
      <p>Let's help Iva to count her Pokeballs. You find Iva in A2(Iva). The values in row 2 B2(2), C2(3), D2(1) belong to her.</p>
      <h3>Count the Pokeballs, step by step:</h3>
      <ol>
        <li>Select cell E2 and type (=)</li>
        <li>Left click B2</li>
        <li>Type (+)</li>
        <li>Left click C2</li>
        <li>Type (+)</li>
        <li>Left click D2</li>
        <li>Hit enter</li>
      </ol>
      <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/formulas_pokeballs2.png" alt="Redo Button" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
        <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/formulas_pokeballs3.png" alt="Redo Button" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
      <p>Did you get the value E2(6)? Good job! You have helped Iva to count her Pokeballs.</p>
      <p>Now, let's help Liam and Adora with counting theirs.</p>
      <p>Do you remember the fill function that we learned about earlier? It can be used to continue calculations sidewards, downwards and upwards. Let's try it!</p>
      <h3>Lets use the fill function to continue the formula, step by step:</h3>
      <ol>
        <li>Select E2</li>
        <li>Fill E2:E4</li>
      </ol>
      <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/formulas_pokeballs4.png" alt="Redo Button" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
      <p>That is cool, right? The fill function continued the calculation that you used for Iva and was able to understand that you wanted to count the cells in the next rows as well.</p>
      <p>Now we have counted the Pokeballs for all three; Iva(6), Liam(12) and Adora(15).</p>
      <h3>Let's see how many Pokeballs Iva, Liam and Adora have in total.</h3>
      <p>The total is called SUM in Excel.</p>
      <p>There are two ways to calculate the SUM.</p>
      <ul>
        <li>Adding cells</li>
        <li>SUM function</li>
      </ul>
      <p>Excel has many pre-made functions available for you to use. The SUM function is one of the most used ones. You will learn more about functions in a later chapter.</p>
      <p>Let's try both approaches.</p>
      <p><b>Note:</b> You can navigate to the cells with your keyboard arrows instead of left clicking them. Try it!</p>
      <h3>Sum by adding cells, step by step:</h3>
      <ol>
        <li>Select cell E5, and type =</li>
        <li>Left click E2</li>
        <li>Type (+)</li>
        <li>Left click E3</li>
        <li>Type (+)</li>
        <li>Left click E4</li>
        <li>Hit enter</li>
      </ol>
      <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/formulas_pokeballs5.png" alt="Redo Button" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
        <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/formulas_pokeballs6.png" alt="Redo Button" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
      <p>The result is E5(33).</p>
      <h3>Let's try the SUM function.</h3>
      <p>Remember to delete the values that you currently have in E5.</p>
      <h4>SUM function, step by step:</h4>
      <ol>
        <li>Type E5(=)</li>
        <li>Write SUM</li>
        <li>Double click SUM in the menu</li>
        <li>Mark the range E2:E4</li>
        <li>Hit enter</li>
      </ol>
      <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/formulas_pokeballs7.png" alt="Redo Button" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
        <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/formulas_pokeballs8.png" alt="Redo Button" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
        <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/formulas_pokeballs6.png" alt="Redo Button" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
      <p>Great job! You have successfully calculated the SUM using the SUM function.</p>
      <p>Iva, Liam and Adora have 33 Pokeballs in total.</p>
      <p>Let's change a value to see what happens. Type B2(7):</p>
       <div className="text-center mb-3">
          <img src="https://www.w3schools.com/excel/formulas_pokeballs10.png" alt="Redo Button" className="img-fluid rounded" style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }} />
        </div>
      <p>The value in cell B2 was changed from 2 to 7. Notice that the formulas are doing calculations when we change the value in the cells, and the SUM is updated from 33 to 38. It allows us to change values that are used by the formulas, and the calculations remain.</p>
      <h2>Chapter Summary</h2>
      <ul>
        <li>Values used in formulas can be typed directly and by using cells. The formula updates the result if you change the value of cells, which is used in the formula.</li>
        <li>The fill function can be used to continue your formulas upwards, downwards and sidewards.</li>
        <li>Excel has pre-built functions, such as SUM.</li>
      </ul>
      <p>In the next chapter you will learn about relative and absolute references.</p>
    </div>
  );
}
