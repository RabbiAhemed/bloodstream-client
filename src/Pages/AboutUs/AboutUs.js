import React from "react";
import { Container } from "react-bootstrap";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div>
      <h2 className="text-danger fw-bold mt-5 mb-5" id="about-us-header">
        ABOUT US
      </h2>
      <Container id="about-us-details">
        <p>
          Welcome to Bloodstream - Bangladeshi online platform for connecting
          blood donors with those in need. We are a team of dedicated
          professionals committed to making blood donation easier, faster, and
          more accessible to all.
        </p>
        <p>
          Our mission is to bridge the gap between blood donors and recipients
          by providing a reliable and secure platform for blood donation
          requests and donations. Our platform is designed to connect donors and
          recipients quickly and efficiently, thereby helping to save lives
          across Bangladesh.
        </p>
        <p>
          At Bloodstream, we believe in the power of community and the
          importance of coming together to support those in need. That's why
          we've created a platform where donors and recipients can connect
          directly, without any intermediaries or complicated procedures.
        </p>
        <p>
          Our website is user-friendly and easy to navigate. You can search for
          donors based on blood type and location. You can also register with
          Bloodstream to become a blood donor.
        </p>
        <p>
          We understand the critical importance of blood donations, especially
          during emergencies, and that's why we are dedicated to providing a
          reliable and secure platform for blood donation requests and
          donations. We are also committed to raising awareness about the
          importance of blood donation and encouraging more people to become
          blood donors.
        </p>
        <p>
          Join us today and help make a positive impact on the lives of people
          in need. Whether you are a blood donor or a recipient, our platform is
          here to serve you. Thank you for choosing Bloodstream as your source
          for blood donation. Together, we can make a difference and save lives.
        </p>
      </Container>
    </div>
  );
};

export default AboutUs;
