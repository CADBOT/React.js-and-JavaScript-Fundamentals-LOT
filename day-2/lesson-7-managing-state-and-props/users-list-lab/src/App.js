import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    users: ['Bob']
  }

  handleChange = (event) => {
    event.preventDefault()
    console.log(this.refs.newUser.value)
    let newUser = this.refs.newUser.value
    this.setState({
      users: [...this.state.users, newUser]
    }) 
  }

  render() {
    let users = this.state.users.map((user, i) => <li key={i}>{user}</li>)
    return (
      <div>
        <ul>
          {users}
        </ul>
        <form onSubmit={this.handleChange}>
          <input ref='newUser'/>
          <button>Add User</button>
        </form>
      </div>
    );
  }
}

export default App
