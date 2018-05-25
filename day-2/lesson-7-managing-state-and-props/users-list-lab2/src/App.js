import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    users: [{username: 'Bob', age: '40'}],
    fields: {
      username: '',
      age: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let newUser = {username: this.state.fields.username, age: this.state.fields.age}
    this.setState({
      users: [...this.state.users, newUser],
      fields: {
        username: '',
        age: ''
      }
    }) 
  }

  handleInputChange = (event) => {
    let fields = {...this.state.fields}
    fields[event.target.name] = event.target.value
    this.setState({fields}) 
  }

  render() {
    let users = this.state.users.map((user, i) => <li key={i}>{user.username} {user.age}</li>)
    return (
      <div>
        <ul>
          {users}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input name='username' onChange={this.handleInputChange} value={this.state.fields.username}/>
          <input name='age' onChange={this.handleInputChange} value={this.state.fields.age}/>
          <button>Add User</button>
        </form>
      </div>
    )
  }
}

export default App
