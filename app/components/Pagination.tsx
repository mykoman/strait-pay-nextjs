import React from "react";

const Pagination = ({ pagination }: { pagination: any }) => {
  const { currentPage, totalPages, hasNextPage, hasPrevPage } = pagination;

  return (
    <nav className="flex justify-center my-4">
      <ul className="flex pagination space-x-2">
        <li className={`page-item ${hasPrevPage ? "" : "disabled"}`}>
          <button
            className="page-link px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800"
            onClick={() => console.log("Previous page clicked")}
            disabled={!hasPrevPage}
          >
            Previous
          </button>
        </li>
        <li className="page-item">
          <span className="page-link px-3 py-1 bg-gray-200 text-gray-700 rounded-md">
            Page {currentPage} of {totalPages}
          </span>
        </li>
        <li className={`page-item ${hasNextPage ? "" : "disabled"}`}>
          <button
            className="page-link px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800"
            onClick={() => console.log("Next page clicked")}
            disabled={!hasNextPage}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
