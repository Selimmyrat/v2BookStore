import { useState, useEffect } from "react";


export default function Search() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("JS");
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCbQRpeKJTIOHfIww1nJ9kfn9JncJgpREQ&maxResults=40&startIndex=0`
    )
      .then((res) => res.json())
      .then((result) => {
        setBooks(result.items);
      })
      .catch((error) => alert(error.message));
  }, [query]);
  console.log(books);

  const getSearch = (e) => {
    e.preventDefault();

    if (search !== "") {
      setQuery(search);
      setSearch("");
    }
  };
  return (
    <form onSubmit={getSearch}>
      <input
        type="text"
        placeholder="Search Book..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button type="submit">Gozle</button>
    </form>
  );
}
