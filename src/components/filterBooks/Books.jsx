// import { useLoaderData } from "react-router-dom";
import BooksList from "./BooksList";
import { useEffect, useState } from "react";

export default function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=java&key=AIzaSyCbQRpeKJTIOHfIww1nJ9kfn9JncJgpREQ`
    )
      .then((res) => res.json())
      .then((result) => {
        setBooks(result.items);
      })
      .catch((error) => alert(error.message));
  }, []);
  console.log(books)
  // const booksData = useLoaderData();
  return <BooksList booksData={books} />;
}
