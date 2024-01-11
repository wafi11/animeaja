import React from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const nextPage = () => {
    setPage((e) => e + 1);
    scrollTop();
  };
  const prevPage = () => {
    setPage((e) => e - 1);
    scrollTop();
  };

  return (
    <div className="text-white text-2xl justify-center text-center flex flex-row gap-8 mt-10">
      {page <= 1 ? null : (
        <button onClick={prevPage}>
          <GrLinkPrevious />
        </button>
      )}
      <p>{page}</p>
      {page >= lastPage ? null : (
        <button onClick={nextPage}>
          <GrLinkNext />
        </button>
      )}
    </div>
  );
};

export default Pagination;
