import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="mt-5 py-5">
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
