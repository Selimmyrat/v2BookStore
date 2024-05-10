import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

import { Link } from "react-router-dom";
// import { useEffect } from "react";

export default function BookSliderList({ booksData }) {
  return (
    <div className="mt-10 container mx-auto flex flex-col">
      <div className="flex flex-row justify-between">
        <span className="text-3xl font-semibold">Books on Sale</span>
        <div className="relative"></div>
      </div>
      <div className="items-center">
        <Splide
          options={{
            rewind: true,
            perPage: 6,
            breakpoints: {
              640: {
                perPage: 2,
              },
            },
            arrows: false,
            gap: 5,
            padding: { right: 25 },
            pagination: false,
          }}
          aria-label="My Favorite Images"
        >
          {booksData &&
            booksData.map((books, index) => (
              <SplideSlide key={index} className="cursor-grab">
                <Link to={`/books/${books.id}`}>
                  <div className="flex flex-col" key={books.id}>
                    <div className="relative h-72 w-52">
                      <img
                        className="cursor-pointer w-full h-full rounded-xl"
                        src={books.files}
                        alt={books.name}
                      />
                      <span className="absolute top-8 bg-red-500 font-semibold text-xl text-white px-5 py-1 rounded-r-xl">30%</span>
                    </div>
                    <h1 className="text-xl font-semibold mt-2">{books.name}</h1>
                    <div key={books.category.id}>
                      <p>{books.category.name}</p>
                    </div>
                  </div>
                </Link>
              </SplideSlide>
            ))}

          {/* <SplideSlide className="cursor-grab">
            <img className="cursor-pointer" src={book2} alt="" />
          </SplideSlide>
          <SplideSlide className="cursor-grab">
            <img className="cursor-pointer" src={book2} alt="" />
          </SplideSlide>
          <SplideSlide className="cursor-grab">
            <img className="cursor-pointer" src={book2} alt="" />
          </SplideSlide>
          <SplideSlide className="cursor-grab">
            <img className="cursor-pointer" src={book2} alt="" />
          </SplideSlide>
          <SplideSlide className="cursor-grab">
            <img className="cursor-pointer" src={book2} alt="" />
          </SplideSlide>
          <SplideSlide className="cursor-grab">
            <img className="cursor-pointer" src={book2} alt="" />
          </SplideSlide> */}
        </Splide>
      </div>
    </div>
  );
}
