import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Player App</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
