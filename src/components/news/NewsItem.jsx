export default function NewsItem({ newsItem }) {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row mt-52">
      <div className="basis-4/12 w-full">
        <div className="w-full p-5 rounded-2xl">
          <img
            className="w-full rounded-xl"
            src={`https://tmcell.tm/api/api/img/news/${newsItem.news_img}`}
            alt={newsItem.title_tm}
          />
        </div>
      </div>
      <div className="basis-8/12 w-full">
        <h1 className="text-xl font-bold mb-4">{newsItem.title_tm}</h1>
        <div className="mt-5">
          <p dangerouslySetInnerHTML={{ __html: newsItem.description_tm }}></p>
        </div>
      </div>
    </div>
  );
}
