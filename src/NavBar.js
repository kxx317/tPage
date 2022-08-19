import React, { useState } from "react";
import "./navStyle.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} style={{ padding: 0 }}>
        <NavbarBrand href="/">Kangxing Xie</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar pills>
            <NavItem>
              <NavLink className="nav-links" active href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-links" href="/posts/">
                Posts
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-links" href="https://github.com/kxx317">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
