import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

export default function NewsList({ newsData }) {
  return (
    <div className="container mx-auto mt-28 mb-20">
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-3xl font-semibold mb-10">Latest News</h1>
        </div>
        <div>
          <button className="hover:bg-purple-200 hover:text-purple-600 bg-purple-600 text-white rounded-md px-5 py-1 mr-4">
            {" "}
            View More{" "}
          </button>
        </div>
      </div>
      <Splide
        options={{
          rewind: true,
          rewindByDrag: true,
          rewindSpeed: 2000,
          perPage: 5,
          breakpoints: {
            1400: {
              perPage: 4,
            },
            1140: {
              perPage: 3,
            },
            840: {
              perPage: 2,
            },
          },
          arrows: false,
          gap: { right: 20 },
          padding: { right: 25 },
          pagination: false,
          type: "loop",
        }}
        aria-label="My Favorite Images"
      >
        {newsData &&
          newsData.map((news, index) => (
            <SplideSlide key={index} className="cursor-grab">
              <div key={news.id} className="flex flex-col mr-10">
                <div className="w-72">
                  <div className="h-48 w-full rounded-xl">
                    <img
                      className="w-full h-full rounded-xl object-cover"
                      src={`https://tmcell.tm/api/api/compress/news/${news.news_img}`}
                      alt={news.title_tm}
                    />
                  </div>
                  <h1 className="text-xl font-semibold mt-2">
                    {news.title_tm}
                  </h1>
                  <div className="h-10 text-sm text-gray-500 mt-2 truncate">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: news.description_tm,
                      }}
                    ></p>
                  </div>
                  <Link
                    className="text-sm text-blue-500"
                    to={`/news/${news.id}`}
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </SplideSlide>
          ))}
      </Splide>
    </div>
  );
}
