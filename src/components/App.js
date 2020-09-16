import React, { Component } from 'react';
import ButtonCov from './ButtonCov';
import DisplayPanel from './DisplayPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.genResult = this.genResult.bind(this);
  }

  handleClick(btnName) {
    const cal = calculate(this.state, btnName);
    this.setState(cal);
  }

  genResult() {
    const { total, next } = this.state;
    return next || total;
  }

  render() {
    return (
      <div className="App center-box">
        <DisplayPanel res={this.state} />
        <ButtonCov handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
