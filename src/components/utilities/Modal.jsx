"use client";
import { useApiStore } from "../../provider/redux/apiMovies";
import { useEffect } from "react";

const Modal = () => {
  const { movie, fetchApi } = useApiStore();
  console.log(movie);

  useEffect(() => {
    fetchApi("top/manga");
  }, [fetchApi]);

  return (
    <div>
      <h1>Anime List</h1>
      <ul>
        {movie.map((anime) => (
          <li key={anime.mal_id}>{anime.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Modal;
