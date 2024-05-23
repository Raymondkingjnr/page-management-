import { teamworkImg } from "@/assets";
import React from "react";
import Image from "next/image";
import { menu } from "./menu";

const OurCompany = () => {
  return (
    <main>
      <section className=" bg-[url('../assets/images/meeting-hall.jpg')] pt-[9rem] bg-no-repeat bg-center bg-cover w-full relative h-[300px]">
        <div className="absolute inset-0 bg-black opacity-70" />
        <span className=" relative z-20 mt-[50px]">
          <h3 className=" text-center text-white">Our Company </h3>
        </span>
      </section>
      <section className=" px-[1rem] lg:px-[7rem] text-center py-5">
        <h5 className=" py-5 text-gray-950">
          Turn your financial dreams to reality.
        </h5>

        <p className=" px-[2rem] md:px-[10rem] text-gray-600">
          Our offering integrates comprehensive wealth planning acute attention
          to client needs to create winning financial solutions just for you.
        </p>
      </section>
      <section className=" px-[1rem] lg:px-[3rem] py-10 flex flex-col  lg:flex-row justify-center items-center lg:items-start lg:justify-between gap-7">
        <aside className=" md:w-[700px] lg:pr-[3rem] text-gray-600">
          <p>
            Page Asset Management Ltd. provides professional asset management
            services across traditional and non-traditional investment options,
            including but not limited to equities, fixed income securities and
            alternative assets. We offer investment opportunities to individual
            and corporate clients.
            <p className=" pt-4">
              Our main aim is to understand our clients’ specific investment
              goals and develop bespoke investment solutions that completely
              address each investment objective.
            </p>
            <p className=" pt-4">
              We have a team of experienced professionals that can assist our
              clients every step of the way.
            </p>
            <p className=" pt-4 whitespace-normal">
              {"  "}Page Asset Management Ltd is a SEC-registered subsidiary of
              Page Financials.
            </p>
          </p>
        </aside>
        <div>
          <Image
            src={teamworkImg}
            alt="nigeria asset managment"
            width={700}
            height={700}
            className=" rounded-lg"
          />
        </div>
      </section>
      <section className="px-[1rem] flex flex-col lg:flex-row items-start  justify-between  py-10 lg:px-[5rem]">
        <main className=" w-full lg:w-[500px]">
          {menu.slice(0, 2).map((item) => (
            <section>
              <div className="  mt-6 flex gap-4  pb-4" key={item.title}>
                <span className="">
                  <Image
                    src={item?.image}
                    alt="page managment asset managment"
                    height={40}
                    width={40}
                    className=" object-contain mt-[0.03rem]"
                  />
                </span>
                <span>
                  <h4>{item.title}</h4>
                  <p className=" pt-4">{item.text}</p>
                </span>
              </div>
              <div className=" h-[1px] w-full bg-gray-800" />
            </section>
          ))}
        </main>
        <main>
          {menu.slice(-4).map((item) => (
            <div
              className=" w-full lg:w-[500px] border-b-2 border-b-gray-600 pb-4  mt-6 flex justify-between gap-4"
              key={item.title}
            >
              <span className=" object-cover">
                <Image
                  src={item?.image}
                  alt="page managment asset managment"
                  height={40}
                  width={40}
                  className=" object-contain mt-[0.1rem]"
                />
              </span>
              <main className=" h-full w-full">
                <h4>{item.title}</h4>
                <p className=" pt-4">{item.text}</p>
              </main>
            </div>
          ))}
        </main>
      </section>
    </main>
  );
};

export default OurCompany;
