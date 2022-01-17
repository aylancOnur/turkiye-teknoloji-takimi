import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjTwo, homeObjThree, homeObjOne } from "./Data";
import Slider from "../../Slider";
import Card from "../../Card";

function Home() {
  return (
    <>
      <Slider />
      <Card />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Home;
