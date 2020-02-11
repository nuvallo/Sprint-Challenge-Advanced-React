import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { DarkMode } from "../Hooks/DarkMode";

function NavBar() {
  const [darkMode, setDarkMode] = DarkMode("darkvalue", false);
  const toggleSwitch = event => {
    event.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <Navbar
        onClick={toggleSwitch}
        className={darkMode ? "toggle toggled" : "toggle"}
        color="light"
        light
        expand="md"
      >
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

export default NavBar;
