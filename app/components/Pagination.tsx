import React from "react";
import { fetchTodos } from "../api/todo";
import { revalidatePath } from "next/cache";
//import { getTokenCookie } from "../utils/auth";

interface Pagination {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}
const Pagination = ({ pagination }: { pagination: any }) => {
  const { currentPage, totalPages, hasNextPage, hasPrevPage }: Pagination =
    pagination;

  let newPage = currentPage;
  const limit = 10; // default from api

  const handlePrevious = () => {
    if (currentPage > 1) {
      //const skip = limit * currentPage;
      const skip = limit * currentPage - 2;
      // await fetchTodos({ skip });
      revalidatePath("/todos");
    }
  };

  const handleNext = async () => {
    if (currentPage < totalPages) {
      const skip = limit * currentPage;
      revalidatePath("/todos");
    }
  };

  return (
    <nav className="flex justify-center my-4">
      <ul className="flex pagination space-x-2">
        <li className={`page-item ${hasPrevPage ? "" : "disabled"}`}>
          <button
            className="page-link px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800"
            onClick={handlePrevious}
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
            onClick={handleNext}
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
