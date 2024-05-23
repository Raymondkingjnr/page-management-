"use client";
import React from "react";
import { quick_links, reach_us_link } from "./links";

const Footer = () => {
  return (
    <main className=" overflow-hidden flex flex-col lg:flex-row lg:justify-between gap-[1rem] lg:px-[3rem] px-[1rem] py-[80px] bg-neutral-400">
      <section>
        <h5 className=" text-white">Contact a Wealth advisor today</h5>
        <p className=" py-5 text-white">
          Keep up to date with the latest news in the investment market
        </p>
        <div className=" flex flex-col md:flex-row gap-x-8 gap-y-3">
          <input
            type="email"
            placeholder=" Email"
            className=" w-full border outline-none border-gray-400 h-[50px] rounded-md"
          />

          <button className="bg-white rounded-md w-full h-[50px]  md:w-[300px] font-normal uppercase border-transparent  text-black md:text-black">
            Get insight
          </button>
        </div>
      </section>
      <div className=" flex flex-col lg:flex-row justify-between gap-[3rem]">
        <section className="w-[200px]">
          <h5 className=" text-white">Quick Links</h5>
          {quick_links.map((link) => (
            <li
              className=" flex items-center pt-4 gap-3 font-medium text-white"
              key={link.text}
            >
              <link.icon />
              {link?.text}
            </li>
          ))}
        </section>
        <section className=" lg:w-[400px] w-full  pr-[1rem]">
          <h5 className=" text-white">Reach Us</h5>
          {reach_us_link.map((link) => (
            <li
              className=" flex items-center pt-4 gap-3 font-medium text-white"
              key={link.text}
            >
              <link.icon />
              <span className=" w-full h-full">
                <p> {link.text}</p>
              </span>
            </li>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Footer;
