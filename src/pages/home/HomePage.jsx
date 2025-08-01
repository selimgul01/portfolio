import React from "react";
import Hero from "../../components/Hero";
import HomeSection from "../../components/HomeSection";

const HomePage = () => {
  return (
    <div className="container m-auto">
      <div className="flex flex-col">
        <Hero />
        <div className="bg-[#F1F1F1] w-full h-[32px]"></div>
        <HomeSection />
      </div>
    </div>
  );
};

export default HomePage;
