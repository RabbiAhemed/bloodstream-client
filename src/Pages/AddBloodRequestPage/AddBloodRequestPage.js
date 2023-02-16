import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const AddBloodRequestPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const bloodGroup = form.bloodGroup.value;
    const district = form.district.value;
    const mobileNumber = form.mobileNumber.value;
    const details = form.details.value;
    // console.log(name, bloodGroup, district, details, mobileNumber);
    form.reset();
  };
  return (
    <div>
      <h2 className="text-center mt-5 fw-bold text-black">Add Blood Request</h2>
      <Form className="mx-auto w-50 fw-bold" onSubmit={handleSubmit}>
        <label className="text-muted">Name *</label>
        <Form.Group className="mb-2" controlId="formBasicName">
          <Form.Control type="text" name="name" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-2">
          <label className="text-muted">Blood Group *</label>
          <Form.Select aria-label="Default select example" name="bloodGroup">
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
        <Form.Group className="mb-2">
          <label className="text-muted">District *</label>
          <Form.Select
            //
            aria-label="Default select example"
            name="district"
            className="mb-2"
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
        </Form.Group>
        {/* <Form.Label htmlFor="inputPassword5">Contact No *</Form.Label> */}
        <Form.Group className="mb-2">
          <label className="text-muted">Contact No *</label>

          <Form.Control
            type="number"
            name="mobileNumber"
            id="mobileNumber"
            // aria-describedby="passwordHelpBlock"
          />
        </Form.Group>
        {/* <Form.Label htmlFor="inputPassword5">Details</Form.Label> */}
        <Form.Group className="mb-2">
          <label className="text-muted">Details (optional)</label>

          <textarea
            name="details"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          />
        </Form.Group>
        {/* <label htmlFor="exampleFormControlTextarea1">Details</label> */}

        <Button variant="success" type="submit" className="my-4 fw-bold">
          POST
        </Button>
      </Form>
    </div>
  );
};

export default AddBloodRequestPage;
