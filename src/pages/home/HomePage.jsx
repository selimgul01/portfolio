import React from "react";
import Hero from "../../components/Hero";
import HomeSection from "../../components/HomeSection";
import Projects from "../../components/Projects";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="bg-[#F1F1F1] w-full h-[32px]"></div>
      <HomeSection />
      <div className="bg-[#F1F1F1] w-full h-[32px]"></div>
      <Projects />
    </div>
  );
};

export default HomePage;
