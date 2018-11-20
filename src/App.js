import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './Common/NavBar';
import LoginForm from './Components/LoginForm';
import HomePage from './Components/HomePage';
import Footer from './Common/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/*" component={ NavBar } />
          <Route exact path="/" component={ () => <Redirect to="/login" /> } />
          <Route exact path="/login" component={ LoginForm } />
          <Route exact path="/home" component={ HomePage } />
          <Route exact path="/*" component={ Footer } />
        </div>
      </Router>
    );
  }
}

export default App;
