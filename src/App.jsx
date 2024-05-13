import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import NewsDatailPage, {
  loader as newsDeatailLoader,
} from "./components/news/NewsDatail.jsx";
import Home, { loader as booksLoader } from "./pages/Home.jsx";
import News from "./components/news/News.jsx";
import Books from "./components/filterBooks/Books.jsx";
import BooksDeatailPage, {
  loader as booksDeatailLoader,
} from "./components/filterBooks/BooksDetail.jsx";
import BookSliderList from "./components/filterBooks/bookSliderList.jsx";
import BookSlider from "./components/filterBooks/bookSlider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: booksLoader,
      },
      { path: "news", element: <News /> },
      {
        path: "news/:newsId",
        element: <NewsDatailPage />,
        loader: newsDeatailLoader,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "books/:booksId",
        element: <BooksDeatailPage />,
        loader: booksDeatailLoader,
      },
      {
        path: "slider",
        element: <BookSlider />,
      },
      {
        path: "slider/:sliderId",
        element: <BookSliderList />,
        loader: booksDeatailLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
