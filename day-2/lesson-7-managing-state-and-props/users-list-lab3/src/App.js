import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserList from './UserList'
import NewUserForm from './NewUserForm'

class App extends Component {
  state = {
    users: [{username: 'Bob', age: '40'}],
  }
  addUser = user => {
    this.setState({
      users: [...this.state.users, user]
    })
  }

  render() {
    return (
      <div>
        <UserList users={this.state.users} />
        <NewUserForm addUser={this.addUser}/>
      </div>
    )
  }
}

export default App
