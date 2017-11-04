import React, { Component } from 'react';

import {Button,  Grid, Row} from 'react-bootstrap';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Header from './components/Header';
import Reporting from './components/Reporting';
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
        <Router>
          <div>
            <Link to="/">Home</Link>{' '}
            <Link to={{pathname: '/dashboard'}}>Dashboard</Link>{' '}
            <Link to="/reporting">Reporting</Link>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/reporting" component={Reporting} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
