"use client";
import Pagination from "@/components/utilities/Pagination";
import { getTopMovies } from "@/libs/requests";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const moviesList = await getTopMovies("top/manga", `page=${page}`);
    console.log(setTopAnime(moviesList));
    setTopAnime(moviesList);
  };

  useEffect(() => {
    fetchData;
  }, [page]);
  return (
    <div className="bg-blue-500">
      <div className="min-w-full h-full text-white">
        <h1 className="text-4xl font-bold text-center py-4">Trending Manga</h1>
        <button
          className="text-4xl font-bold text-center py-4"
          onClick={() => fetchData(topAnime)}>
          Trending Manga
        </button>
        <div className="grid grid-cols-3 sm;grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {topAnime.data?.map((item, index) => {
            return (
              <Link href={`/anime/${item.mal_id}`} key={index}>
                <div className="w-full px-3">
                  <Image
                    src={item.images.jpg.image_url}
                    width={200}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                  <p className="py-2 text-lg break-words">{item.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <Pagination
          page={page}
          lastPage={topAnime.pagination?.last_visible_page}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default page;
