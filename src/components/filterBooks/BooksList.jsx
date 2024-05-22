// import { Link } from "react-router-dom";

// import { IconSortDescending } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import Pagination from "./pagination";

import { IconSearch } from "@tabler/icons-react";

import "./filterBooks.module.css";

export default function BooksList() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("JS");
  const [books, setBooks] = useState([]);
  const [totalBookCount, setTotalBookCount] = useState();
  const [itemOffset, setItemOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCbQRpeKJTIOHfIww1nJ9kfn9JncJgpREQ&maxResults=${itemsPerPage}&startIndex=${itemOffset}`
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

  const itemsPerPage = 10;

  const handleItemOffset = (offset) => {
    setItemOffset(offset);
  };

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    handleItemOffset(newOffset);
  };

  return (
    <div className="ml-5">
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
        <Pagination
          itemOffset={itemOffset}
          // handleOffset={handleItemOffset}
          totalCountBook={totalBookCount}
          data={books}
          itemsPerPage={itemsPerPage}
          handlePageClick={handlePageClick}
        />
      )}
    </div>
  );
}
