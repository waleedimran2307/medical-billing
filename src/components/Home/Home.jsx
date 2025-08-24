import React from "react";
import Banner from "./Banner";
import Introduction from "./Introduction";
import WhyUs from "./WhyUs";
import Serve from "./Serve";
import Services from "./Services";
import KeyFeatures from "./KeyFeatures";

const Home = () => {
  return (
    <div>
      <Banner />
      <Introduction />
      <WhyUs />
      <Services />
      <Serve />
      <KeyFeatures />
    </div>
  );
};

export default Home;
