import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function HeaderComponent() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">ReactApp</Navbar.Brand>
        <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Link className="nav-link" to="/">Home</Link>
            {/* <Nav.Link href="/about">About</Nav.Link> */}
            <Link className="nav-link" to="/about">About</Link>
            {/* <Nav.Link href="/users">Users</Nav.Link> */}
            <Link className="nav-link" to="/users">Users</Link>
            {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
            <Link className="nav-link" to="/contact">Contact</Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
