import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Navbar from './Navbar'
import ArticleList from './ArticleList'

class App extends Component {
  render() {
    return (
      <div>
       <Navbar/>
       <ArticleList/>
      </div>
    )
  }
}

export default App;
