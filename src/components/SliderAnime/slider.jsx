"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { HiPlus } from "react-icons/hi2";

const Sliders = ({ api }) => {
  // const elementRef = useRef();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-[90%] mx-auto h-[300px]">
      <div className="mt-3 ">
        <Slider {...settings}>
          {api?.map((d) => (
            <Link
              key={d.mal_id}
              href={`/anime/${d.mal_id}`}
              className="h-full text-black hover:bg-gray-500 ">
              <Image
                src={d.images.jpg.image_url}
                alt="../"
                width={100}
                height={80}
                className="max-h-40 p-3 w-full"
              />
              <p
                className="text-sm font-medium p-2 overflow-ellipsis whitespace text-white
              break-words line-clamp-2 text-start ">
                {d.title}
              </p>
              <button className="flex justify-between bg-green-600 mt-auto px-2">
                Tonton Nanti
                <HiPlus size={20} />
              </button>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;
