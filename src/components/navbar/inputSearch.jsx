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
    <div className="flex relative px-3 sm:px-2">
      <input
        type="text"
        placeholder="Search Movie..."
        className="rounded-full px-3 py-1 focus:outline-none w-full"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute right-4 top-1" onClick={handleSearch}>
        <HiSearch size={28} />
      </button>
    </div>
  );
};

export default InputSearch;
