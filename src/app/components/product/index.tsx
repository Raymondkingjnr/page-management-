"use client";
import React from "react";
import Slider from "react-slick";
import { service_card } from "./menu";
import Image from "next/image";

const Product = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <main className=" px-[1rem] lg:px-[10rem] py-[90px]">
      <section className="flex flex-col gap-y-[3rem]  md:flex-row justify-between items-center">
        <h4 className=" text-center md:text-left">
          Explore our <br /> Product and services
        </h4>
        <button className=" bg-transparent w-[190px] border border-gray-900">
          more services
        </button>
      </section>
      <main className=" mt-14">
        <Slider {...settings}>
          {service_card.map((item) => (
            <section
              key={item.id}
              className=" grid place-content-center place-items-center"
            >
              <main className="border w-full md:max-w-[430px] m-auto">
                <div className="p-[1rem]">
                  <Image
                    src={item.img}
                    alt="No 1 asset managment in nigeria"
                    width={500}
                    height={600}
                    className=" object-cover h-[300px] rounded"
                  />
                </div>
                <aside className=" mt-8 text-center px-5">
                  <h6 className=" capitalize text-gray-950 font-semibold ">
                    {item.title}
                  </h6>
                  <p className=" py-5">{item.text}</p>
                </aside>
              </main>
            </section>
          ))}
        </Slider>
      </main>
    </main>
  );
};

export default Product;
