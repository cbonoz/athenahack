import React, { Component } from 'react';

import {Button, Jumbotron, Grid, Row} from 'react-bootstrap';
import Home from './components/Home';
import Header from './components/Header';
import {Bar} from 'react-chartjs-2';
import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';

class App extends Component {
  
  render() {

    return (
      <div className="App">
        <Header/>
         <Router>
            <Link to="/">Home</Link>{' '}
            <Link to={{pathname: '/dashboard'}}>dashboard</Link>{' '}
            <Link to="/contact">Contact</Link>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/dashboard" component={Dashboard} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
