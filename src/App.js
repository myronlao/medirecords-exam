import './App.css';
import { useState } from 'react';

export const processDoubleArray = (arr) => {
  return arr.reduce((acc, number) => {
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
  const [inputArray, setInputArray] = useState();
  const [outputArray, setOutputtArray] = useState();
  return (
    <div className="App">
      <div className="containers">
        <span>Input</span>
        Array
        <input
          id="input"
          value={inputArray}
          onChange={(e) => {
            const inputArr = e.target.value.replace(/ /g, '');
            setInputArray(inputArr);
            const arrSplit = inputArr.split(',');
            setOutputtArray(processDoubleArray(arrSplit));
          }}
        />
      </div>
      <div className="containers">
        <span>Output</span>
        Double
        <input
          id="output"
          value={outputArray}
        />
      </div>
    </div>
  );
}

export default App;
