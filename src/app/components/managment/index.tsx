import React from "react";
import HeaderText from "../header-text";
import Image from "next/image";
import { teamworkImg } from "@/assets";

const Managmentsection = () => {
  return (
    <section>
      <main className=" flex flex-col md:flex-row justify-center gap-[2rem] md:justify-between  px-[1rem] lg:px-[7rem] my-[5rem]">
        <div className="text-left pl-[1rem] relative z-20 text-gray-900 w-full  md:w-[600px]">
          <HeaderText
            title="Page Asset Managment LTD. is a leading asset managment firm in Nigeria"
            text="We are a team of experienced funds managers with a breath of strong performing products accross multipl assets classes, easily accessible to individuals and institution"
          />
          <button className=" bg-white border uppercase font-medium border-gray-900 rounded-md h-[50px] w-[160px] mt-12">
            learn more
          </button>
        </div>
        <div>
          <Image
            src={teamworkImg}
            alt="asset managment"
            width={400}
            height={500}
            className=" object-contain rounded-md"
          />
        </div>
      </main>
      <main>
        <div className=" bg-[url('../assets/images/golfing.jpeg')] h-[200px] w-[100%] pl-[1rem] md:pl-[7rem] pt-[3rem] bg-cover bg-no-repeat bg-center relative">
          <span className=" text-white">
            <h3>
              Your Health <br /> Matters...
            </h3>
          </span>
        </div>
      </main>
    </section>
  );
};

export default Managmentsection;
