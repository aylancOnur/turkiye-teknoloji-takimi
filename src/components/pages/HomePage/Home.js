import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Slider from "../../Slider"
import Pricing from "../../Pricing";

function Home() {
  return (
    <>
      <Slider />
      <Pricing />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
