import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Router } from 'react-router';
import { NavLink } from 'react-router-dom';
import history from './routes/history';
import RouteResolver from './routes/RouteResolver';
import AsyncRoute from './routes/AsyncRoute';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <br />
            <div>
              <NavLink className="App-nav-link" exact to="/">Foo</NavLink>{' '}
              <NavLink className="App-nav-link" to="/bar/">Bar</NavLink>{' '}
              <NavLink className="App-nav-link" to="/baz/">Baz</NavLink>
            </div>
            <RouteResolver routes={routes} Route={AsyncRoute} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
