// import { useLoaderData } from "react-router-dom";
import NewsList from "./NewsList";
import { useEffect, useState } from "react";

export default function News() {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    fetch('https://tmcell.tm/api/api/v1/home/banner_news/')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNewsData(data.all_news)
      });
  }, []);
  
  return <NewsList newsData={newsData} />;
}