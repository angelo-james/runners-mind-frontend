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
      // <Container className="ml-auto">
        <Navbar color="dark" dark className="fixed-bottom">

            <NavLink href="https://github.com/angelo-james">
              <i className="fa fa-github icon">GITHUB</i>
            </NavLink>
        
            <NavLink href="mailto:angelojames.arriola@gmail.com">
              <i className="fa fa-envelope-o icon">GMAIL</i>
            </NavLink>
          
            <NavLink href="https://linkedin.com/in/angelo-james-arriola">
              <i className="fa fa-linkedin-square icon">LINKEDIN</i>
            </NavLink>
              
        </Navbar>
      // </Container>
    )
  }
}

export default Footer;