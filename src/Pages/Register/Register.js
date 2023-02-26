import React, { useContext, useEffect, useState } from "react";
import "./Register.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import useTitle from "../../hooks/useTitle";
import AOS from "aos";
import "aos/dist/aos.css";
const Register = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useTitle("Register - Bloodstream");
  const { createUser, displayName, displayPicture } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [date, setDate] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const blood_group = form.bloodGroup.value;
    const district = form.district.value;
    const last_donation_date = date;
    const email = form.email.value;
    const contact = form.contactNumber.value;
    const password = form.password.value;
    const User_image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", User_image);

    // console.log(name, bloodGroup, district, last_donation_date,contact, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);

        displayName(name)
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        //
        /*         displayPicture(picUrl)
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          }); */
        //
        // user.displayName = name;
        setUserName(name);
        const url = `https://api.imgbb.com/1/upload?&key=f4c8251254b4702c4a3d0ea187b4ed88`;
        // const url = `${process.env.REACT_APP_IMGBB_KEY}`;
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((ImgData) => {
            if (ImgData.success) {
              const donorInfo = {
                name,
                blood_group,
                User_image: ImgData.data.url,
                district,
                last_donation_date,
                email,
                contact,
                password,
              };
              const picUrl = ImgData.data.url;
              // set display picture
              displayPicture(picUrl)
                .then(() => {
                  // Profile updated!
                  // ...
                })
                .catch((error) => {
                  // An error occurred
                  // ...
                });
              // fetch
              fetch("http://localhost:5000/donors", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  // authorization: `bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify(donorInfo),
              })
                .then((res) => res.json())
                .then((result) => {
                  console.log(result);
                  // toast.success("product uploaded");
                });
            }
          });
        setSuccessMessage(true);

        form.reset();
      })
      .catch((error) => {
        setErrorMessage(error.message);
        alert(error.message);
      });
  };
  // console.log(date);
  return (
    <div>
      {(successMessage && (
        <h2 className="text-center" id="reg-success-text">
          Welcome {userName}
        </h2>
      )) || (
        <h2 className="text-center mt-5 fw-bold text-danger" id="be-a-hero">
          BECOME A DONOR
        </h2>
      )}
      <Form
        className="mx-auto fw-bold"
        id="registration-form"
        onSubmit={handleSubmit}
      >
        <label className="text-muted">
          Name <span className="text-danger">*</span>
        </label>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <label className="text-muted">
            Blood Group <span className="text-danger">*</span>
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
        <Form.Group className="mb-3">
          <label className="text-muted">
            District <span className="text-danger">*</span>
          </label>
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
        </Form.Group>
        <Form.Group className="mb-3">
          <label className="text-muted d-block">Last donation date</label>
          <input
            type="date"
            id="last-donation-date-input"
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label className="text-muted">
            Email address <span className="text-danger">*</span>
          </label>
          <Form.Control
            required
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <label className="text-muted">
            Contact No <span className="text-danger">*</span>
          </label>
          <Form.Control
            required
            type="number"
            name="contactNumber"
            placeholder="Mobile Number"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <label className="text-muted">
            Password <span className="text-danger">*</span>
          </label>
          <Form.Control
            required
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <input
            type="file"
            id="image"
            accept="image/"
            required
            className="image-input"
          ></input>
        </Form.Group>

        {errorMessage === "Firebase: Error (auth/email-already-in-use)." && (
          <p className="text-danger">This Email is Already Registered</p>
        )}

        {errorMessage ===
          "Firebase: Password should be at least 6 characters (auth/weak-password)." && (
          <p className="text-danger">
            Password should be at least 6 characters
          </p>
        )}

        <Button variant="danger" type="submit" className="my-4 fw-bold d-block">
          Register
        </Button>
        {successMessage && (
          <small
            className="text-start text-primary d-block"
            data-aos="fade-right"
            // data-aos-once="true"
          >
            Registration Completed, Thank you {userName}.
          </small>
        )}

        <p className="small fw-bold mt-2 pt-1 mb-0">
          <span className="me-1">Already Registered?</span>
          <Link to="/login" className="link-success">
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
