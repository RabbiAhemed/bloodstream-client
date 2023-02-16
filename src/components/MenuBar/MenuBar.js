import React from "react";
import "./MenuBar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <Navbar bg="" expand="lg" id="menu">
      <Container>
        <Navbar.Brand id="main-logo">
          {/* <img
            src="https://i.ibb.co/Jy7KT5s/main-logo-hand.png"
            alt=""
            width="30%"
            className=""
          /> */}
          <Link to="/">bloodstream</Link>
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
            <Link to="/search-donor" className="mx-2 fw-bold">
              Search Donor
            </Link>
            <Link to="/add-blood-request" className="mx-2 fw-bold">
              Add Blood Request
            </Link>
            <Link to="/register" className="mx-2 fw-bold">
              Register
            </Link>
            <Link to="/login" className="mx-2 fw-bold">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuBar;
