"use client";

import React from "react";
import { card_list, jobs } from "./menu";
import { IoIosArrowForward } from "react-icons/io";

const Careers = () => {
  return (
    <main>
      <section className=" bg-[url('../assets/images/careerBg.jpg')] h-[700px] w-full bg-cover bg-no-repeat bg-center relative">
        <main className=" text-white :text-left text-balance relative z-10 w-fit  md:w-[900px] px-[1rem] md:pl-[2rem] lg:pl-[6rem] flex justify-center pt-[17rem] flex-col ">
          <h1>Join Our Team</h1>
          <p className=" pt-4">
            Let us be a part of your career journey. Join our incredible team of
            problem solvers today.
          </p>
          <button className="bg-transparent text-white border border-white py-3 font-bold text-base rounded-md capitalize w-fit px-3 text-center mt-6">
            see job listing
          </button>
        </main>
        <div className="absolute inset-0 bg-black opacity-70" />
      </section>
      <section className=" p-[2rem] lg:p-[90px] bg-neutral-200">
        <h2 className=" leading-10 pb-4">why you should work with us</h2>
        <p>Here is why we should be a part of your career journey</p>
        <article className=" flex flex-col  md:flex-row  justify-between items-center gap-7 py-[4rem]">
          {card_list.map((item) => (
            <main
              key={item.id}
              className="rounded-md px-6 py-7 hover:shadow-lg cursor-pointer transition-shadow duration-300 ease-in-out w-fit lg:w-[350px] "
            >
              <item.icon className=" text-gray-500 text-2xl" />
              <h6 className=" py-6 font-bold text-lg capitalize">
                {item.title}
              </h6>
              <p className="  ">{item.text}</p>
            </main>
          ))}
        </article>
      </section>
      <section className=" lg:p-[90px] p-[2rem]">
        <div className=" text-center pb-14">
          <h2>Vacancies</h2>
          <p className=" pt-4">
            Join our incredible team of problem solvers today.
          </p>
        </div>
        <article className=" bg-neutral-200 max-w-[900px] py-5  m-auto rounded-md">
          {jobs.map((item) => (
            <main
              key={item.route}
              className="my-[10px] mx-2 hover:bg-neutral-300 rounded-sm "
            >
              <span className=" flex items-center px-4 justify-between my-10 py-[0.6rem] hover:scale-x-90  cursor-pointer transition-transform duration-300 ease-in-out">
                <p className=" capitalize font-bold text-base">{item.job}</p>
                <IoIosArrowForward className=" text-lg font-bold" />
              </span>
            </main>
          ))}
        </article>
      </section>
    </main>
  );
};

export default Careers;
