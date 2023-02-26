import React, { useContext } from "react";
import "./MenuBar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";

const MenuBar = () => {
  const { logOutUser, user } = useContext(AuthContext);
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
            <Link to="/about-us" className="mx-2 fw-bold">
              About Us
            </Link>
            <Link to="/search-donors" className="mx-2 fw-bold">
              Search Donors
            </Link>
            <Link to="/blood-requests" className="mx-2 fw-bold">
              Blood Requests
            </Link>
            <Link to="/add-blood-request" className="mx-2 fw-bold">
              Add Blood Request
            </Link>

            {user && user?.uid ? (
              <Link
                type="button"
                onClick={logOutUser}
                className="fw-bold text-danger mx-2"
                variant="light"
              >
                Logout
              </Link>
            ) : (
              <Link className="mx-2" to="/login">
                Login
              </Link>
            )}
            {!user && !user?.uid && (
              <Link className="mx-2" to="/register">
                Register
              </Link>
            )}
            {/* <Link to="/login" className="mx-2 fw-bold">
              Login
            </Link> */}
            {/* {(user?.photoURL || user?.email) && (
              <img
                src={user.photoURL}
                alt="removed-bg"
                border="0"
                width="50"
                className="user-image rounded-circle border border-primary "
              />
              
            )} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuBar;
