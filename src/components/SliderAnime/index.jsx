"use client";
import React, { useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const SliderAnime = ({ api }) => {
  const elementRef = useRef();

  return (
    <div
      className="flex overflow-x-auto w-full
    scrollbar-hide scroll-smooth"
      ref={elementRef}>
      {api.data?.map((item, index) => (
        <img
          src={item.images.jpg.image_url}
          key={index}
          alt="item.images.jpg.images_url"
          className="min-w-full  md:h-[450px] object-cover object-middle-top
           mr-5 rounded-md hover:border-[4px]
          border-gray-400 transition-all duration-100 ease-in-out"
        />
      ))}
    </div>
  );
};

export default SliderAnime;
