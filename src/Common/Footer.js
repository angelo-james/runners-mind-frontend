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
                <NavLink href="https://github.com/angelo-james">
                  <i class="fa fa-github fa-2x" aria-hidden="true"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink email="angelojames.arriola@gmail.com">
                  <i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://linkedin.com/in/angelo-james-arriola">
                  <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                </NavLink>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default Footer;