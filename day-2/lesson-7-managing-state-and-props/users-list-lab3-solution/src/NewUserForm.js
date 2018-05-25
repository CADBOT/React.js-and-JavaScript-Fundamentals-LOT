import React, { Component } from 'react';

class App extends Component {
  state = {
    fields: {
      username: '',
      age: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let newUser = {username: this.state.fields.username, age: this.state.fields.age}
    this.props.addUser(newUser)
  }

  handleInputChange = (event) => {
    let fields = {...this.state.fields}
    fields[event.target.name] = event.target.value
    this.setState({fields}) 
  }

  render() {
    return (
      <div>
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
