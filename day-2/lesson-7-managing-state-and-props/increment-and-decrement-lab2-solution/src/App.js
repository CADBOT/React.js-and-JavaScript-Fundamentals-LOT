import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    count: 0
  }

  updateCount = (event) => {
    let offset = 0
    switch (event.target.name) {
      case 'increment':
        offset = 1 
        break
      case 'decrement':
        offset = -1
        break
    }

    this.setState({count: this.state.count + offset})
  }

  render() {
    return (
      <div>
        <div>
          count: {this.state.count}
        </div>
        <button name='increment' onClick={this.updateCount} >increment</button>
        <button name='decrement' onClick={this.updateCount} >decrement</button>
      </div>
    );
  }
}

export default App;
