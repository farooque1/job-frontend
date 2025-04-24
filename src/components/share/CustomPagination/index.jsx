import React from "react";
import "./CustomPagination.scss";

const CustomPagination = ({
  totalPosts = 0,
  postsPerPage,
  onPeginationHandler = () => {},
  itemsPerPage = 10,
  currentPage = 1,
  pagination = { currentPage: 0, totalResult: 10, perPage: 10 },
}) => {
  const totalPages = Math.ceil(pagination?.totalResult / pagination?.perPage);
  const totalResultsDigits = pagination?.totalResult?.toString().length;
  // const totalPages = Math.ceil(totalPosts / itemsPerPage);
  // const totalResultsDigits = totalPosts.toString().length;

  const handlePageChange = (pageNumber) => {
    onPeginationHandler(pageNumber);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (
      let i = Math.max(1, pagination?.currentPage - 2);
      i <= Math.min(totalPages, pagination?.currentPage + 2);
      i++
    ) {
      pageNumbers.push(i);
    }

    if (pagination?.currentPage - 2 > 1) {
      pageNumbers.unshift("...");
    }

    if (pagination?.currentPage + 2 < totalPages) {
      pageNumbers.push("...");
    }

    if (!pageNumbers.includes(totalPages)) {
      pageNumbers.push(totalPages);
    }

    if (!pageNumbers.includes(1)) {
      pageNumbers.unshift(1);
    }

    return pageNumbers;
  };

  return (
    <nav className=" custom-pagination-main-container">
      <div className="d-flex justify-content-between align-items-center ">
        <div className="">
          {pagination?.totalResult ? (
            <p className="mb-0 text-nowrap">
              Showings{" "}
              {pagination?.currentPage > 0
                ? (pagination?.currentPage - 1) * (pagination?.perPage || 10) +
                  1
                : 0}{" "}
              -{" "}
              {pagination?.currentPage * (pagination?.perPage || 10) <
              pagination?.totalResult
                ? pagination?.currentPage * (pagination?.perPage || 10)
                : pagination?.totalResult}{" "}
              of{" "}
              {(pagination?.totalResult || "0")
                .toString()
                .padStart(totalResultsDigits, "0")}{" "}
              results
            </p>
          ) : (
            <p>No Data</p>
          )}
        </div>
      </div>
      <ul className="page navigation pagination m-0 p-0">
        {getPageNumbers().map((pageNumber, index) => (
          <li
            key={index}
            className={`page-item ${
              pageNumber === pagination?.currentPage ? "active" : ""
            }`}
          >
            {pageNumber === "..." ? (
              <button className="page-link" disabled>
                {pageNumber}
              </button>
            ) : (
              <button
                className="page-link"
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CustomPagination;