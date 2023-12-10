"use client";
import ListAnime from "@/components/listAnime";
import HeaderMenu from "@/components/utilities/headerMenu";
import Pagination from "@/components/utilities/pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../../libs/api";
import { useRouter } from "next/navigation";

const Page = () => {
  const [page, setPage] = useState(1);
  const [trendingAnime, setTrendingAnime] = useState([]);
  const router = useRouter();

  const fetchData = async () => {
    const response = await getAnimeResponse("top/manga", `page=${page}`);
    setTrendingAnime(response);
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };
  return (
    <>
      <HeaderMenu title={` Top Manga `} />
      <ListAnime api={trendingAnime} />
      <Pagination
        page={page}
        lastPage={trendingAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
      {/* <button className="text-color-primary" onClick={handleBack}>
        Back
      </button> */}
    </>
  );
};

export default Page;
