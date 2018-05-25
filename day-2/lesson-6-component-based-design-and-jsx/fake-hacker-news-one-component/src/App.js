import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            Hacker News
          </div>
          <nav>
            <div>New</div>
            <div>Comments</div>
            <div>Show</div>
            <div>Ask</div>
            <div>Jobs</div>
            <div>Submit</div>
            <div>Login</div>
          </nav>
        </div>
       <main>
         <section>
           <div>1. New JavaScript Framework (javascripttimes.com)</div>
           <div>49 points by JsUser</div> 
         </section>
       </main> 
      </div>
    )
  }
}

export default App;
