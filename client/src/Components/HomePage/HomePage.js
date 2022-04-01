import React from "react";
import HomeCarousel from "../HomeCarousel/Slider";
import HomeSection from "../HomeSections/HomeSection";
import BestSelling from "../BestSelling/BestSelling";
import Services from "../Services/Services";
import CallUs from "../CallUs/CallUs";

function HomePage() {
  return (
    <div className="home-page">
      <HomeCarousel />
      <HomeSection />
      <BestSelling />
      <Services />
      <CallUs />
    </div>
  );
}

export default HomePage;
