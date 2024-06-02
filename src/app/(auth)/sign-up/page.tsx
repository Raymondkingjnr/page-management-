"use client";
import { CustomInput } from "@/app/components/custom-input";
import { LogoIcon } from "@/assets";
import React from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const { push } = useRouter();
  return (
    <div className="h-screen grid place-items-center">
      <section className="rounded-sm shadow-2xl w-full md:w-[500px] p-5">
        <span className=" grid place-items-center">
          <LogoIcon />
        </span>
        <form className=" pt-5 flex flex-col gap-8">
          <CustomInput placeholder="Name" labelText="Name" />
          <CustomInput placeholder="Email" labelText="Email" />
          <CustomInput placeholder="Password" labelText="Password" />
        </form>
        <button
          className=" bg-gray-500 font-bold capitalize text-gray-50 mt-8 w-full"
          onClick={() => push("/")}
        >
          Sign up
        </button>
        <p className=" pt-2 font-semibold leading-8 text-gray-600">
          Already have an account yet?{" "}
          <span className=" underline" onClick={() => push("/login")}>
            Sign in
          </span>{" "}
        </p>
      </section>
    </div>
  );
};

export default SignUp;
