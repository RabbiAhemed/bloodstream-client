import React, { useEffect } from "react";
import "./FollowOnSocial.css";
import AOS from "aos";
import "aos/dist/aos.css";
const FollowOnSocial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="my-5 pt-5">
      <h2
        className="fw-bold text-center my-3 text-danger"
        id="follow-us-title"
        data-aos="zoom-in"
      >
        FOLLOW US ON
        <a
          href="https://www.facebook.com/bloodstream1"
          target="_blank"
          rel="noopener noreferrer"
          className="ms-3"
        >
          FACEBOOK
        </a>
      </h2>
      <img
        // className="w-25 h-25 text-center"
        src="https://i.ibb.co/fG6gQHC/qr1676483400998.png"
        alt=""
        id="qr-code-image"
      />
    </div>
  );
};

export default FollowOnSocial;
