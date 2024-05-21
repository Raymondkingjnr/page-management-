"use client";
import React from "react";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <main className=" overflow-hidden">
      <Slider {...settings}>
        <div className=" bg-[url('../assets/images/bg1.jpeg')] h-[700px] w-full bg-cover bg-no-repeat bg-center relative">
          <main className=" text-white text-center md:text-left text-balance relative z-10 w-fit  md:w-[800px] px-[1rem] md:pl-[2rem] lg:pl-[9rem] flex justify-center pt-[18rem] flex-col ">
            <h1>Your Wealth Matters to us</h1>
            <p className=" pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate sit tempore commodi laboriosam! Amet voluptates nihil
              commodi iure, saepe voluptatum.
            </p>
          </main>
          <div className="absolute inset-0 bg-black opacity-70" />
        </div>
        <div className=" bg-[url('../assets/images/bg2.jpeg')] h-[700px] w-full bg-cover bg-no-repeat bg-center relative">
          <main className=" text-white text-center md:text-left text-balance relative z-10 w-fit  md:w-[800px] px-[1rem] md:pl-[2rem] lg:pl-[9rem] flex justify-center pt-[18rem] flex-col ">
            <h1>Oppoturnites are Everywhere</h1>
            <p className=" pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate sit tempore commodi laboriosam! Amet voluptates nihil
              commodi iure, saepe voluptatum.
            </p>
          </main>
          <div className="absolute inset-0 bg-black opacity-70" />
        </div>
        <div className=" bg-[url('../assets/images/bg3.jpeg')] h-[700px] w-full bg-cover bg-no-repeat bg-center relative">
          <main className=" text-white text-center md:text-left text-balance relative z-10 w-fit  md:w-[800px] px-[1rem] md:pl-[2rem] lg:pl-[9rem] flex justify-center pt-[18rem] flex-col ">
            <h1>Make Money Work</h1>
            <p className=" pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate sit tempore commodi laboriosam! Amet voluptates nihil
              commodi iure, saepe voluptatum.
            </p>
          </main>
          <div className="absolute inset-0 bg-black opacity-70" />
        </div>
      </Slider>
    </main>
  );
};

export default Hero;
