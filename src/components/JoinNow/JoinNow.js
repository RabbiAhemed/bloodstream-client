import React from "react";
import "./JoinNow.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const JoinNow = () => {
  return (
    <Container className="my-5" id="join-now-container">
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
          <h2 className="fw-bold mt-5" id="title">
            EVERY BLOOD DONOR IS A HERO
          </h2>
          <h5 className="fw-bold mt-3" id="sub-title">
            YOU HAVE THE POWER TO SAVE A LIFE
          </h5>
          <Link to="/register">
            <Button variant="danger" className="fw-bold mt-3" id="join-btn">
              JOIN NOW
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default JoinNow;
