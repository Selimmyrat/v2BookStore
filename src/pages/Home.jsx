import FilterBooks from "../components/filterBooks/filterBooks.jsx";
import News from "../components/news/News";

export default function Home() {
  return (
    <>
      <FilterBooks />
      <News />
    </>
  );
}

export async function loader() {
  const response = await fetch(
    "http://192.168.0.215:8001/api/books"
  );
  const resData = await response.json();
  return resData.books;
}

// export async function loader() {
//   const response = await fetch(
//     "https://tmcell.tm/api/api/v1/home/banner_news/"
//   );
//   const resData = await response.json();
//   return resData.all_news;
// }