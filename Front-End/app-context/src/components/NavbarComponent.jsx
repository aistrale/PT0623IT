import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar  } from 'react-bootstrap';
import { ThemeContext, AuthContext } from '../modules/Contexts';

export default function NavbarComponent({theme}) {
  let [themeCtx, setThemeCtx] = useContext(ThemeContext);
  let [AuthUser, setTAuthUser] = useContext(AuthContext);
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg={themeCtx} data-bs-theme={themeCtx}>
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
          <Navbar.Text>
            Hello <a href="#login">{ AuthUser }</a>
          </Navbar.Text>
          <Button variant="outline-info" onClick={() => {
                themeCtx === 'light' ? setThemeCtx('dark') : setThemeCtx('light')
              }}>Info</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
