import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import EligibilityQuestion from "../../components/EligibilityQuestion/EligibilityQuestion";
import Faq from "../../components/Faq/Faq";
import FollowOnSocial from "../../components/FollowOnSocial/FollowOnSocial";
import HeroSection from "../../components/HeroSection/HeroSection";
import JoinNow from "../../components/JoinNow/JoinNow";
import SearchDonor from "../../components/SearchDonor/SearchDonor";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <SearchDonor></SearchDonor>
      <img
        className="img-fluid"
        src="https://i.ibb.co/6gXGcv4/everydrop.png"
        alt=""
        srcSet=""
      />
      <JoinNow></JoinNow>
      <EligibilityQuestion></EligibilityQuestion>
      <Faq></Faq>
      <FollowOnSocial></FollowOnSocial>
    </div>
  );
};

export default Home;
