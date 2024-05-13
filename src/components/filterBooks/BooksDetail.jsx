import { useLoaderData } from "react-router-dom";
import BooksItem from "./BooksItem";

export default function BooksDetail() {
  const newsDetailData = useLoaderData();
  // const firstElem = newsDetailData.books[0]
  console.log(newsDetailData.book_detail);
  return <BooksItem booksItem={newsDetailData.book_detail} />;
}

export async function loader({ params }) {
  const id = params.booksId;
  const response = await fetch("http://192.168.0.215:8001/api/books/" + id);
  return response;
}

// export async function loader({params}) {
//   const id = params.booksId;
//   const response = await fetch("https://tmcell.tm/api/api/v1/home/news/" + id);
//   return response;
// }
