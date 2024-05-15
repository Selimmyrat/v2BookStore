// import { Link } from "react-router-dom";

import { IconSortDescending } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import Pagination from "./pagination";

import { IconSearch } from "@tabler/icons-react";

import './filterBooks.module.css'

export default function BooksList() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("JS");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCbQRpeKJTIOHfIww1nJ9kfn9JncJgpREQ&maxResults=40&startIndex=0`
    )
      .then((res) => res.json())
      .then((result) => {
        setBooks(result.items);
      })
      .catch((error) => alert(error.message));
  }, [query]);
  console.log(books);

  const getSearch = (e) => {
    e.preventDefault();

    if (search !== "") {
      setQuery(search);
      setSearch();
    }
  };

  // const booksData = useLoaderData();
  return (
    <div className="basis-9/12 ml-5">
      <h1 className="text-3xl mb-10">Books</h1>
      <div className="w-full flex flex-row justify-between border rounded-xl px-4 py-3">
        <div className="flex flex-row justify-center items-center">
          <p className="font-semibold mr-3 text-sm">Today</p>
          <p className="font-thin mr-3 text-sm">This Week</p>
          <p className="font-thin text-sm">This Month</p>
        </div>
        <div className="flex flex-row">
          <div className="relative" id="dropdownButtonFilter">
            <div className="flex flex-row items-center cursor-pointer">
              <IconSortDescending stroke={2} />
              <form>
                <select
                  id="countries"
                  className="block bg-transparent border-none outline-none focus:border-none"
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="rating">Rating</option>
                </select>
              </form>
            </div>
            <div
              id="dropdownFilter"
              className="border-[1px] border-gray-300 bg-white rounded-xl top-[20px] absolute w-[90px] text-center hidden"
            >
              <div className="cursor-pointer text-sm hover:bg-gray-300 hover:rounded-xl pt-2">
                Oldest
              </div>
              <div className="cursor-pointer text-sm hover:bg-gray-300 hover:rounded-xl py-1">
                Oldest
              </div>
              <div className="cursor-pointer text-sm hover:bg-gray-300 hover:rounded-xl pb-1">
                Oldest
              </div>
            </div>
          </div>
        </div>
      </div>

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
      <Pagination data={books} />
    </div>
  );
}
