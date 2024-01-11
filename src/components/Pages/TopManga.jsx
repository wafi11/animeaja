"use client";
import Pagination from "@/components/utilities/Pagination";
import { getTopMovies } from "@/libs/requests";
import { useApiStore } from "@/provider/redux/apiMovies";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const TopManga = () => {
  const [page, setPage] = useState(1);
  const { fetchApi, movie } = useApiStore();

  useEffect(() => {
    fetchApi("top/manga");
  }, [page]);

  return (
    <div className=" text-white px-4">
      <h1 className="text-4xl font-bold text-center py-4">Trending Manga </h1>
      <div className="grid grid-cols-3 sm;grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movie?.map((item) => {
          return (
            <Link href={`/anime/${item.mal_id}`} key={item.mal_id}>
              <Image
                src={item.images.jpg.image_url}
                alt="../"
                width={200}
                height={100}
                className="w-full object-cover max-h-64"
              />
              <p className="py-2 text-lg break-words">{item.title}</p>
            </Link>
          );
        })}
      </div>
      <Pagination
        page={page}
        lastPage={movie.pagination?.last_visible_page}
        setPage={setPage}
      />
    </div>
  );
};

export default TopManga;
