import React from "react";
import { Card } from "react-bootstrap";
import "./SearchResult.css";
const SearchResult = ({ donor }) => {
  return (
    <Card className="donor-card">
      <Card.Img
        variant="top"
        src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
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

export default SearchResult;
