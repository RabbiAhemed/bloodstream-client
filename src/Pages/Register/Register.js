import React from "react";
import "./Register.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div>
      <h2 className="text-center mt-5 fw-bold text-black" id="be-a-hero">
        be a hero
      </h2>
      <Form className="mx-auto w-50 fw-bold">
        <label className="text-muted">Name *</label>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <label className="text-muted">Blood Group *</label>
          <Form.Select
            required
            aria-label="Default select example"
            name="bloodGroup"
          >
            <option value=" ">Select</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <label className="text-muted">District *</label>
          <Form.Select
            // required
            aria-label="Default select example"
            name="district"
            className="mb-3"
          >
            <option value="">Select</option>
            <option value="Bagerhat">Bagerhat</option>
            <option value="Bandarban">Bandarban</option>
            <option value="Barguna">Barguna</option>
            <option value="Barisal">Barisal</option>
            <option value="Bhola">Bhola</option>
            <option value="Bogra">Bogra</option>
            <option value="Brahmanbaria">Brahmanbaria</option>
            <option value="Chandpur">Chandpur</option>
            <option value="Chapainawabganj">Chapainawabganj</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Chuadanga">Chuadanga</option>
            <option value="Comilla">Comilla</option>
            <option value="Cox's Bazar">Cox's Bazar</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Dinajpur">Dinajpur</option>
            <option value="Faridpur">Faridpur</option>
            <option value="Feni">Feni</option>
            <option value="Gaibandha">Gaibandha</option>
            <option value="Gazipur">Gazipur</option>
            <option value="Gopalganj">Gopalganj</option>
            <option value="Habiganj">Habiganj</option>
            <option value="Jamalpur">Jamalpur</option>
            <option value="Jessore">Jessore</option>
            <option value="Jhalokati">Jhalokati</option>
            <option value="Jhenaidah">Jhenaidah</option>
            <option value="Joypurhat">Joypurhat</option>
            <option value="Khagrachari">Khagrachari</option>
            <option value="Khulna">Khulna</option>
            <option value="Kishoreganj">Kishoreganj</option>
            <option value="Kurigram">Kurigram</option>
            <option value="Kushtia">Kushtia</option>
            <option value="Lakshmipur">Lakshmipur</option>
            <option value="Lalmonirhat">Lalmonirhat</option>
            <option value="Madaripur">Madaripur</option>
            <option value="Magura">Magura</option>
            <option value="Manikganj">Manikganj</option>
            <option value="Meherpur">Meherpur</option>
            <option value="Moulvibazar">Moulvibazar</option>
            <option value="Munshiganj">Munshiganj</option>
            <option value="Mymensingh">Mymensingh</option>
            <option value="Naogaon">Naogaon</option>
            <option value="Narail">Narail</option>
            <option value="Narayanganj">Narayanganj</option>
            <option value="Narsingdi">Narsingdi</option>
            <option value="Natore">Natore</option>
            <option value="Netrokona">Netrokona</option>
            <option value="Nilphamari">Nilphamari</option>
            <option value="Noakhali">Noakhali</option>
            <option value="Pabna">Pabna</option>
            <option value="Panchagarh">Panchagarh</option>
            <option value="Patuakhali">Patuakhali</option>
            <option value="Pirojpur">Pirojpur</option>
            <option value="Rajbari">Rajbari</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Rangamati">Rangamati</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Satkhira">Satkhira</option>
            <option value="Shariatpur">Shariatpur</option>
            <option value="Sherpur">Sherpur</option>
            <option value="Sirajganj">Sirajganj</option>
            <option value="Sunamganj">Sunamganj</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Tangail">Tangail</option>
            <option value="Thakurgaon">Thakurgaon</option>
          </Form.Select>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <label className="text-muted">Email address *</label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <label className="text-muted">Password *</label>
            <Form.Control
              required
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="danger" type="submit" className="my-4 fw-bold">
            Register
          </Button>
          <p className="small fw-bold mt-2 pt-1 mb-0">
            Already Registered?
            <Link to="/login" className="link-success">
              Login
            </Link>
          </p>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Register;
