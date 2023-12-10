"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searching = useRef();
  const router = useRouter();

  // salah satu cara untuk enter saat searching
  // const handleEnter = (e) => {
  //     e.preventDefault()
  //     const key = searching.current.value
  //     router.push(`/search/${key}`)
  // }
  // useEffect(()=> {
  //     const keyDownHandler = (e) => {
  //         if (e.key === 'Enter'){
  //             e.preventDefault()
  //             // login press enter
  //             handleEnter()
  //         }
  //     }
  //     document.addEventListener('keydown',keyDownHandler)
  //     return () => {
  //         document.removeEventListener('keydown',keyDownHandler)
  // }
  // },[])

  const handleSearch = (event) => {
    const keyword = searching.current.value;
    if (keyword.length <= 2) {
      return;
    }
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="relative ">
      <input
        placeholder="Search ...."
        className="rounded-full p-2 w-full mx-2"
        ref={searching}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2 end-1 right-4" onClick={handleSearch}>
        <MagnifyingGlass size={27} />
      </button>
    </div>
  );
};
export default InputSearch;
