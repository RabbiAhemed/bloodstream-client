import React from "react";
import { Card } from "react-bootstrap";
import "./BloodRequestCard.css";
const BloodRequestCard = ({ request }) => {
  const {
    name,
    bloodGroup,
    district,
    mobileNumber,
    requestDetails,
    dateNeeded,
  } = request;
  return (
    <div>
      <Card className="text-center p-4 m-4" id="blood-request-card">
        <Card.Header className="fw-bold fs-3">
          <span className="text-danger">{bloodGroup}</span> blood needed in{" "}
          <span className="text-primary">{district}</span>
        </Card.Header>
        <Card.Body className="fw-bold text-black font-italic">
          {requestDetails !== "" && (
            <Card.Title className="">
              <span className="text-danger">Details:</span> {requestDetails}
            </Card.Title>
          )}
        </Card.Body>
        <Card.Footer className="text-muted">
          <Card.Title className=" text-black">
            <span className="text-danger">Donation date:</span> {dateNeeded}
          </Card.Title>
          <Card.Title className=" text-black">
            <span className="text-danger">Posted by:</span> {name}
          </Card.Title>
          <Card.Title className=" text-black">
            <span className="pt-2 text-danger">Contact No:</span> {mobileNumber}
          </Card.Title>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default BloodRequestCard;
