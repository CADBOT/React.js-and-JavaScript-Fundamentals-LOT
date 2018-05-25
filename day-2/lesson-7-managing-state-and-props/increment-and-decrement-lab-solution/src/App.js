import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <div>
          count: {this.state.count}
        </div>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}

export default App;
