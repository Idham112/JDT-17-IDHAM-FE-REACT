import { useEffect, useState } from "react";
import { getSearchedMovies, type Movie } from "../service/Movies";

export const useSearch = (query: string, page: number) => {
  const [searchedMovie, setSearchedMovie] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    if (!query.trim()) {
      setSearchedMovie([]);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(true);
      getSearchedMovies(page, query)
        .then((data) => {
          if (data) {
            setSearchedMovie(data.results);
            setTotalPages(data.total_pages);
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 500);

    return () => clearTimeout(timer);
  }, [query, page]);

  return { searchedMovie, loading, totalPages };
};
