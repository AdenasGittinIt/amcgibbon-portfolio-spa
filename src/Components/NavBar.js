import React, { useState } from 'react';
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
  NavbarText
} from 'reactstrap';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand  href="/">
           <img src={`${process.env.PUBLIC_URL}/assets/images/AM_Blue.png`} alt="logo"></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">My Work</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Contact Me
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#97;&#100;&#101;&#110;&#97;&#46;&#109;&#99;&#103;&#105;&#98;&#98;&#111;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;" target="_blank">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/email.png`} alt="email icon"></img>
                  </a>
                </DropdownItem>
                <DropdownItem>
                  <a href="https://www.linkedin.com/in/adenamcgibbon" target="_blank">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/LI-In-Bug.png`} alt="linkedin icon"></img>
                  </a>
                </DropdownItem>
                <DropdownItem>
                  <a href="https://github.com/AdenasGittinIt" target="_blank" class="collection-item blue-text">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/GitHub.png`} alt="github icon"></img>
                  </a>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Cancel
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Ordinarily Extraordinary</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;