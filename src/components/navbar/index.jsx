"use client";

import Link from "next/link";
import InputSearch from "./inputSearch";
import UserActionButton from "./userActionButton";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-20 mx-auto px-4  bg-color-accent">
      <Link href="/" className="text-3xl font-bold text-color-primary ml-4 ">
        ANIMEAJA
      </Link>
      <ul className="hidden items-center sm:flex md:flex">
        <Link
          className="mx-3 text-sm font-xl px-2 text-color-primary"
          href={`/`}>
          Home
        </Link>
        <Link
          className="mx-3 text-sm font-xl px-2 text-color-primary"
          href={`/topmanga`}>
          Top Manga
        </Link>
        <Link
          className="mx-3 text-sm font-xl px-2 text-color-primary"
          href={`/topanime`}>
          Top Anime
        </Link>
        <li className="mx-3 text-sm font-xl px-2 text-color-primary">
          Popular
        </li>
      </ul>
      <InputSearch />
      <UserActionButton />
      {/* <div>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={25} />}
      </div>
      <div className="fixed left-0 top-0 w-[40%] h-full border-r border-r-color-secondary bg-color-dark">
        <h1 className="w-full text-3xl font-bold text-color-accent m-4 ">
          ANIMEAJA
        </h1>
        <div className="relative w-[70%] pt-3 mx-3">
          <input
            placeholder="Search ...."
            className="rounded-xl p-2 w-full mx-2"
            // ref={searching}
            // onKeyDown={handleSearch}
          />
          <button
            className="absolute top-5 end-1 right-4"
            // onClick={handleSearch}
          >
            <FaSearch size={27} />
          </button>
        </div>
        <ul className="pt-10 uppercase text-color-accent grid font-bold ">
          <Link className="p-4 border-b border-color-secondary " href={`/`}>
            Home
          </Link>
          <Link
            className="p-4 border-b border-color-secondary"
            href={`/topmanga`}>
            Top Manga
          </Link>
          <Link
            className="p-4 border-b border-color-secondary"
            href={`/topanime`}>
            Top Anime
          </Link>
          <Link className="p-4 border-b border-color-secondary" href={"/"}>
            Popular
          </Link>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
