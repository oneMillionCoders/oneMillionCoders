import React from 'react';

export default function FillingPage() {
  return (
    <div className="p-4">
      <h1 className="h2 mb-3">Excel Fill</h1>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Filling</h2>
        <p>
          Filling makes your life easier and is used to fill ranges with values, so that you do not have to type manual entries.
        </p>
        <p>Filling can be used for:</p>
        <ul>
          <li>Copying</li>
          <li>Sequences</li>
          <li>Dates</li>
          <li>Functions (*)</li>
        </ul>
        <p>
          <strong>Note:</strong> For now, do not think of functions. We will cover that in a later chapter.
        </p>
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">How To Fill</h2>
        <p>
          Filling is done by selecting a cell, clicking the fill icon, and selecting the range using drag and mark while holding the left mouse button down.
        </p>
        <p>
          The fill icon is found in the bottom right corner of the cell and has the icon of a small square. Once you hover over it, your mouse pointer will change its icon to a thin cross.
        </p>
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/fill_cross.png"
            alt="Fill Icon"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
        <p>
          Click the fill icon and hold down the left mouse button, drag and mark the range that you want to cover.
        </p>
        <p>
          In this example, cell <code>A1</code> was selected and the range <code>A1:A10</code> was marked:
        </p>
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/fill_cross2.png"
            alt="Fill Example"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
        <p>Now that we have learned how to fill. Let's look into how to copy with the fill function.</p>
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Fill Copies</h2>
        <p>
          Filling can be used for copying. It can be used for both numbers and words.
        </p>
        <p>Let's have a look at numbers first.</p>
        <p>In this example, we have typed the value <code>A1(1)</code>:</p>
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/fill_cross3.png"
            alt="Fill Copy Numbers"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
        <p>
          Filling the range <code>A1:A10</code> creates ten copies of 1:
        </p>
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/fill_cross4.png"
            alt="Fill Copy Result"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
        <p>
          The same principle goes for text.<br/>
          <br/>
          In this example, we have typed <code>A1(Hello World)</code>.<br/>
          <br/>
          Filling the range <code>A1:A10</code> creates ten copies of "Hello World":
        </p>
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/fill_helloworld.png"
            alt="Fill Copy Text"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

        <p>Now you have learned how to fill and to use it for copying both numbers and words. Let's have a look at sequences.</p>
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Fill Sequences</h2>
        <p>
          Filling can be used to create sequences. A sequence is an order or a pattern. We can use the filling function to continue the order that has been set.
        </p>
        <p>Sequences can, for example, be used on numbers and dates.</p>
        <p>Let's start with learning how to count from 1 to 10.</p>
        <p>This is different from the last example because this time we do not want to copy, but to count from 1 to 10.</p>
        <p>
          Start with typing <code>A1(1)</code>:
        </p>
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/fill_seq.png"
            alt="Fill Sequence Start"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

        <p>First we will show an example which does not work, then we will do a working one. Ready?<br/>
        <br/>
           Lets type the value  (<code>1</code>) into the cell <code>A2</code>, which is what we have in <code>A1</code>. Now we have the same values in both <code>A1</code> and <code>A2</code>.</p>


        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/fill_seq2.png"
            alt="Fill Sequence Result"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
        <p>
        Let's use the fill function from <code>A1:A10</code> to see what happens. Remember to mark both values before you fill the range.
        </p>
        
<div className="text-center">
          <img
            src="https://www.w3schools.com/excel/fill_seq3.png"
            alt="Excel Ribbon and Sheet"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

        <p>What happened is that we got the same values as we did with copying. This is because the fill function assumes that we want to create copies as we had two of the same values in both the cells <code>A1(1)</code> and <code>A2(1)</code>.</p>

        <p>Change the value of <code>A2(1)</code> to <code>A2(2)</code>. We now have two different values in the cells <code>A1(1)</code> and <code>A2(2)</code>. Now, fill <code>A1:A10 </code>again.<br/>
         Remember to mark both the values (holding down shift) before you fill the range:</p>

         
<div className="text-center">
          <img
            src="https://www.w3schools.com/excel/fill_seq4.png"
            alt="Excel Ribbon and Sheet"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

        <p><strong>Congratulations!</strong> You have now counted from 1 to 10.<br/>
        <br/>
           The fill function understands the pattern typed in the cells and continues it for us.</p>

        <p>That is why it created copies when we had entered the value (<code>1</code>) in both cells, as it saw no pattern. When we entered (<code>1</code>) and (<code>2</code>) in the cells it was able to understand the pattern and that the next cell A3 should be (<code>3</code>).</p><br/>
        <br/>

        <p>Let's create another sequence. Type <code>A1(2)</code> and <code>A2(4)</code>:</p>

        
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/fill_seq5.png"
            alt="Excel Ribbon and Sheet"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

        <p>Now, fill <code>A1:A10</code>:</p>

        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/fill_seq6.png"
            alt="Excel Ribbon and Sheet"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

        <p>It counts from <code>2 to 20</code> in the range <code>A1:A10</code>.<br/>
        <br/>
        This is because we created an order with <code>A1(2)</code> and <code>A2(4)</code>.<br/>
        <br/>
        Then it fills the next cells, <code>A3(6)</code>, <code>A4(8)</code>, <code>A5(10)</code> and so on. The fill function understands the pattern and helps us continue it.
        </p>

      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Sequence of Dates</h2>
        <p>
          The fill function can also be used to fill dates.
        </p>
        <p>
        <strong>Note:</strong> The date format depends on your regional language settings. For example, <code>14.03.2023</code> vs. <code>3/14/2023</code>.
        </p>
        <p>
          Test it by typing <code>A1(29.07.2021)</code>:
        </p>
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/fill_dates.png"
            alt="Fill Dates"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

        <p>And fill the range <code>A1:A10</code>:</p>

        
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/fill_dates2.png"
            alt="Excel Ribbon and Sheet"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>


        <p>
          The fill function has filled 10 days from <code>A1(29.07.2021)</code> to <code>A10(07.08.2021)</code>.<br/>
          <br/>
          Note that it switched from July to August in cell <code>A4</code>. It knows the calendar and will count real dates.
        </p>
      </section>

      <hr className="my-4" />

      <section className="mb-5">
        <h2 className="h5">Combining Words and Letters</h2>
        <p>
          Words and letters can also be combined.
        </p>
        <p>
          Type <code>A1(Hello 1)</code> and <code>A2(Hello 2)</code>:
        </p>
        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/fill_words_num.png"
            alt="Fill Words and Numbers"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>

        <p>Next, fill <code>A1:A10</code> to see what happens:</p>

        <div className="text-center">
          <img
            src="https://www.w3schools.com/excel/fill_words_num2.png"
            alt="Excel Ribbon and Sheet"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>


        <p>
          The result is that it counts from <code>A1(Hello 1)</code> to <code>A10(Hello 10)</code>. Only the numbers have changed.<br/>
          <br/>
          It recognised the pattern of the numbers and continued it for us. Words and numbers can be combined, as long as you use a recognizable pattern for the numbers.
        </p>
      </section>
    </div>
  );
}