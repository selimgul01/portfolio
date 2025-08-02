import React from "react";
import SectionOne from "../components/AfisPageComp/SectionOne";
import SectionTwo from "../components/AfisPageComp/SectionTwo";
import SectionThree from "../components/AfisPageComp/SectionThree";
import SectionFour from "../components/AfisPageComp/SectionFour";
import SectionFive from "../components/AfisPageComp/SectionFive";
import SectionSix from "../components/AfisPageComp/SectionSix";

const BannerPage = () => {
  //  
  return (
    <div className="mt-20 px-24 bg-[url('/afis/Frame25.png')] bg-no-repeat bg-center bg-contain">
      <div className="">
        <SectionOne/>
        <SectionTwo/>
        <SectionThree />
        <SectionFour/>
        <SectionFive/>
        <SectionSix/>
      </div>
    </div>
  )
}

export default BannerPage;
