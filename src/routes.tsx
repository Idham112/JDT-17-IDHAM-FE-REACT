import { createBrowserRouter } from "react-router";
import Home from "./container/Homepage";
import CVPage from "./container/CV"
import Todo from "./container/Todo"
import Movie from "./container/Movies"
import MovieDetails from "./container/MovieDetails"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/cv-page",
    element: <CVPage />
  },
  {
    path: "/todo",
    element: <Todo />
  },
  {
    path: "/movie",
    element: <Movie />
  },
  {
    path: "/movie-detail",
    element: <MovieDetails />
  },
]);