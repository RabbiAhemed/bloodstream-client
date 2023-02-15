import React from "react";
import Faq from "../../components/Faq/Faq";
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
        srcset=""
      />
      <JoinNow></JoinNow>
      <Faq></Faq>
    </div>
  );
};

export default Home;
