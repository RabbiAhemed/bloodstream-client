import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Test = (props) => {
  const today = new Date();
  const [startDate, setStartDate] = useState(new Date());
  //   const [maxDate, setMaxDate] = useState("");
  console.log(startDate);

  return (
    <div>
      <Form className="w-50 mx-auto">
        <Form.Group controlId="validationFormik03">
          <Form.Label>Date</Form.Label>

          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="form-control"
            maxDate={startDate}
            // customInput={
            //   <input
            //     type="text"
            //     id="validationCustom01"
            //     placeholder="First name"
            //   />
            // }
          />
          {/* {touched.date && !!errors.date && errors.date} */}
        </Form.Group>
        <Form.Group controlId="validationFormik01">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" name="firstName" />
        </Form.Group>
        <Form.Group controlId="validationFormik02">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" name="lastName" />
        </Form.Group>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default Test;
