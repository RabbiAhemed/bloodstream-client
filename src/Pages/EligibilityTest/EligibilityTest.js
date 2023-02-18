import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

const EligibilityTest = () => {
  const congratulationMessage = (
    <div>
      <h1 className="fw-bold text-success my-3">
        Congratulations! You should be able to give blood.
      </h1>
      <h4>
        There are some other eligibility criteria, but things are looking super
        promising. We can't wait to hear about your next blood donation.
      </h4>
      <Button
        variant="info"
        onClick={() => setContent(firstQuestion)}
        className="fw-bold mt-3 text-white"
      >
        Take The Test Again
      </Button>
    </div>
  );
  const negativeMessage = (
    <div>
      <h1 className="text-danger fw-bold my-3">
        We discourage you to donate blood at this moment.
      </h1>
      <h4>Please consult a doctor for furthermore details.</h4>
      <Button
        variant="info"
        onClick={() => setContent(firstQuestion)}
        className="fw-bold mt-3 text-white"
      >
        Test Again
      </Button>
    </div>
  );
  const firstQuestion = (
    <div>
      <h3 className="py-5 fw-bold">
        Are you 18-75 years and old Weigh at least 50 kg?
      </h3>
      <Button
        className="px-4 mx-4 fw-bold"
        variant="success"
        onClick={() => q1Yesfunction()}
      >
        Yes
      </Button>
      <Button
        className="px-4 mx-4 fw-bold"
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
      <h3 className="py-5 fw-bold">
        Have you ever had a positive test for HIV, hepatitis B or hepatitis C?
      </h3>
      <Button
        className="px-4 mx-4 fw-bold"
        variant="success"
        onClick={() => q2Nofunction("declined")}
      >
        Yes
      </Button>
      <Button
        className="px-4 mx-4 fw-bold"
        variant="danger"
        onClick={() => q2Yesfunction()}
      >
        No
      </Button>
    </div>
  );
  const thirdQuestion = (
    <div>
      <h3 className="py-5 fw-bold">
        Are you pregnant or recently given birth?
      </h3>
      <Button
        className="px-4 mx-4 fw-bold"
        variant="success"
        onClick={() => q3Nofunction("declined")}
      >
        Yes
      </Button>
      <Button
        className="px-4 mx-4 fw-bold"
        variant="danger"
        onClick={() => q3Yesfunction()}
      >
        No
      </Button>
    </div>
  );
  const fourthQuestion = (
    <div>
      <h3 className="py-5 fw-bold">
        Have you had any blood transfusions in the last 12 months?
      </h3>
      <Button
        className="px-4 mx-4 fw-bold"
        variant="success"
        onClick={() => q4Nofunction("declined")}
      >
        Yes
      </Button>
      <Button
        className="px-4 mx-4 fw-bold"
        variant="danger"
        onClick={() => q4Yesfunction()}
      >
        No
      </Button>
    </div>
  );
  const fifthQuestion = (
    <div>
      <h3 className="py-5 fw-bold">Are you low in iron?</h3>
      <Button
        className="px-4 mx-4 fw-bold"
        variant="success"
        onClick={() => q5Nofunction("declined")}
      >
        Yes
      </Button>
      <Button
        className="px-4 mx-4 fw-bold"
        variant="danger"
        onClick={() => q5Yesfunction()}
      >
        No
      </Button>
    </div>
  );
  const sixthQuestion = (
    <div>
      <h3 className="py-5 fw-bold">
        Have you donated blood or been treated for Malaria in the past three
        month?
      </h3>
      <Button
        className="px-4 mx-4 fw-bold"
        variant="success"
        onClick={() => q6Nofunction("declined")}
      >
        Yes
      </Button>
      <Button
        className="px-4 mx-4 fw-bold"
        variant="danger"
        onClick={() => q6Yesfunction()}
      >
        No
      </Button>
    </div>
  );
  const seventhQuestion = (
    <div>
      <h3 className="py-5 fw-bold">
        Have you had any tattoos or piercings in the last 12 months?
      </h3>
      <Button
        className="px-4 mx-4 fw-bold"
        variant="success"
        onClick={() => q7Nofunction("declined")}
      >
        Yes
      </Button>
      <Button
        className="px-4 mx-4 fw-bold"
        variant="danger"
        onClick={() => q7Yesfunction()}
      >
        No
      </Button>
    </div>
  );
  const q1Yesfunction = () => {
    console.log("1Positive");
    setContent(secondQuestion);
  };
  const q1Nofunction = () => {
    console.log("1Negative");
    setContent(negativeMessage);
    // console.log(declined);
    // setDeclined("declined");
    // console.log(declined);
  };
  const q2Yesfunction = () => {
    console.log("2Positive");
    setContent(thirdQuestion);
  };
  const q2Nofunction = () => {
    console.log("2Negative");
    setContent(negativeMessage);
    // console.log(declined);
    // setDeclined("declined");
    // console.log(declined);
  };
  const q3Yesfunction = () => {
    console.log("3Positive");
    setContent(fourthQuestion);
  };
  const q3Nofunction = () => {
    console.log("3Negative");
    setContent(negativeMessage);
    // console.log(declined);
    // setDeclined("declined");
    // console.log(declined);
  };
  const q4Yesfunction = () => {
    console.log("4Positive");
    setContent(fifthQuestion);
  };
  const q4Nofunction = () => {
    console.log("4Negative");
    setContent(negativeMessage);
    // console.log(declined);
    // setDeclined("declined");
    // console.log(declined);
  };
  const q5Yesfunction = () => {
    console.log("5Positive");
    setContent(sixthQuestion);
  };
  const q5Nofunction = () => {
    console.log("5Negative");
    setContent(negativeMessage);
    // console.log(declined);
    // setDeclined("declined");
    // console.log(declined);
  };
  const q6Yesfunction = () => {
    console.log("6Positive");
    setContent(seventhQuestion);
  };
  const q6Nofunction = () => {
    console.log("6Negative");
    setContent(negativeMessage);
    // console.log(declined);
    // setDeclined("declined");
    // console.log(declined);
  };
  const q7Yesfunction = () => {
    console.log("6Positive");
    setContent(congratulationMessage);
  };
  const q7Nofunction = () => {
    console.log("6Negative");
    setContent(negativeMessage);
    // console.log(declined);
    // setDeclined("declined");
    // console.log(declined);
  };

  return (
    <Container>
      {/* {declined === "not-declined" && (
        <div className="mx-auto my-5 py-5 text-center">{content}</div>
      )}
      {!content &&
        declined ===
          "declined"(
            <div className="mx-auto my-5 py-5 text-center">
              {negativeMessage}
            </div>
          )} */}
      <div className="mx-auto my-5 py-5 text-center">{content}</div>
    </Container>
  );
};

export default EligibilityTest;
