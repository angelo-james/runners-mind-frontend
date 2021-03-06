import React, { Component } from 'react'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container } from 'reactstrap';

  import { Link, Redirect } from 'react-router-dom';

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

  clearLocalStorage = () => {
    localStorage.clear();
    return <Redirect to='/login'></Redirect>
  }

  render() {
    return (
      <div>
          <Navbar color="dark" dark expand="lg" className="fixed-top mb-5">
            <Container>
              <Link to='/'>
                <NavbarBrand>
                  Runners Mind
                </NavbarBrand>
              </Link>
              <NavbarToggler onClick={ this.toggle } />
              <Collapse isOpen={ this.state.isOpen } navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Link to="/home"><NavLink>Home</NavLink></Link>
                  </NavItem>
                  <NavItem>
                    <Link to='/runners'><NavLink>Find Runners</NavLink></Link>
                  </NavItem>
                  <NavItem>
                    <Link to='/login'><NavLink onClick={this.clearLocalStorage}>Sign out</NavLink></Link>
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