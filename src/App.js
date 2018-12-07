import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './Common/NavBar';
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';
import HomePage from './Components/HomePage';
import Footer from './Common/Footer';

import { Provider } from 'react-redux';
import store from './store';
class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={ () => <Redirect to="/login" /> } />
            <Route exact path="/login" component={ LoginForm } />
            <Route exact path="/signup" component={ SignUpForm } />
            <Route exact path="/home" component={ HomePage } />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
