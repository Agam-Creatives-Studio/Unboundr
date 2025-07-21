import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/UnboundrLogo.png';
import './Navbar.css'; // Custom styles here

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className='mb-md-0 mb-3' src={Logo} alt="Logo" width={100} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav " />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">HOME</Nav.Link>

            <NavDropdown title="PROGRAMS" id="programs-dropdown" className="nav-link-custom">
              <NavDropdown.Item as={Link} to="/Unboundr-X">Unboundr X</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Unboundr-Pro">Unboundr Pro</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Unboundr-Elevate">Unboundr Elevate</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Unboundr-Camp">Unboundr Camp</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/about" className="nav-link-custom">ABOUT</Nav.Link>
            {/* <Nav.Link as={Link} to="/blog" className="nav-link-custom">BLOG</Nav.Link> */}
            <Nav.Link as={Link} to="/contact-us" className="nav-link-custom">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
