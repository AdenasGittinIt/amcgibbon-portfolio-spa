import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const NavBar = props => {
  return (
    <div>
      <Navbar light expand="md" >
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">My Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contact Me</NavLink>
            </NavItem>
          </Nav>
          <NavbarBrand  href="/">
            <img src={`${process.env.PUBLIC_URL}/assets/images/AM_Blue.png`} alt="logo"></img>
          </NavbarBrand>
      </Navbar>
    </div>
  )
}

export default NavBar