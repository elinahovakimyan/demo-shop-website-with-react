import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import FilterModal from './FilterModal';

const Header = () => {
  return(
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          Abra Kadabra Shop
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="/">
            Homepage
          </NavItem>
          <NavItem eventKey={2} href="/shop">
            Shop
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            <FilterModal />
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export { Header };
