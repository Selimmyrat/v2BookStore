import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

import coverNotFound from "../../assets/images/coverNotFound.jpg";

export default function Pagination({ data, total, itemOffset, handleOffset }) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 30;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data);
    setPageCount(Math.ceil(total / itemsPerPage));
  }, [itemOffset, itemsPerPage, data, total]);
  
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    handleOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-row flex-wrap p-4 mt-10 gap-8 justify-center">
        {currentItems.map((book, key) => {
          return (
            <div
              className="relative max-w-48 max-h-96 rounded-xl overflow-hidden text-center cursor-pointer border p-3 hover:bg-purple-100"
              key={key}
            >
              <Link to={`/books/${book.id}`}>
                <div className="h-64 rounded-xl">
                  <img
                    className="w-full h-full rounded-xl "
                    src={
                      book.volumeInfo.imageLinks?.smallThumbnail ??
                      coverNotFound
                    }
                    alt={book.volumeInfo.title}
                  />
                </div>
                <div className="overflow-hidden">
                  <h1 className="font-semibold text-lg px-2 mt-2 line-clamp-2 overflow-hidden whitespace-nowrap text-wrap">
                    {book.volumeInfo.title}
                  </h1>
                  <p className="font-thin text-purple-700 text-sm uppercase">
                    {book.volumeInfo.categories}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <p>{`Total books is: ${total}`}</p>
      <div className="flex flex-row justify-between mt-3">
        <p>{`Showing ${itemOffset} from  ${itemsPerPage + itemOffset}`}</p>
        {loading ? (
          <div className="flex justify-center items-center bg-white mt-10">
            <button
              type="button"
              className="flex flex-row justify-center items-center"
              disabled
            >
              <svg
                className="animate-spin -ml-1 mr-3 h-10  w-10 text-purple-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Loading...
            </button>
          </div>
        ) : (
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName="flex flex-row"
            pageLinkClassName="hover:bg-purple-600 text-purple-600 font-semibold hover:text-white rounded-md px-3 py-1 mx-1"
            activeLinkClassName="bg-purple-600 text-white hover:bg-purple-600 font-semibold hover:text-white rounded-md px-3 py-1"
            previousLinkClassName="bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white rounded-md px-3 py-1 mr-2"
            nextLinkClassName="bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white rounded-md px-3 py-1 mr-2"
          />
        )}
      </div>
    </>
  );
}
