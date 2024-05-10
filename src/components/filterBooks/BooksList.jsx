import { Link } from "react-router-dom";

import { IconSortDescending } from "@tabler/icons-react";

export default function BooksList({ booksData }) {
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

      <div className="flex flex-row flex-wrap p-4 mt-10 gap-8">
        {booksData &&
          booksData.map((books) => (
            <div
              className="relative max-w-48 max-h-96 rounded-xl overflow-hidden text-center cursor-pointer border p-3"
              key={books.id}
            >
              <Link to={`/books/${books.id}`}>
                <div className="h-64 rounded-xl">
                  <img
                    className="w-full h-full rounded-xl object-cover"
                    src={books.files}
                    alt={books.name}
                  />
                </div>
                <div className="overflow-hidden">
                  <h1 className="font-semibold text-lg px-2 mt-2 line-clamp-2 overflow-hidden whitespace-nowrap text-wrap">
                    {books.name}
                  </h1>
                  <p  className="font-thin text-purple-700 text-sm uppercase">
                    {books.category.name}
                  </p>
                </div>
              </Link>
            </div>
          ))}
      </div>
      <div className="flex flex-row justify-between">
        <span>Showing 12 from 50</span>
        <div className="flex flex-row">
          <button className="bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white rounded-md px-5 py-1 mr-4">
            {" "}
            Prev{" "}
          </button>
          <div className="border rounded-md">
            <button className="bg-purple-600 text-white hover:bg-purple-600 font-semibold hover:text-white rounded-md px-3 py-1 ">
              1
            </button>
            <button className="hover:bg-purple-600 text-purple-600 font-semibold hover:text-white rounded-md px-3 py-1 mx-1">
              2
            </button>
            <button className="hover:bg-purple-600 text-purple-600 font-semibold hover:text-white rounded-md px-3 py-1 ">
              3
            </button>
          </div>

          <button className="bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white rounded-md px-5 py-1 ml-4">
            Next{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
