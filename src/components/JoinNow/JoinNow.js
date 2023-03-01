import React, { useEffect } from "react";
import "./JoinNow.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const JoinNow = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Container className="" id="join-now-container">
      <Row data-aos="zoom-in">
        <Col xs={12} md={4}>
          <img
            src="https://i.ibb.co/1M5Y2xr/hero-removebg-preview-1.png"
            alt="hero"
            border="0"
            width="75%"
            className="img-fluid mx-auto text-center"
            id="hero-img"
          />
        </Col>
        <Col xs={12} md={8} id="join-now-right-side">
          <h2 className="fw-bold mt-5" id="title">
            {/* EVERY BLOOD DONOR IS A HERO */}
            Every Blood Donor Is A Hero
          </h2>
          <h5 className="fw-bold mt-3" id="sub-title">
            YOU HAVE THE POWER TO SAVE A LIFE
          </h5>
          <Link to="/register" id="join-link">
            <Button variant="danger" className="fw-bold mt-3" id="join-btn">
              Join Now
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default JoinNow;
