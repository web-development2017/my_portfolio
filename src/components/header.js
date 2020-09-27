import { Link } from "gatsby"
import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => (
  <header className="bg-dark">
    <Container fluid className="px-3">
      <Navbar expand="md" bg="dark" variant="dark">
        <Link className="navbar-brand" to="/" activeClassName="active">Richard Taylor</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" as="ul">
            <Nav.Item as="li">
              <Link to="/about" className="nav-link" activeClassName="active">About</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/contact" className="nav-link" activeClassName="active">Contact</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

export default Header