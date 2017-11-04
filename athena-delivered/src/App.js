import React, { Component } from 'react';
import {Button, Jumbotron} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1>AthenaDelivered</h1>
          <p>AI-generated and Coordinated Meal Plans for patients<br/>on a simple Web Interface</p>
          <p><Button bsStyle="primary">let's get started</Button></p>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
