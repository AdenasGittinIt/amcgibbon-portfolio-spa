import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">See What I'm About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Checkout My Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Reach Out</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
      </Navbar>
    </div>
  );
}

export default Example;