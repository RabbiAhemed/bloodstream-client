import React, { useEffect } from "react";
import "./Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="mt-5 py-5" data-aos="zoom-in">
      {/* <img
        className="img-fluid"
        src="https://i.ibb.co/3z9sTxL/footer-bg.png"
        alt="footer-bg"
        border="0"
      ></img> */}
      <h1 className="text-center" id="footer-name">
        bloodstream
      </h1>
      <p className="text-center" id="footer-slogan">
        Donate blood, Save life
      </p>
    </div>
  );
};

export default Footer;
