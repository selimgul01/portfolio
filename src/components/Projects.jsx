import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {

  const navigate = useNavigate()

  return (
    <div  className=" my-10">
      <div data-aos="fade-down" className="flex items-center justify-center my-10">
        <button class="btn text-3xl">
          <i class="animation "></i><p className="text-2xl">Projeler</p><i class="animation"></i>
        </button>
      </div>
      <div className="">
        <div className="flex flex-wrap items-center justify-center gap-16">
          <div data-aos="fade-down-right"  onClick={()=>navigate("/afis")} className="group relative cursor-pointer">
            <img
              className="w-[390px] h-[260px] group-hover:scale-105 group-hover:translate-x-4 group-hover:translate-y-4 duration-500 group-hover:opacity-50"
              src="/afis/afiskapak.png"
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 group-hover:scale-105 group-hover:translate-x-4 group-hover:translate-y-4 duration-500"></div>
            <h3 className="absolute top-[55%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold opacity-0 group-hover:opacity-100 duration-500 tracking-wide">
              AFİŞLER
            </h3>
          </div>

          <div data-aos="fade-down-right" data-aos-delay="200"  className="group relative cursor-pointer">
            <img
              className="w-[390px] h-[260px] group-hover:scale-105 group-hover:translate-x-4 group-hover:translate-y-4 duration-500 group-hover:opacity-50"
              src="/arayuz/arayuzkapak.png"
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 group-hover:scale-105 group-hover:translate-x-4 group-hover:translate-y-4 duration-500"></div>
            <h3 className="absolute top-[55%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold opacity-0 group-hover:opacity-100 duration-500 tracking-wide w-full text-center">
              ARA YÜZ
            </h3>
          </div>

          <div data-aos="fade-down-right" data-aos-delay="400"  className="group relative cursor-pointer">
            <img
              className="w-[390px] h-[260px] group-hover:scale-105 group-hover:translate-x-4 group-hover:translate-y-4 duration-500 group-hover:opacity-50"
              src="/ambalaj/ambalajkapak.png"
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 group-hover:scale-105 group-hover:translate-x-4 group-hover:translate-y-4 duration-500"></div>
            <h3 className="absolute top-[55%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold opacity-0 group-hover:opacity-100 duration-500 tracking-wide w-full text-center">
              AMBALAJ TASARIMI
            </h3>
          </div>

          <div data-aos="fade-down-right" data-aos-delay="600"  className="group relative cursor-pointer">
            <img
              className="w-[390px] h-[260px] group-hover:scale-105 group-hover:translate-x-4 group-hover:translate-y-4 duration-500 group-hover:opacity-50"
              src="/logo/logokapak.png"
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 group-hover:scale-105 group-hover:translate-x-4 group-hover:translate-y-4 duration-500"></div>
            <h3 className="absolute top-[55%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold opacity-0 group-hover:opacity-100 duration-500 tracking-wide w-full text-center">
              LOGOLAR
            </h3>
          </div>

          <div data-aos="fade-down-right" data-aos-delay="800"  className="group relative cursor-pointer">
            <img
              className="w-[384px] h-[320px] group-hover:scale-105 group-hover:translate-x-4 group-hover:translate-y-4 duration-500 group-hover:opacity-50"
              src="/kitap/kitapkapak.png"
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 group-hover:scale-105 group-hover:translate-x-4 group-hover:translate-y-4 duration-500"></div>
            <h3 className="absolute top-[55%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold opacity-0 group-hover:opacity-100 duration-500 tracking-wide w-full text-center">
              KİTAPLAR
            </h3>
          </div>

          <div data-aos="fade-down-right" data-aos-delay="1000"  className="group relative cursor-pointer">
            <img
              className="w-[494px] h-[316px] group-hover:scale-105 group-hover:translate-x-4 group-hover:translate-y-4 duration-500 group-hover:opacity-50"
              src="/kurumsalKimlik/kurumsalkimlikkapak.png"
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 group-hover:scale-105 group-hover:translate-x-4 group-hover:translate-y-4 duration-500"></div>
            <h3 className="absolute top-[55%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold opacity-0 group-hover:opacity-100 duration-500 tracking-wide w-full text-center">
              KURUMSAL KİMLİK
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
