"use client";
import { dataNav } from "@/libs/data";
import Image from "next/image";
import NavbarItem from "./NavbarItem";
import Logo from "@/Assets/images/logo.png";
import { HiDotsVertical, HiPlus } from "react-icons/hi";
import { useState } from "react";
import icons from "@/Assets/images/icons.png";
import InputSearch from "./InputSearch";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="bg-blue-700">
      <div className="flex items-center justify-between p-5 text-color-primary">
        <div className="flex  gap-8 items-center">
          <Image
            src={Logo}
            alt=".../logo.png"
            className="w-[80px] md:w-[115px] object-cover"
            width={80}
            height={80}
          />
          <div className="hidden md:flex gap-8 ">
            {dataNav.map((item, index) => (
              <NavbarItem
                name={item.name}
                Icon={item.icon}
                key={index}
                linkhref={item.href}
              />
            ))}
          </div>
          {/* mobile */}
          <div className="flex md:hidden gap-5">
            {dataNav.map(
              (item, index) =>
                index < 3 && (
                  <NavbarItem name={""} Icon={item.icon} key={index} />
                )
            )}
            <div className="md:hidden" onClick={() => setNav(!nav)}>
              <NavbarItem name={""} Icon={HiDotsVertical} />
              {nav ? (
                <div
                  className="absolute mt-3 bg-[#121212] 
        border-[1px] text-color-primary p-3 px-5 py-4 ">
                  {dataNav.map(
                    (item, index) =>
                      index > 2 && (
                        <NavbarItem
                          Icon={item.icon}
                          name={item.name}
                          key={index}
                        />
                      )
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-3 sm:gap-7">
          <InputSearch />
          <button className="text-white bg-blue-800 rounded-lg px-2">
            <HiPlus size={25} />
          </button>
          <Image
            src={icons}
            className="w-[40px] rounded-full "
            alt="../"
            width="auto"
            height="auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
