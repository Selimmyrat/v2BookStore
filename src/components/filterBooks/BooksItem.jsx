import foto from '../../assets/images/coverNotFound.jpg'

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
  console.log(foto)

  return (
    <div className="container mx-auto flex flex-col lg:flex-row mt-52">
      <div className="basis-4/12 w-full">
        <div className="w-full p-5 rounded-2xl">
          <img
            className="w-full rounded-xl"
            src={booksItem.volumeInfo.imageLinks.medium}
            alt={booksItem.volumeInfo.title}
            onError={event => {
              event.target.src = foto
              event.onerror = null
            }}
          />
        </div>
      </div>
      <div className="basis-8/12 w-full">
        <h1 className="text-xl font-bold mb-4">{booksItem.volumeInfo.title}</h1>
        {/* <div className="flex flex-col md:flex-row justify-between">
          <div className="basis-6/12 flex flex-row gap-x-4">
            <div className="flex items-center justify-center gap-1 p-1">
              <IconStarFilled className="text-amber-500 w-4" />
              <IconStarFilled className="text-amber-500 w-4" />
              <IconStarFilled className="text-amber-500 w-4" />
              <IconStarFilled className="text-amber-500 w-4" />
              <IconStarFilled className="text-gray-200 w-4" />
              <h1 className="ml-2 text-sm">4.0</h1>
            </div>
            <div className="flex flex-row justify-between">
              <div className="text-nowrap text-sm mr-3 flex items-center">
                <IconMessage className="text-purple-700 w-4 mr-1" />
                <p>235 Reviews</p>
              </div>
              <div className="flex items-center">
                <IconThumbUp className="text-purple-700 w-4 mr-1" />
                <p className="text-nowrap text-sm">456k Like</p>
              </div>
            </div>
          </div>
          <div className="basis-6/12 flex flex-row justify-right ml-4">
            <button className="hover:bg-blue-200 hover:text-blue-600 bg-blue-700 text-white rounded-xl px-4 py-1 mr-4 flex items-center gap-2 text-sm">
              <IconBrandFacebookFilled className="w-4" />
              Facebook
            </button>
            <button className="hover:bg-green-200 hover:text-green-600 bg-green-500 text-white rounded-xl px-4 py-1 mr-4 flex items-center gap-2 text-sm">
              <IconBrandWhatsapp stroke={2} className="w-4" />
              Whatsapp
            </button>
            <button className="hover:bg-gray-200 hover:text-gray-600 bg-gray-400 text-white rounded-xl px-4 py-1 mr-4 flex items-center gap-2 text-sm">
              <IconMail stroke={2} className="w-4" />
              Email
            </button>
          </div>
        </div> */}
        <div className="mt-5">
          {/* <p>{booksItem.Description}</p> */}
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
