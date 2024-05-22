import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

import coverNotFound from "../../assets/images/coverNotFound.jpg";

export default function Pagination({
  data,
  totalCountBook,
  itemOffset,
  itemsPerPage,
  handlePageClick
}) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setCurrentItems(data);
    setPageCount(Math.ceil(totalCountBook / itemsPerPage));
  }, [itemsPerPage, data, totalCountBook]);

  // const handlePageClick = (event) => {
  //   const newOffset = event.selected * itemsPerPage;
  //   handleOffset(newOffset);
  // };

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
      <p>{`Total books is: ${totalCountBook}`}</p>
      <div className="flex flex-row justify-between mt-3">
        <p>{`Showing ${itemOffset} from  ${itemsPerPage + itemOffset}`}</p>
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
      </div>
    </>
  );
}
