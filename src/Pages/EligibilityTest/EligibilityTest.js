import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import useTitle from "../../hooks/useTitle";
import "./EligibilityTest.css";
import AOS from "aos";
import "aos/dist/aos.css";

const EligibilityTest = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useTitle("Eligibility Test - Bloodstream");
  const congratulationMessage = (
    <div>
      <h1
        className="fw-bold text-success my-3 eligibility-test-font"
        data-aos="zoom-in"
      >
        Congratulations! You should be able to donate blood.
      </h1>
      <h4 className="eligibility-test-font">
        There are some other eligibility criteria, but things are looking super
        promising. We can't wait to hear about your next blood donation.
      </h4>
      <Button
        variant="info"
        onClick={() => setContent(firstQuestion)}
        className="fw-bold mt-3 text-white eligibility-test-font"
      >
        Take The Test Again
      </Button>
    </div>
  );
  const negativeMessage = (
    <div>
      <h1
        className="text-danger fw-bold my-3 eligibility-test-font"
        data-aos="zoom-in"
      >
        We discourage you to donate blood at this moment.
      </h1>
      <h4 className="eligibility-test-font">
        Please consult a doctor for furthermore details.
      </h4>
      <Button
        variant="info"
        onClick={() => setContent(firstQuestion)}
        className="fw-bold mt-3 text-white eligibility-test-font"
      >
        Test Again
      </Button>
    </div>
  );
  const firstQuestion = (
    <div>
      <h3 className="py-5 fw-bold eligibility-test-font">
        Are you between 18 to 75 years old and Weigh at least 50 kg?
      </h3>
      <Button
        className="px-4 mx-4 fw-bold eligibility-test-font"
        variant="success"
        onClick={() => q1Yesfunction()}
      >
        Yes
      </Button>
      <Button
        className="px-4 mx-4 fw-bold eligibility-test-font"
        variant="danger"
        onClick={() => q1Nofunction("declined")}
      >
        No
      </Button>
    </div>
  );
  const [content, setContent] = useState(firstQuestion);
  const secondQuestion = (
    <div>
      <h3 className="py-5 fw-bold eligibility-test-font">
        Have you ever had a positive test for HIV, hepatitis B or hepatitis C?
      </h3>
      <Button
        className="px-4 mx-4 fw-bold eligibility-test-font"
        variant="success"
        onClick={() => q2Nofunction("declined")}
      >
        Yes
      </Button>
      <Button
        className="px-4 mx-4 fw-bold eligibility-test-font"
        variant="danger"
        onClick={() => q2Yesfunction()}
      >
        No
      </Button>
    </div>
  );
  const thirdQuestion = (
    <div>
      <h3 className="py-5 fw-bold eligibility-test-font">
        Are you pregnant or recently given birth?
      </h3>
      <Button
        className="px-4 mx-4 fw-bold eligibility-test-font"
        variant="success"
        onClick={() => q3Nofunction("declined")}
      >
        Yes
      </Button>
      <Button
        className="px-4 mx-4 fw-bold eligibility-test-font"
        variant="danger"
        onClick={() => q3Yesfunction()}
      >
        No
      </Button>
    </div>
  );
  const fourthQuestion = (
    <div>
      <h3 className="py-5 fw-bold eligibility-test-font">
        Have you had any blood transfusions in the last 12 months?
      </h3>
      <Button
        className="px-4 mx-4 fw-bold eligibility-test-font"
        variant="success"
        onClick={() => q4Nofunction("declined")}
      >
        Yes
      </Button>
      <Button
        className="px-4 mx-4 fw-bold eligibility-test-font"
        variant="danger"
        onClick={() => q4Yesfunction()}
      >
        No
      </Button>
    </div>
  );
  const fifthQuestion = (
    <div>
      <h3 className="py-5 fw-bold eligibility-test-font">
        Are you low in iron?
      </h3>
      <Button
        className="px-4 mx-4 fw-bold eligibility-test-font"
        variant="success"
        onClick={() => q5Nofunction("declined")}
      >
        Yes
      </Button>
      <Button
        className="px-4 mx-4 fw-bold eligibility-test-font"
        variant="danger"
        onClick={() => q5Yesfunction()}
      >
        No
      </Button>
    </div>
  );
  const sixthQuestion = (
    <div>
      <h3 className="py-5 fw-bold eligibility-test-font">
        Have you donated blood or been treated for Malaria in the past three
        month?
      </h3>
      <Button
        className="px-4 mx-4 fw-bold eligibility-test-font"
        variant="success"
        onClick={() => q6Nofunction("declined")}
      >
        Yes
      </Button>
      <Button
        className="px-4 mx-4 fw-bold eligibility-test-font"
        variant="danger"
        onClick={() => q6Yesfunction()}
      >
        No
      </Button>
    </div>
  );
  const seventhQuestion = (
    <div>
      <h3 className="py-5 fw-bold eligibility-test-font">
        Have you had any tattoos or piercings in the last 12 months?
      </h3>
      <Button
        className="px-4 mx-4 fw-bold eligibility-test-font"
        variant="success"
        onClick={() => q7Nofunction("declined")}
      >
        Yes
      </Button>
      <Button
        className="px-4 mx-4 fw-bold eligibility-test-font"
        variant="danger"
        onClick={() => q7Yesfunction()}
      >
        No
      </Button>
    </div>
  );
  const q1Yesfunction = () => {
    setContent(secondQuestion);
  };
  const q1Nofunction = () => {
    setContent(negativeMessage);
  };
  const q2Yesfunction = () => {
    setContent(thirdQuestion);
  };
  const q2Nofunction = () => {
    setContent(negativeMessage);
  };
  const q3Yesfunction = () => {
    setContent(fourthQuestion);
  };
  const q3Nofunction = () => {
    setContent(negativeMessage);
  };
  const q4Yesfunction = () => {
    setContent(fifthQuestion);
  };
  const q4Nofunction = () => {
    setContent(negativeMessage);
  };
  const q5Yesfunction = () => {
    setContent(sixthQuestion);
  };
  const q5Nofunction = () => {
    setContent(negativeMessage);
  };
  const q6Yesfunction = () => {
    setContent(seventhQuestion);
  };
  const q6Nofunction = () => {
    setContent(negativeMessage);
  };
  const q7Yesfunction = () => {
    setContent(congratulationMessage);
  };
  const q7Nofunction = () => {
    setContent(negativeMessage);
  };

  return (
    <Container>
      <div className="mx-auto my-5 py-5 text-center eligibility-test-font">
        {content}
      </div>
    </Container>
  );
};

export default EligibilityTest;
