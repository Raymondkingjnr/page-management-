import React from "react";
import { teams } from "./teams";
import Image from "next/image";

const OurTeam = () => {
  return (
    <main>
      <section className=" bg-[url('../assets/images/teambg.jpg')] pt-[9rem] bg-no-repeat bg-center bg-cover w-full relative h-[300px]">
        <div className="absolute inset-0 bg-black opacity-70" />
        <span className=" relative z-20 mt-[50px]">
          <h3 className=" text-center text-white uppercase">Our team </h3>
        </span>
      </section>
      <section className=" px-[1rem] flex flex-wrap justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-11 items-center align-middle place-items-center place-content-center my-[6rem]">
        {teams.map((team) => (
          <main
            key={team.name}
            className="  w-full md:w-[370px] lg:w-[400px] shadow-2xl rounded-md"
          >
            <div className=" w-full p-[1rem]">
              <Image
                src={team.image}
                alt="No 1 asset managment in nigeria"
                width={500}
                height={600}
                className=" object-cover h-[300px] rounded"
              />
            </div>
            <div className=" pt-[3rem] pb-[5rem] text-center">
              <span className=" font-semibold text-lg pb-3 leading-10">
                {team.name}
              </span>
              <p>{team.position}</p>
              <button className="bg-gray-50 h-[50px] rounded-sm text-gray-900 border w-[140px] mt-8 uppercase">
                learn more
              </button>
            </div>
          </main>
        ))}
      </section>
    </main>
  );
};

export default OurTeam;
