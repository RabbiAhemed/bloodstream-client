import React, { useEffect } from "react";
import "./EligibilityQuestion.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const EligibilityQuestion = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="mx-auto text-center" id="question-section">
      <div data-aos="zoom-in">
        <h2 className="text-danger fw-bold" id="question">
          AM I ELIGIBLE TO DONATE BLOOD?
        </h2>
        <Link to="/eligibility-test">
          <Button variant="danger" className="fw-bold my-2" id="take-test-btn">
            {/* TAKE THE TEST */}
            Take The Test
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EligibilityQuestion;
