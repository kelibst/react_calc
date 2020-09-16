import React from 'react';
import Button from './setButton';

export default function ButtonPanel() {
  const btns = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];
  return (
    <div className="btn-container">
      {btns.map(btn => (
        <div key={btn} className="row">
          {btn.map(bt => (<Button name={bt} key={bt} />))}
        </div>
      ))}
    </div>
  );
}
