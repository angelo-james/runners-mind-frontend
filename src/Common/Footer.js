import React, { Component } from 'react'

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
  DropdownItem } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <div className="mt-5">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Runners Mind</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  NavLink
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Home Page
                  </DropdownItem>
                  <DropdownItem>
                    Posts
                  </DropdownItem>
                  <DropdownItem>
                    Friends
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Footer;