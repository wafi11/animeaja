"use client";
import Link from "next/link";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const SliderAnime = ({ api }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const elementRef = useRef();

  return (
    <div className="max-w-[90%] mx-auto ">
      <Slider {...settings}>
        {api?.map((d) => (
          <Link
            key={d.mal_id}
            href={`/anime/${d.mal_id}`}
            className=" h-full text-black hover:bg-gray-500 ">
            <Image
              src={d.images.jpg.image_url}
              alt="../"
              width={100}
              height={50}
              className="max-h-[500px] w-full object-center"
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default SliderAnime;
