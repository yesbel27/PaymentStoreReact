import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import FontAwesomeIcon from 'react-fontawesome';
import { NavLink } from "react-router-dom";


const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand exact href="/">First Store
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="Category" id="collasible-nav-dropdown">
        <NavDropdown.Item href="ProductsPage">Tecnology</NavDropdown.Item>
        <NavDropdown.Item href="ProductsPage">Play</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="purchase"><FontAwesomeIcon icon='fal'/>Shopping cart</Nav.Link>
      <NavLink to="/purchase" >
        About
      </NavLink>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)


export default Header
