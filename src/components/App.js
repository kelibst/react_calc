/* eslint-disable no-unused-vars */
import React from 'react';
import calculate from '../logic/calculate';
import ButtonCov from './ButtonCov';
import DisplayPanel from './DisplayPanel';

function App() {
  return (
    <div className="App center-box">
      <DisplayPanel />
      <ButtonCov />
    </div>
  );
}

export default App;
