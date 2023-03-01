import React, { useEffect } from "react";
import "./Home.css";
import EligibilityQuestion from "../../components/EligibilityQuestion/EligibilityQuestion";
import Faq from "../../components/Faq/Faq";
import FollowOnSocial from "../../components/FollowOnSocial/FollowOnSocial";
import HeroSection from "../../components/HeroSection/HeroSection";
import JoinNow from "../../components/JoinNow/JoinNow";
import SearchDonor from "../../components/SearchDonor/SearchDonor";
import useTitle from "../../hooks/useTitle";
import BloodRequests from "../../components/BloodRequests/BloodRequests";

const Home = () => {
  useTitle("Home - Bloodstream");
  return (
    <div>
      <HeroSection></HeroSection>
      <SearchDonor></SearchDonor>
      <img
        className="img-fluid"
        src="https://i.ibb.co/TRTcpxQ/every-drop-nobg.png"
        alt=""
        srcSet=""
      />
      <BloodRequests></BloodRequests>
      <JoinNow></JoinNow>
      <EligibilityQuestion></EligibilityQuestion>
      <Faq></Faq>
      <FollowOnSocial></FollowOnSocial>
    </div>
  );
};

export default Home;
