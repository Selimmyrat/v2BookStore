import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Root from "./routes/Root.jsx";
// import ErrorPage from "./pages/ErrorPage.jsx";
import NewsDetailPage from "./components/news/NewsDateil.jsx";
import Home from "./pages/Home.jsx";
import News from "./components/news/News.jsx";
import Books from "./components/filterBooks/Books.jsx";
import BooksDetailPage from "./components/filterBooks/BooksDetail.jsx";

function App() {
  return (
    <Router>
      <Root />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:newsId" element={<NewsDetailPage />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:booksId" element={<BooksDetailPage />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Root from "./routes/root.jsx";
// import ErrorPage from "./pages/ErrorPage.jsx";
// import NewsDatailPage, {
//   loader as newsDeatailLoader,
// } from "./components/news/NewsDatail.jsx";
// import Home from "./pages/Home.jsx";
// import News from "./components/news/News.jsx";
// import Books from "./components/filterBooks/Books.jsx";
// import BooksDeatailPage, {
//   loader as booksDeatailLoader,
// } from "./components/filterBooks/BooksDetail.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//         // loader: booksLoader,
//       },
//       { path: "news", element: <News /> },
//       {
//         path: "news/:newsId",
//         element: <NewsDatailPage />,
//         loader: newsDeatailLoader,
//       },
//       {
//         path: "books",
//         element: <Books />,
//       },
//       {
//         path: "books/:booksId",
//         element: <BooksDeatailPage />,
//         loader: booksDeatailLoader,
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
