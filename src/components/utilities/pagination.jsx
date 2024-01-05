import React from "react";

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
    <div className="text-white">
      {page > 1 ? <button onClick={prevPage}>Previous</button> : null}
    </div>
  );
};

export default Pagination;
