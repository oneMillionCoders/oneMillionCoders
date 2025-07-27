import React from "react";

export default function Exceland() {
  return (
    <div>
      <h1>Excel AND Function</h1>
      <h2>What is the AND Function?</h2>
      <p>The AND function checks if two or more things are true. It gives you TRUE if all your conditions are true, and FALSE if any are not.</p>
      <h3>How to Use AND</h3>
      <p>Type <b>=AND(condition1, condition2, ...)</b> in a cell. Each condition can check if a number is bigger, smaller, or equal to something.</p>
      <h4>Example</h4>
      <ol>
        <li>Click a cell (like D2).</li>
        <li>Type <b>=AND(B2="Fire", C2&gt;70)</b></li>
        <li>Press Enter.</li>
      </ol>
      <p>If both conditions are true, you get TRUE. If not, you get FALSE. You can add more conditions if you want.</p>
      <h4>Tip:</h4>
      <p>Text values need quotes, like "Fire".</p>
      <h3>Using AND with IF</h3>
      <p>You can use AND inside an IF function to return custom results. For example:</p>
      <pre>=IF(AND(B2="Fire", C2&gt;70), "Yes", "No")</pre>
      <p>This will show "Yes" if both are true, and "No" if not.</p>
    </div>
  );
}
