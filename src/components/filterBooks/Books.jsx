import { useLoaderData } from "react-router-dom";
import BooksList from "./BooksList";

export default function Books() {
  const booksData = useLoaderData();
  return <BooksList booksData={booksData} />;
}
