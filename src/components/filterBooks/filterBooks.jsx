import Books from "./Books.jsx";
import Filter from "./Filter.jsx";
// import BookSlider from "./bookSlider.jsx";

export default function FilterBooks() {
  return (
    <div className="container mx-auto mt-28">
      <div className="flex flex-row mt-10">
        <Filter />
        <Books />
      </div>
      {/* <BookSlider /> */}
    </div>
  );
}
