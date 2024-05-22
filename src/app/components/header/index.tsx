"use client";

import { LogoIcon } from "@/assets";
import React, { useState, FC } from "react";
import { nav_links } from "./menu";
import { AiOutlineUser } from "react-icons/ai";
import { GoLock } from "react-icons/go";

import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosCloseCircleOutline,
} from "react-icons/io";
import Link from "next/link";

interface NavLinkProps {
  name: string;
  route: string;
  children?: {
    name: string;
    route: string;
  }[];
}
const NavLink: React.FC<NavLinkProps> = ({ name, route, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>();

  return (
    <div className="relative group">
      <a
        href={route}
        className="block py-2 px-4 hover:bg-neutral-600 font-semibold  rounded-md capitalize cursor-pointer"
        onClick={(e) => {
          if (children) {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        {name}
      </a>
      {children && (
        <div
          className={`absolute capitalize left-[1rem] mt-2 w-[270px] bg-white shadow-slate-700 rounded-md shadow-2xl ${
            isOpen ? "block" : "hidden"
          } group-hover:block`}
        >
          {children.map((child, index) => (
            <a
              key={index}
              href={child.route}
              className="block font-medium py-2 px-4 hover:bg-neutral-600 hover:text-white rounded mx-[0.2rem] my-[2rem]  text-gray-950"
            >
              {child.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [mobileNav, setMobileNav] = useState<boolean>();
  const [openMenus, setOpenMenus] = useState<{ id: number; state: boolean }>();

  const handleMenuClick = (menuId: number) => {
    setOpenMenus((prevState) => {
      return {
        ...prevState,
        id: menuId,
        state: !prevState?.state,
      };
    });
  };

  const handleMobileNav = () => {
    setMobileNav((prev) => !prev);
  };
  const handleSubLinkClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation(); // Prevent the event from propagating to the parent link
  };
  return (
    <main>
      <div className=" flex justify-between items-center  w-full absolute bg-transparent z-30 text-white px-5 lg:px-[7rem] pt-3">
        <span className=" mt-4">
          <LogoIcon />
        </span>
        <section className=" hidden lg:flex">
          <nav className=" text-white p-4">
            <div className="container mx-auto flex justify-around">
              {nav_links.map((nav) => (
                <NavLink key={nav.id} name={nav.name} route={nav.route}>
                  {nav.children}
                </NavLink>
              ))}
            </div>
          </nav>
        </section>
        <main className=" gap-3 hidden lg:flex">
          <button className=" capitalize text-gray-900 font-semibold bg-white h-[40px] rounded-md border-transparent w-[170px] flex justify-center items-center gap-4 ">
            <AiOutlineUser />
            <span>sign in</span>
          </button>
          <button className=" capitalize text-gray-900 font-semibold bg-white h-[40px] rounded-md border-transparent w-[170px]  flex justify-center items-center gap-4 ">
            <GoLock /> <span> register</span>
          </button>
        </main>
        <button
          className=" capitalize text-gray-900 font-semibold bg-white rounded-md border-transparent md:p-[0.7rem] p-[0.3rem] md:w-[120px] w-[100px] text-center lg:hidden "
          onClick={handleMobileNav}
        >
          menu
        </button>
      </div>
      {mobileNav && (
        <section className=" h-full md:w-[60%] w-full z-30 flex flex-col justify-between right-0  bg-white fixed top-0 bottom-0 shadow-slate-700 shadow-2xl">
          <main className=" flex flex-col">
            <header>
              <IoIosCloseCircleOutline
                className=" text-gray-900 text-5xl float-right my-5 mx-5"
                onClick={handleMobileNav}
              />
            </header>
            <ul className="">
              {nav_links.map((link) => (
                <div key={link.id}>
                  <li key={link.id} onClick={() => handleMenuClick(link?.id)}>
                    <Link
                      href={link.route}
                      className=" flex capitalize justify-between gap-4 items-center w-full mt-8 px-4 py-3 hover:bg-neutral-200 rounded-tr-md rounded-br-md  "
                    >
                      <h5> {link.name}</h5>
                      {link.children && (
                        <span>
                          {openMenus?.id === link.id ? (
                            <IoIosArrowDown className=" font-semibold text-4xl" />
                          ) : (
                            <IoIosArrowForward className=" font-semibold text-4xl" />
                          )}
                        </span>
                      )}
                    </Link>
                    {link.children && openMenus?.id === link.id && (
                      <div className="">
                        {link.children.map((child) => (
                          <li key={child.route}>
                            <Link
                              href={child.route}
                              onClick={handleMobileNav}
                              className=" text-[1.2rem] pl-5 capitalize   "
                            >
                              <p className=" text-[1.1rem] py-3 px-4 hover:bg-neutral-200 rounded-tr-md rounded-br-md">
                                {" "}
                                {child.name}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </div>
                    )}
                  </li>
                </div>
              ))}
            </ul>
          </main>
          <main className=" gap-3  flex justify-center my-10">
            <button className=" capitalize bg-neutral-700 font-semibold text-white h-[40px] rounded-md border-transparent w-[170px] flex justify-center items-center gap-4 ">
              <AiOutlineUser />
              <span> sign in</span>
            </button>
            <button className=" capitalize bg-neutral-700 font-semibold text-white h-[40px] rounded-md border-transparent w-[170px] flex justify-center items-center gap-4 ">
              <GoLock />
              <span>register</span>
            </button>
          </main>
          <footer className=" text-center">
            <p className=" text-[1rem] px-2 py-6">
              Page Assest Managment 2022 All Rights Reserved
            </p>
          </footer>
        </section>
      )}
    </main>
  );
};

export default Header;
