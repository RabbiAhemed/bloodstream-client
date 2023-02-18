import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const EligibilityQuestion = () => {
  return (
    <div className="mx-5 text-center">
      <h3 className="fw-bold text-danger">AM I ELIGIBLE TO DONATE BLOOD?</h3>
      <Link to="/eligibility-test">
        <Button variant="danger" className="fw-bold my-2">
          TAKE THE TEST
        </Button>
      </Link>
    </div>
  );
};

export default EligibilityQuestion;
