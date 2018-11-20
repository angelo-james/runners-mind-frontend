import React, { Component } from 'react'

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <div className="mt-5">
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href='/'>
              Runners Mind
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href='/home'>Home</NavLink>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default Footer;