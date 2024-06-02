"use client";
import { CustomInput } from "@/app/components/custom-input";
import { LogoIcon } from "@/assets";
import React from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { push } = useRouter();
  return (
    <div className="h-screen grid place-items-center">
      <section className="rounded-sm shadow-2xl w-full md:w-[500px] p-5">
        <span className=" grid place-items-center">
          <LogoIcon />
        </span>
        <form className=" pt-5 flex flex-col gap-8">
          <CustomInput placeholder="Email" labelText="Email" />
          <CustomInput placeholder="Password" labelText="Password" />
        </form>
        <button
          className=" bg-gray-500 font-bold capitalize text-gray-50 mt-8 w-full"
          onClick={() => push("/")}
        >
          Sign In
        </button>
        <p className=" pt-2 font-semibold leading-8 text-gray-600">
          Don&apos;t have an account yet?
          <span className=" underline" onClick={() => push("/sign-up")}>
            Sign up
          </span>{" "}
        </p>
      </section>
    </div>
  );
};

export default Login;
