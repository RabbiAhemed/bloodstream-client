import React from "react";
import "./MenuBar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <Navbar bg="" expand="lg" id="menu">
      <Container>
        <Navbar.Brand href="#home" id="main-logo">
          bloodstream
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" id="right-links">
            <Link to="/" className="mx-2 fw-bold">
              Home
            </Link>
            <Link to="/" className="mx-2 fw-bold">
              About Us
            </Link>
            <Link to="/" className="mx-2 fw-bold">
              Find Donor
            </Link>
            <Link to="/" className="mx-2 fw-bold">
              Add Blood Request
            </Link>
            <Link to="/" className="mx-2 fw-bold">
              Register
            </Link>
            <Link to="/" className="mx-2 fw-bold">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuBar;
