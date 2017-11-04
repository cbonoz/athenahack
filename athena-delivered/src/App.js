import React, { Component } from 'react';

import {Button, Jumbotron, Grid, Row} from 'react-bootstrap';
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
          <Header/>
            <Switch>
            {/* <Link to="/">Home</Link>{' '}
            <Link to={{pathname: '/dashboard'}}>dashboard</Link>{' '}
            <Link to="/contact">Contact</Link> */}
              <Route path="/" component={Home} />
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
