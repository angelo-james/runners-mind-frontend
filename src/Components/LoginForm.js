import React, { Component } from 'react'
import { 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  FormFeedback, 
  FormText, 
  Button,
  Container } from 'reactstrap';

class LoginForm extends Component {
  render() {
    return (
      // <Container
      // className="mx-auto text-center"
      // >
      <div className="text-center">
        <img className="login-form-image" src="https://source.unsplash.com/1600x900/?peoplerunning" alt=""></img>
        <Form color="dark" className="container mt-5 w-25 login-form">
          <h1 className="text-center">Login</h1>
          <FormGroup>
            <Label for="email">Enter Email</Label>
            <Input required/>
            <Label for="password">Enter Password</Label>
            <Input type="password" required/>
            <Button className="mt-2" color="dark">Submit</Button>
          </FormGroup>
        </Form>
        {/* <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> */}
        <div className="mt-3">
          <div className="info-message row text-center mx-auto">
            <div className="info-message container col-4 text-center">
              <img className="login-about-image" src="https://via.placeholder.com/250x200" alt="placeholder"></img>
              <h3 className="mt-3">Community</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in eros nec diam semper porta vitae id ante. Proin maximus laoreet mauris faucibus hendrerit. Praesent.
              </p>
            </div>
            <div className="info-message container col-4 text-center">
              <img className="login-about-image" src="https://via.placeholder.com/250x200" alt="placeholder"></img>
              <h3 className="mt-3">Goals</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in eros nec diam semper porta vitae id ante. Proin maximus laoreet mauris faucibus hendrerit. Praesent.
              </p>
            </div>
            <div className="info-message container col-4 text-center">
              <img className="login-about-image" src="https://via.placeholder.com/250x200" alt="placeholder"></img>
              <h3 className="mt-3">Progress</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in eros nec diam semper porta vitae id ante. Proin maximus laoreet mauris faucibus hendrerit. Praesent.
              </p>
            </div>
          </div>
        </div>
      {/* </Container> */}
      </div>
    )
  }
}

export default LoginForm;