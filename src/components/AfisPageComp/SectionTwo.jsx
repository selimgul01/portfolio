import React from "react";

const SectionTwo = () => {
  return (
    <div className="flex flex-col space-y-5 mt-20">
      <div className="">
        <img width={200} height={50} src="/afis/Group22.png" alt="" />
      </div>

      <div className="flex items- space-x-10">
        <div className="">
          <img width={580} height={435} src="/afis/seriafis1.png" alt="" />
        </div>

        <div className="flex items-center justify-center">
          <img width={373} height={534} src="/afis/seri1.png" alt="" />
          <img width={373} height={534} src="/afis/seri2.png" alt="" />
          <img width={373} height={534} src="/afis/seri3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
