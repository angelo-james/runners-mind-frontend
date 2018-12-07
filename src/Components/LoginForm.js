import React, { Component } from 'react'
import { 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Button,
  NavLink } from 'reactstrap';

import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from '../Actions/userActions';

class LoginForm extends Component {
  state = {
    email: '',
    //how to change the style of the alert to have it toggle depending on reducer state
    alert: false
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  onSubmit = e => {
    e.preventDefault();
    this.props.createUser(this.state);
  }

  render() {
    return (
      // <Container
      // className="mx-auto text-center"
      // >
      <div>
        <h1 className="header-title">Join today, give back to yourself and your community... why not?</h1>
        <img className="login-form-image" src="https://source.unsplash.com/1600x900/?run" alt=""></img>
        <Form onSubmit={ this.onSubmit } color="dark" className="login-form rounded container mt-5 w-25">
          <h3 className="text-center">Get started... Its free.</h3>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="text" name="email" onChange={ this.handleChange } required/>
            <Label for="username">Username</Label>
            <Input type="text" name="username" onChange={ this.handleChange } required/>
            <Label for="password">Password</Label>
            <Input type="password" name="password" onChange={ this.handleChange } required/>
            <Button type="submit" className="mt-2" color="dark">Submit</Button>
          </FormGroup>
          <small>Already a member? <Link to="/signup">Login</Link></small>
        </Form>
          <div className="mt-5 px-5">
            <div className="row">
              <div className="col">
                <img className="login-about-image" src="https://source.unsplash.com/500x200/?community" alt="placeholder"></img>
              </div>
              <div className="container login-about-info col">
                <h3>Community driven</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in eros nec diam semper porta vitae id ante. Proin maximus laoreet mauris faucibus hendrerit. Praesent.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="container login-about-info col">
                <h3>Set goals</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in eros nec diam semper porta vitae id ante. Proin maximus laoreet mauris faucibus hendrerit. Praesent.
                </p>
              </div>
              <div className="col">
                <img className="login-about-image" src="https://source.unsplash.com/500x200/?graph" alt="placeholder"></img>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col">
                <img className="login-about-image" src="https://source.unsplash.com/500x200/?graphs" alt="placeholder"></img>
              </div>
              <div className="container login-about-info col">
                <h3>Track your progress</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in eros nec diam semper porta vitae id ante. Proin maximus laoreet mauris faucibus hendrerit. Praesent.
                </p>
              </div>
            </div>
          </div>
        
        {/* <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> */}
      {/* </Container> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default withRouter(connect(mapStateToProps, userActions)(LoginForm));