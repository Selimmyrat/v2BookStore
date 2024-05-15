import { useLoaderData } from "react-router-dom";
import BooksItem from "./BooksItem";

export default function BooksDetail() {
  const newsDetailData = useLoaderData();
  // const firstElem = newsDetailData.books[0]
  console.log(newsDetailData);
  return <BooksItem booksItem={newsDetailData} />;
}

export async function loader({params}) {
  const id = params.booksId;
  console.log(id)
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
  console.log(response)
  return response;
}

// export async function loader({ params }) {
//   const id = params.booksId;
//   const response = await fetch("http://192.168.0.215:8001/api/books/" + id);
//   return response;
// }

// export async function loader({params}) {
//   const id = params.booksId;
//   const response = await fetch("https://tmcell.tm/api/api/v1/home/news/" + id);
//   return response;
// }
