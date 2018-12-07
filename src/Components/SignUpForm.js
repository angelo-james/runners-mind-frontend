import React, { Component } from 'react'
import { 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Button,
  NavLink,
  Container } from 'reactstrap';

import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from '../Actions/userActions';

class SignUpForm extends Component {
  onSubmit = e => {
    e.preventDefault();
    this.props.validateUser({
      email: this.props.email,
      password: this.props.password
    })
  }
  
  render() {
    if(this.props.loginSuccess) return <Redirect to='/home'/>
    
    return (
      <div>
        <img className="signup-form-image" src="https://source.unsplash.com/1600x900/?run" alt=""></img>
        <Form onSubmit={ this.onSubmit } color="dark" className="rounded container mt-5 w-25 signup-form">
          <h3 className="text-center">Welcome back</h3>
          <FormGroup>
            <Label for="email">Enter Email</Label>
            <Input type="text" name="email" onChange={ this.props.enterEmail } required/>
            <Label for="password">Enter Password</Label>
            <Input name="password" type="password" onChange={ this.props.enterPassword } required/>
            <Button type="submit" className="mt-2" color="dark">Submit</Button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.user
  }
}

export default withRouter(connect(mapStateToProps, userActions)(SignUpForm));