import './App.css';
import { useState } from 'react';

export const processToDoubleArray = (input) => {
  const arr = input.replace(/ /g, '').split(',');
  return arr.reduce((acc, number) => {
    if (number === '')
      return acc;
    acc += acc.length > 0 ? ',' : '';
    if (!isNaN(number) && number !== '') {
      acc += parseInt(number) * 2;
    } else {
      acc += number;
    }

    return acc;
  }, '');
};

function App() {
  const [outputArray, setOutputtArray] = useState();
  return (
    <div className="App">
      <div className="containers">
        <span data-testid="input-title">Input</span>
        Array
        <input
          id="input"
          data-testid="input-input"
          autoFocus
          onChange={(e) => {
            const inputArr = e.target.value.replace(/ /g, '');
            setOutputtArray(processToDoubleArray(inputArr));
          }}
        />
      </div>
      <div className="containers" data-testid="output-container">
        <span data-testid="output-title">Output</span>
        Double
        <input
          id="output"
          data-testid="output-input"
          defaultValue={outputArray}
        />
      </div>
    </div>
  );
}

export default App;
