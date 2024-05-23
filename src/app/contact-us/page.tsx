import React from "react";
import { reach_us_link, socials } from "../components/footer/links";
import { CustomInput, CustomTextAreaInput } from "../components/custom-input";
import { FaPaperPlane } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <section className="bg-[url('../assets/images/customerImg.jpg')] h-[500px] w-full bg-cover bg-no-repeat bg-center relative">
        <main className="flex justify-center items-center h-full text-white text-center relative z-10">
          <h1 className="text-center uppercase">contact us</h1>
        </main>
        <div className="absolute inset-0 bg-black opacity-70" />
      </section>
      <section className=" py-8 px-[1rem] lg:p-[90px]">
        <h6>Get in touch</h6>
        <div className=" bg-gray-800 h-[1px] w-full mt-4" />
        <article className=" flex flex-col gap-10 mt-10 w-full md:w-[400px]">
          {reach_us_link.map((link) => (
            <main key={link.text}>
              <li
                className=" flex items-center pt-4 gap-4 font-medium text-gray-900"
                key={link.text}
              >
                <link.icon />
                <span className=" w-full h-full">
                  <p> {link.text}</p>
                </span>
              </li>
            </main>
          ))}
          <main>
            <h6>follow us on social media</h6>
            <main className=" mt-8 flex items-center gap-10">
              {socials.map((item) => (
                <main key={item.link}>
                  <a href={item.link}>
                    <item.icon className=" text-xl" />
                  </a>
                </main>
              ))}
            </main>
          </main>
        </article>
      </section>
      <section className=" my-[4rem] mx-auto  max-w-[900px] bg-neutral-300 rounded-sm  py-8 px-[0.6rem] lg:px-10">
        <div className=" py-6">
          <h6 className=" text-gray-600 font-light text-lg">Leave a Message</h6>
          <p className=" font-light py-4">We are here to assist you</p>
        </div>
        <main className=" flex flex-col gap-9 ">
          <CustomInput placeholder="Name" type="text" />
          <div className=" flex flex-col lg:flex-row gap-5 items-center">
            <CustomInput placeholder="Email" type="email" />
            <CustomInput placeholder="Phone Number" type="number" />
          </div>
          <CustomTextAreaInput placeholder="Message" />
        </main>
        <button className=" capitalize h-[50px] flex justify-center items-center gap-3 rounded-sm mt-5 w-full bg-gray-950 text-white text-center">
          send message <FaPaperPlane className=" mt-1" />
        </button>
      </section>
    </div>
  );
};

export default ContactUs;
