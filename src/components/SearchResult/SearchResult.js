import React from "react";
import { Card } from "react-bootstrap";

const SearchResult = ({ donor }) => {
  console.log(donor);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
        />
        <Card.Body>
          <h6>Name: {donor.name}</h6>
          <h6>Blood Group: {donor.blood_group}</h6>
          <h6>District: {donor.district}</h6>
          <h6>Last Donation Date: {donor.last_donation_date}</h6>
          <h6>Contact No: {donor.contact}</h6>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SearchResult;
