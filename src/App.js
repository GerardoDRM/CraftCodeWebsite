import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Home';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <Home {...this.state} />
        )}/>
      </div>
    );
  }
}

export default App;
