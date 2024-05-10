import { useLoaderData } from "react-router-dom";
import BookSliderList from "./bookSliderList";

export default function BookSlider() {
  const booksData = useLoaderData();
  return <BookSliderList booksData={booksData} />;
}
