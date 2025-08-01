import React from "react";

const Navbar = () => {
  return (
    <div className="container m-auto">
    <div className="w-full flex items-center justify-between h-20 bg-white ">
      <div className=" ">
        <img src="public/logo.png" width={44} height={44}  alt="" />
      </div>
      <div className="flex items-center space-x-10">
        <p className="text-2xl text-[#5987c0]  transition ease-in-out  duration-700 hover:scale-110 hover:text-black cursor-pointer ">
          Ana Sayfa
        </p>
        <p className="text-2xl text-[#5987c0]  transition ease-in-out  duration-700 hover:scale-110 hover:text-black cursor-pointer">
          Hakkımda
        </p>
        <p className="text-2xl text-[#5987c0]  transition ease-in-out  duration-700 hover:scale-110 hover:text-black cursor-pointer">
          Projeler
        </p>
        <p className="text-2xl text-[#5987c0]  transition ease-in-out  duration-700 hover:scale-110 hover:text-black cursor-pointer">
          İletişim
        </p>
        <div className="flex items-center">
          <p className="text-2xl text-[#5987c0]  transition ease-in-out  duration-700 hover:scale-110 hover:text-black cursor-pointer pr-1">
            EN
          </p>
          <p className="text-2xl text-[#5987c0]">/</p>
          <p className="text-2xl text-[#5987c0]  transition ease-in-out  duration-700 hover:scale-110 hover:text-black cursor-pointer pl-1">
            TR
          </p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Navbar;
