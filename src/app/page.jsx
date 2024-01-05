import SliderAnime from "@/components/SliderAnime/index";
import { getTopMovies } from "@/libs/requests";
import Slider from "@/components/SliderAnime/slider";
import Header from "@/components/SliderAnime/header";

const Page = async () => {
  const movies = await getTopMovies("top/anime", "limit=10");
  console.log(movies);
  const moviesList = await getTopMovies("top/manga", "page=1");

  return (
    <>
      <section>
        <SliderAnime api={movies} />
        <Header title={"Paling Popular"} />
        <Slider api={moviesList} />
      </section>
    </>
  );
};

export default Page;
