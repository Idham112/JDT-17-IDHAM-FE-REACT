import { getUpcomingMovies, type Movie } from "../service/Movies";
import { useEffect, useState } from "react";

export const useUpcoming = (page: number) => {
  const [upcomingList, setUpcomingList] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchUpcoming = async () => {
      setLoading(true);
      try {
        const response = await getUpcomingMovies(page);
        if (response) {
          setUpcomingList(response.results);
          setTotalPages(response.total_pages);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUpcoming();
  }, [page]);

  return { upcomingList, loading, totalPages };
};
