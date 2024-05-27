import { useLoaderData } from "react-router-dom";

import NewsItem from "./NewsItem";

export default function NewsDatail() {
  const newsDetailData = useLoaderData();
  const firstElem = newsDetailData.news[0]
  return <NewsItem newsItem={firstElem} />;
}

export async function loader({params}) {
  const id = params.newsId;
  const response = await fetch("https://tmcell.tm/api/api/v1/home/news/" + id);
  return response;
}
