"use client";

import React from "react";
import HeaderText from "../header-text";

const ChooseUs = () => {
  return (
    <section className=" w-[100%] py-[30px] ">
      <main className="bg-[url('../assets/images/chooseimg.jpeg')] h-[600px] w-[100%] bg-cover bg-no-repeat bg-center relative">
        <main className=" text-center md:text-left relative z-20 text-white w-full pl-[1rem] md:pl-[1rem] lg:pl-[10rem] md:w-[700px] pt-[12rem]">
          <HeaderText
            title="Way Choose Us"
            text="We deliver competitive returns for our clients leveraging on our expertise in Wealth managment and knowlegde of global market"
          />
          <button className=" bg-white border w-[160px] h-[50px] text-gray-950 mt-12">
            Get Started
          </button>
        </main>
        <div className="absolute inset-0 bg-gray-800 opacity-70" />
      </main>
    </section>
  );
};

export default ChooseUs;
