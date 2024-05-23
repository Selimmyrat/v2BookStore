import coverNotFound from "../../assets/images/coverNotFound.jpg";

import {
  // IconStarFilled,
  // IconBrandFacebookFilled,
  // IconBrandWhatsapp,
  // IconMail,
  // IconMessage,
  // IconThumbUp,
  IconBook,
  // IconBolt,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function BooksItem({ booksItem }) {

  return (
    <div className="container mx-auto flex flex-col lg:flex-row mt-52">
      <div className="basis-4/12 w-full">
        <div className="w-full p-5 rounded-2xl">
          <img
            className="w-full rounded-xl"
            src={(booksItem.volumeInfo.imageLinks.medium || booksItem.volumeInfo.imageLinks.small || booksItem.volumeInfo.imageLinks.large || booksItem.volumeInfo.imageLinks.thumbnail )  ?? coverNotFound}
            alt={booksItem.volumeInfo.title}
          />
        </div>
      </div>
      <div className="basis-8/12 w-full">
        <h1 className="text-xl font-bold mb-4">{booksItem.volumeInfo.title}</h1>
        <div className="mt-5">
          <div className="flex flex-row justify-between mt-5">
            <div className="flex flex-col">
              <p className=" text-gray-400 text-sm">Writen by</p>
              <h1 className="font-semibold text-base">
                {booksItem.volumeInfo.authors.join(", ")}
              </h1>
            </div>
            <div className="flex flex-col">
              <p className=" text-gray-400 text-sm">Publisher</p>
              <h1 className="font-semibold text-base">
                {booksItem.volumeInfo.publisher}
              </h1>
            </div>
            <div className="flex flex-col">
              <p className=" text-gray-400 text-sm">Page</p>
              <h1 className="font-semibold text-base">
                {booksItem.volumeInfo.pageCount}
              </h1>
            </div>
            <div className="flex flex-row">
              {/* <button className="hover:bg-purple-600 hover:text-white bg-purple-200 text-purple-600 rounded-xl px-4 py-1 mr-4 flex items-center gap-2 text-sm">
                <IconBolt stroke={5} className="w-4" />
                <h1 className="uppercase font-bold">Free Shipping</h1>
              </button> */}
              <Link to={booksItem.volumeInfo.previewLink} target="__blank">
                <button className="hover:bg-gray-200 hover:text-gray-600 bg-green-200 text-green-600 rounded-xl px-4 py-1 mr-4 flex items-center gap-2 text-sm">
                  <IconBook stroke={2} className="w-4" />
                  <h1 className="uppercase font-bold">Read</h1>
                </button>
              </Link>
            </div>
          </div>
          <div className="border-t-4 border-gray-300 border-dashed my-8"></div>
          <div>
            <p
              dangerouslySetInnerHTML={{
                __html: booksItem.volumeInfo.description,
              }}
            ></p>
          </div>
          {/* <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <div className="">
                <span className="font-bold text-2xl">$15,63</span>{" "}
                <span className="line-through text-sm">$16,99</span>{" "}
                <span className="bg-red-500 px-2 rounded-lg text-sm text-white ">
                  2%
                </span>
              </div>
              <div></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
