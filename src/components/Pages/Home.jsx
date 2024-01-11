"use client";
import { useApiStore } from "@/provider/redux/apiMovies";
import React, { useEffect } from "react";
import SliderAnime from "../SliderAnime";
import Header from "../SliderAnime/header";
import Sliders from "../SliderAnime/slider";
const Home = () => {
  const { fetchApi, movie } = useApiStore();
  console.log(movie);

  useEffect(() => {
    fetchApi("top/manga");
  }, [fetchApi]);
  return (
    <>
      <section>
        <SliderAnime api={movie} />
        <Header title={"Paling Popular"} />
        <Sliders api={movie} />
      </section>
    </>
  );
};

export default Home;
