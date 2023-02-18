import React from "react";
import "./JoinNow.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const JoinNow = () => {
  return (
    <Container className="mx-auto w-75 my-5" id="join-now-container">
      <Row>
        <Col xs={12} md={4}>
          <img
            src="https://i.ibb.co/1M5Y2xr/hero-removebg-preview-1.png"
            alt="hero"
            border="0"
            width="75%"
            className="img-fluid"
          />
        </Col>
        <Col xs={12} md={8}>
          <h1 className="fw-bold mt-5">EVERY BLOOD DONOR IS A HERO</h1>
          <h4 className="fw-bold mt-3">YOU HAVE THE POWER TO SAVE A LIFE</h4>
          <Link to="/register">
            <Button variant="danger" className="fw-bold mt-3">
              JOIN NOW
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default JoinNow;
