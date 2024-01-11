"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { HiSearch } from "react-icons/hi";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    const keyword = searchRef.current.value;
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="hidden sm:flex relative">
      <input
        type="text"
        placeholder="Search Movie..."
        className="rounded-lg px-3 py-2 focus:outline-none min-w-[80%] hidden sm:block"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button
        className="absolute right-4 top-1 border-gray-100 border-[3px] rounded-full"
        onClick={handleSearch}>
        <HiSearch size={28} />
      </button>
    </div>
  );
};

export default InputSearch;
