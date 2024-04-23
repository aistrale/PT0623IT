import React from 'react'
import { Container, Nav, Navbar  } from 'react-bootstrap';

export default function NavbarComponent({theme}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a> {theme}
          </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
