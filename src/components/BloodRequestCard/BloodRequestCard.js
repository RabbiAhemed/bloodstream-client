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
        <Card.Header className="fw-bold fs-1">
          <span className="text-danger">{bloodGroup}</span> blood needed in{" "}
          <span className="text-primary">{district}</span>
        </Card.Header>
        <Card.Body className="fw-bold text-black font-italic">
          {/* {requestDetails !== "" && (
            <Card.Title><span className="dc-italian-text">Details:</span> {requestDetails}</Card.Title>
          )} */}
          <Card.Title className="fw-bold text-black">
            <span className="dc-italian-text">Donation date:</span> {dateNeeded}
          </Card.Title>
          <Card.Title className="fw-bold text-black">
            <span className="dc-italian-text">Posted by:</span> {name}
          </Card.Title>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Card.Title className="fw-bold text-black">
            <span className="dc-italian-text pt-2">Contact No:</span>{" "}
            {mobileNumber}
          </Card.Title>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default BloodRequestCard;
