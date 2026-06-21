import { createBrowserRouter } from "react-router";
import Home from "./container/Homepage";
import CVPage from "./container/CV";
import Todo from "./container/Todo";
import Movie from "./container/Movies";
import MovieDetails from "./container/MovieDetails";
import Layout from "./container/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cv-page",
        element: <CVPage />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
      {
        path: "/movie",
        element: <Movie />,
      },
      {
        path: "/movie-detail",
        element: <MovieDetails />,
      },
    ],
  },
]);
