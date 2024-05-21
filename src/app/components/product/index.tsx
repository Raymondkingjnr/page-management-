"use client";
import React from "react";

const Product = () => {
  return (
    <main className=" px-[1rem] lg:px-[10rem] py-[90px]">
      <section className="flex flex-col gap-y-[3rem]  md:flex-row justify-between items-center">
        <h4 className=" text-center md:text-left">
          Explore our <br /> Product and services
        </h4>
        <button className=" bg-transparent w-[190px] rounded-sm border border-gray-900 uppercase font-medium h-[40px]">
          more services
        </button>
      </section>
    </main>
  );
};

export default Product;
