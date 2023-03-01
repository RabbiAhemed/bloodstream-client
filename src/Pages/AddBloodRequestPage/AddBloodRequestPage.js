import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Form } from "react-bootstrap";
import useTitle from "../../hooks/useTitle";
import "./AddBloodRequestPage.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AddBloodRequestPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [date, setDate] = useState();
  const [startDate, setStartDate] = useState(new Date());
  useTitle("Add Blood Request - Bloodstream");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const bloodGroup = form.bloodGroup.value;
    const district = form.district.value;
    const mobileNumber = form.mobileNumber.value;
    var requestDetails = form.details.value;
    const dateNeeded = startDate.toDateString().slice(4);
    if (requestDetails === "") {
      requestDetails = "No details provided by the requester";
    }
    const requestInfo = {
      name,
      bloodGroup,
      district,
      mobileNumber,
      requestDetails,
      dateNeeded,
    };
    //
    // console.log(dateNeeded);

    fetch(`${process.env.REACT_APP_API_URL}/requests`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(requestInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged === true) {
          toast("Your blood request has been successfully posted");
        }
      });
    form.reset();
  };
  // console.log(startDate.toLocaleDateString());
  return (
    <div>
      <h2
        className="text-center mt-5 fw-bold text-danger"
        id="add-blood-request-header"
        data-aos="zoom-in"
      >
        ADD BLOOD REQUEST
      </h2>
      <Form
        className="mx-auto fw-bold"
        id="blood-request-form"
        onSubmit={handleSubmit}
      >
        <label className="text-muted">
          Name <span className="text-danger"> *</span>
        </label>
        <Form.Group className="mb-2" controlId="formBasicName">
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <label className="text-muted">
            Blood Group <span className="text-danger"> *</span>
          </label>
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
        <Form.Group className="mb-2">
          <label className="text-muted">
            District <span className="text-danger"> *</span>
          </label>
          <Form.Select
            required
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
        <Form.Group className="mb-3">
          {/* <Form.Label>Date</Form.Label> */}
          <label className="text-muted d-block">
            When Needed <span className="text-danger"> *</span>
          </label>

          <DatePicker
            required
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            // onChange={(e) => setDate(e.target.value)}
            className="form-control"
            // maxDate={startDate}
            placeholderText="select a date"
          />
        </Form.Group>
        {/* <Form.Group className="mb-3">
          <label className="text-muted d-block">When Needed</label>
          <DatePicker
            id="add-req-date-input"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            placeholderText="Click to select a date"
          />
        </Form.Group> */}
        <Form.Group className="mb-2">
          <label className="text-muted">
            Contact No <span className="text-danger"> *</span>
          </label>

          <Form.Control
            required
            type="number"
            name="mobileNumber"
            id="mobileNumber"
            placeholder="Mobile Number"
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <label className="text-muted">Details (optional)</label>

          <textarea
            name="details"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          />
        </Form.Group>

        <Button variant="success" type="submit" className="my-4 fw-bold">
          Post
        </Button>
      </Form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default AddBloodRequestPage;
