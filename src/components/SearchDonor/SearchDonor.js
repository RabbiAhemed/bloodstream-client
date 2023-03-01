import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import DonorCard from "../DonorCard/DonorCard";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SearchDonor.css";
const SearchDonor = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [primaryArray, setPrimaryArray] = useState();
  const [filteredArray, setFilteredArray] = useState();
  const [selectedDistrict, setSelectedDistrict] = useState();
  const [selectedGroup, setSelectedGroup] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/donors`)
      .then((res) => res.json())
      .then((data) => setPrimaryArray(data));
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const donorBloodGroup = form.bloodGroup.value;
    const donorDistrict = form.district.value;
    setSelectedDistrict(donorDistrict);
    setSelectedGroup(donorBloodGroup);

    // setVisible(true);
    const filteredResult = primaryArray.filter((data) => {
      return (
        data.district === donorDistrict && data.blood_group === donorBloodGroup
      );
    });
    setFilteredArray(filteredResult);

    form.reset();
  };

  return (
    <div className="my-5">
      <h2
        className="fw-bold text-center text-danger"
        id="search-donors-title"
        data-aos="zoom-in"
      >
        {/* Search Donors */}
        SEARCH DONORS
      </h2>
      <Form
        className="mx-auto w-75 fw-bold"
        onSubmit={handleSubmit}
        id="donor-search-form"
      >
        <Form.Group className="mb-3">
          <label className="text-muted">Blood Group</label>
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
          <label className="text-muted">District</label>
          <Form.Select
            required
            aria-label="Default select example"
            name="district"
          >
            <option value="">Select</option>
            <option value="Bagerhat">Bagerhat</option>
            <option value="Bandarban">Bandarban</option>
            <option value="Barguna">Barguna</option>
            <option value="Barisal">Barisal</option>
            <option value="Bhola">Bhola</option>
            <option value="Bogura">Bogura</option>
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
            <option value="Jashore">Jashore</option>
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
          <Button variant="danger" type="submit" className="my-4 fw-bold">
            Search
          </Button>
        </Form.Group>
      </Form>

      {/* if only one donor available */}
      {filteredArray?.length === 1 && (
        <h1 className="fw-bold text-center search-result-message text-success">
          Found <span className="">{filteredArray?.length}</span>
          {""}
          <span className="ms-3">{selectedGroup}</span> Donor in
          <span className="ms-2">{selectedDistrict}</span>
        </h1>
      )}
      {/* warning message */}

      {filteredArray?.length >= 1 && (
        // <h5 className="fw-bold text-center warning-message text-danger">
        //   please do not contact any donor who donated blood less than three
        //   months ago
        // </h5>

        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="12"
          className="text-danger fs-4 fw-bold"
        >
          Please do not contact any donor who donated blood within the last
          three months.
        </marquee>
      )}
      {filteredArray?.length > 1 && (
        <h1 className="fw-bold text-center search-result-message text-success">
          Found <span className="">{filteredArray?.length}</span>{" "}
          <span className="me-2">{selectedGroup}</span>
          Donors in
          <span className="ms-2">{selectedDistrict}</span>
        </h1>
      )}
      {/* if at least one donor available */}
      <div className="donor-cards-container">
        {filteredArray?.length > 0 &&
          filteredArray.map((donor) => (
            <DonorCard donor={donor} key={donor._id}></DonorCard>
          ))}
      </div>
      {/* if no available donor is found */}
      {filteredArray?.length < 1 && (
        <h1 className="fw-bold text-center text-danger search-result-message">
          No <span className="colored-span">{selectedGroup}</span> Donor Found
          in <span className="">{selectedDistrict}</span>
        </h1>
      )}
      {/* warning message */}
    </div>
  );
};

export default SearchDonor;
