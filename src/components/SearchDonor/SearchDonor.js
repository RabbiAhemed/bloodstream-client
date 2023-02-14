import React from "react";
import { Form } from "react-bootstrap";

const SearchDonor = () => {
  return (
    <div className="my-5">
      <h1 className="fw-bold text-center">Search Donors</h1>
      <Form.Group className="mb-3 mx-5 px-5 w-50">
        <label className="text-muted">Choose account type</label>
        <Form.Select
          required
          aria-label="Default select example"
          name="options"
        >
          <option value="buyer">select</option>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </Form.Select>
      </Form.Group>

      <select name="form_fields[blood_group]" id="" class="">
        <option value=" ">Select</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>{" "}
      </select>
    </div>
  );
};

export default SearchDonor;
