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
      <Container
        className="mx-auto text-center"
      >
        <Form className="container border mt-5 w-50">
          <h1 className="text-center">Login</h1>
          <FormGroup>
            <Label for="email">Enter Email</Label>
            <Input pattern="[A-Za-z]"required/>
            <Label for="password">Enter Password</Label>
            <Input type="password" required/>
            <Button className="mt-2" color="dark">Submit</Button>
          </FormGroup>
        </Form>
      </Container>
    )
  }
}

export default LoginForm;