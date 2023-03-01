import React from "react";
import { Card } from "react-bootstrap";
import "./DonorCard.css";
const DonorCard = ({ donor }) => {
  return (
    <Card className="donor-card" border="danger">
      <Card.Img
        variant="top"
        src={donor.User_image}
        className="p-2"
        id="donor-image"
      />
      <Card.Body>
        <h6>
          <span style={{ color: "red" }}>Donor:</span> {donor.name}
        </h6>
        <h6>
          <span style={{ color: "red" }}>Blood Group:</span> {donor.blood_group}
        </h6>
        <h6>
          <span style={{ color: "red" }}>District:</span> {donor.district}
        </h6>
        <h6>
          <span style={{ color: "red" }}>Contact No:</span> {donor.contact}
        </h6>
        <h6>
          <span style={{ color: "red" }}>Last Donated:</span>{" "}
          {donor.last_donation_date}
        </h6>
      </Card.Body>
    </Card>
  );
};

export default DonorCard;
