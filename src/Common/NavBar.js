import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container } from 'reactstrap';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="lg" className="fixed-top">
          <Container>
            <NavbarBrand href='/'>
              Runners Mind
            </NavbarBrand>
            <NavbarToggler onClick={ this.toggle } />
            <Collapse isOpen={ this.state.isOpen } navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href='/home'>Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/home'>Stats</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/home'>Progress</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/home'>Sign out</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;