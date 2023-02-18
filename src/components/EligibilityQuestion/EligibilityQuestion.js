import React from "react";
import "./EligibilityQuestion.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const EligibilityQuestion = () => {
  return (
    <div className="mx-auto text-center" id="question-section">
      <h3 className=" text-danger" id="question">
        AM I ELIGIBLE TO DONATE BLOOD?
      </h3>
      <Link to="/eligibility-test">
        <Button variant="danger" className="fw-bold my-2">
          TAKE THE TEST
        </Button>
      </Link>
    </div>
  );
};

export default EligibilityQuestion;
