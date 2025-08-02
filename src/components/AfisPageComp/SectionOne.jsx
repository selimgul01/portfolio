import React from "react";

const SectionOne = () => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex items-center justify-between space-y-10">
        <img width={200} height={50} src="/afis/Group20.png" alt="" />
        <img width={176} height={52} src="/afis/Group21.png" alt="" />
      </div>


      <div className="flex justify-between">

        <div className="flex justify-start">
          <img src="/afis/akra3.png" alt="" />
        </div>
       
        <div className="">
          <img width={407} height={570} src="/afis/akra1.png" alt="" />
        </div>

        <div className="">
          <img width={407} height={570} src="/afis/akra2.png" alt="" />
        </div>

      </div>
    </div>
  );
};

export default SectionOne;
