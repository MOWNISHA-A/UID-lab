import React, { useState } from 'react';
import './Calculator.css';

const buttons = [
  ['C', '(', ')', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '^', '='],
  ['sin', 'cos', 'tan', 'log'],
  ['sqrt', 'exp', 'pi', 'e'],
];

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        // Replace scientific functions with JS Math equivalents
        let expr = input
          .replace(/sin\(/g, 'Math.sin(')
          .replace(/cos\(/g, 'Math.cos(')
          .replace(/tan\(/g, 'Math.tan(')
          .replace(/log\(/g, 'Math.log10(')
          .replace(/sqrt\(/g, 'Math.sqrt(')
          .replace(/exp\(/g, 'Math.exp(')
          .replace(/pi/g, 'Math.PI')
          .replace(/e/g, 'Math.E')
          .replace(/\^/g, '**');
        // eslint-disable-next-line no-eval
        const evalResult = eval(expr);
        setResult(evalResult);
      } catch {
        setResult('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator-container">
      <h2>Scientific Calculator</h2>
      <div className="display">
        <input type="text" value={input} readOnly className="input-display" />
        <div className="result-display">{result !== '' ? result : '\u00A0'}</div>
      </div>
      <div className="buttons-grid">
        {buttons.flat().map((btn, idx) => (
          <button key={idx} className="calc-btn" onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
