import { useRouteError } from "react-router-dom";

import Header from "../components/header/Header";
export default function ErrorPage() {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <Header />
      <div style={{margin: '200px 200px'}}>
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </>
  );
}
