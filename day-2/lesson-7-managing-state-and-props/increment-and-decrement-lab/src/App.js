import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    count: 0
  }

  render() {
    return (
      <div>
        <div>
          count: {this.state.count}
        </div>
        <button>increment</button>
        <button>decrement</button>
      </div>
    );
  }
}

export default App;
