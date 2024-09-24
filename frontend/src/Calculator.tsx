import React, { useState } from 'react';
import '../src/css/style.css';

const Calculator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | string>(0);

  const handleClick = (value: string) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      // Check if the input is '200 + 200'
      if (input === '200+200' || input === '200 + 200') {
        setResult('I MISS YOU :(');
      }
      else if (input == '250 + 100' || input == '250+100') {
        setResult('MAG KITA NA TAYU PLEASE!');
      } else {
        // Otherwise, evaluate the result
        setResult(eval(input)); // eslint-disable-line no-eval
      }
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult(0);
  };

  return (
    <div className="calculator-container">
      <h2 style={{ color: 'white' }}>Simple Calculator</h2>
      <div className="display-input">
        {input || '0'}
      </div>
      <div className="display-result">
        Result: {result}
      </div>
      <div className="button-grid">
        {['7', '8', '9', '/'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>{value}</button>
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>{value}</button>
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>{value}</button>
        ))}
        {['0', '.', '=', '+'].map((value) => (
          <button key={value} onClick={() => value === '=' ? calculateResult() : handleClick(value)}>{value}</button>
        ))}
      </div>
      <button className="clear-button" onClick={handleClear}>Clear</button>
    </div>
  );
};

export default Calculator;
