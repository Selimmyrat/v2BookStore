// import { Link } from "react-router-dom";

// import { IconSortDescending } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
// import Pagination from "./pagination";

import coverNotFound from "../../assets/images/coverNotFound.jpg";

import { IconSearch } from "@tabler/icons-react";

import "./filterBooks.module.css";

export default function BooksList() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("JS");
  const [books, setBooks] = useState([]);
  const [totalBookCount, setTotalBookCount] = useState();
  const [itemOffset, setItemOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const scrollBooks = useRef(null);

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const [accordionOpen, setAccordionOpen] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${itemsPerPage}&startIndex=${itemOffset}&key=AIzaSyCbQRpeKJTIOHfIww1nJ9kfn9JncJgpREQ`
    )
      .then((res) => res.json())
      .then((result) => {
        setBooks(result.items);
        setTotalBookCount(result.totalItems);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, [query, itemOffset]);

  const getSearch = (e) => {
    e.preventDefault();
    if (search !== "") {
      setQuery(search);
    }
  };

  const itemsPerPage = 30;

  useEffect(() => {
    setCurrentItems(books);
    setPageCount(Math.ceil(totalBookCount / itemsPerPage));
  }, [itemsPerPage, books, totalBookCount]);

  const handlePageClick = (event) => {
    scrollBooks.current.scrollIntoView({ behavior: "smooth" });
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="basis-3/12 mr-5">
        <div className="w-full">
          <h1 className="text-3xl mb-10">Filter Option</h1>
          <div className="bg-white border rounded-xl mt-2 p-3">
            <button
              onClick={() => setAccordionOpen(!accordionOpen)}
              className="flex justify-between w-full"
            >
              <h1>Categories</h1>
              {accordionOpen ? <span>-</span> : <span>+</span>}
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${
                accordionOpen ? "block mt-3 border-t" : "hidden"
              }`}
            >
              <ul className="mt-2">
                {/* {categories.map((n, index) => (
            <Categories key={index} categories_name={n.name} />
          ))} */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" basis-9/12 ml-5" ref={scrollBooks}>
        <h1 className="text-3xl mb-10">Books</h1>
        <div className="border rounded-xl p-2 mt-3">
          <form onSubmit={getSearch}>
            <div className="flex flex-row ">
              <input
                className="outline-none w-full"
                type="search"
                placeholder="Search Book..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">
                <IconSearch stroke={2} />
              </button>
            </div>
          </form>
        </div>
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
          </>
        )}
        <p>{`Total books is: ${totalBookCount}`}</p>
        <div className="flex flex-row justify-between mt-3">
          <p>{`Showing ${itemOffset} from  ${itemsPerPage + itemOffset}`}</p>
          <ReactPaginate
            breakLabel="..."
            nextLabel="→"
            previousLabel="←"
            pageCount={pageCount}
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            containerClassName="flex flex-row"
            pageLinkClassName="hover:bg-purple-600 text-purple-600 font-semibold hover:text-white rounded-md px-3 py-1 mx-1"
            activeLinkClassName="bg-purple-600 text-white hover:bg-purple-600 font-semibold hover:text-white rounded-md px-3 py-1"
            previousLinkClassName="bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white rounded-md px-3 py-1 mr-2"
            nextLinkClassName="bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white rounded-md px-3 py-1 mr-2"
          />
        </div>
      </div>
    </>
  );
}
