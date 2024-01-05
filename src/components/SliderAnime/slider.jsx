"use client";

import React, { useEffect, useRef, useState } from "react";
import SliderCard from "./sliderCard";

const Slider = ({ api }) => {
  const elementRef = useRef();

  return (
    <div
      className="flex flex-row overflow-x-auto px-3 py-4 
    scrollbar-hide scroll-smooth relative"
      ref={elementRef}>
      {api.data?.map((item, index) => (
        <SliderCard movie={item} key={index} />
      ))}
    </div>
  );
};

export default Slider;
