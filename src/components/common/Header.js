import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand exact href="/">Bank accounts
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="Options admin" id="collasible-nav-dropdown">
        <NavDropdown.Item href="Customer">Register customer</NavDropdown.Item>
        <NavDropdown.Item href="ListCustomer">List customers</NavDropdown.Item>
        <NavDropdown.Item href="BlockAcount">Block account</NavDropdown.Item>
        <NavDropdown.Item href="accounts">List acount</NavDropdown.Item>

        <NavDropdown.Item href="ListTransactions">List transactions</NavDropdown.Item>

      </NavDropdown>
      <NavDropdown title="Options checker" id="collasible-nav-dropdown">
        <NavDropdown.Item href="deposit">Deposit</NavDropdown.Item>
        <NavDropdown.Item href="withdrawal">Withdrawal</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Options client" id="collasible-nav-dropdown">
        <NavDropdown.Item href="register">Register acount</NavDropdown.Item>
        <NavDropdown.Item href="TransferMoney">Transfer money</NavDropdown.Item>
        <NavDropdown.Item href="transactions">My transactions</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)


export default Header
