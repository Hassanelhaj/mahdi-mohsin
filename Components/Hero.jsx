import Image from "next/image";
import React from "react";
import profile from "../public/mona.jpg";
import Writer from "./Writer";

const Hero = () => {
  return (
    <div
      className="container mx-auto h-full pt-16 sm:pt-20 md:mb-10 md:px-4 "
      id="home"
    >
      <div
        className="flex flex-col sm:flex-row-reverse  justify-center
     sm:justify-between sm:px-12 items-center gap-4 sm:flex sm:ml-0
      sm:gap-10 sm:p-8 "
      >
        <Image
          className="rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.1)]  dark:shadow-[0_3px_10px_rgb(0,0,0,0.1)] dark:shadow-white
           dark:border-0 w-64 h-64 "
          priority={true}
          src={profile}
          alt="profile image"
          width={200}
          height={200}
        />
        <div className="flex flex-col  justify-center items-center flex-wrap gap-y-10  p-4">
          <p className="text-2xl font-medium capitalize">
            Hello I am Mona Mohammed
          </p>
          <div className="text-xl lg:text-3xl font-medium capitalize ">
            <Writer />
          </div>
          <p className="capitalize text-center font-thin w-72">
            
            Creative Programmer and  skilled in developing restFull Apis  with
            Laravel & Lumen that have clean structure ,
             smart problem solver and perfect in time managment
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-2 ">
            <a
              href="#projects"
              className=" text-lg font-medium capitalize
        px-3 py-2 text-center border border-slate-800 dark:border-slate-50 dark:text-slate-100
         text-black rounded-lg  sm:w-48 hover:bg-slate-800 hover:text-slate-100"
            >
               View My Projects 
            </a>
              {/* 1Xji8UqXSF07-rz3V_E6NVXeRpVsNliRG  */}
            <a download={"../public/imgs/hassan2.png"} target="_blank" 
            href ='https://drive.google.com/file/d/1skJe89jtBBl2D3u2mS8PZ7mT62O-60_G/view?usp=drive_link'
              className="text-lg font-medium capitalize
        px-3 py-2 text-center bg-slate-800 dark:bg-slate-100 dark:text-slate-800 text-white rounded-lg  sm:w-48 hover:opacity-90"
            >
              downLoad Cv
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
